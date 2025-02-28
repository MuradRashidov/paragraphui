"use server"
import { print } from "graphql";

import { fetchGraphql } from "../fetchGraphql";
import { SignInFormState, SignUpFormState } from "../types/formState";
import { SignUpFormSchema } from "../zod-schemas/signUpFormSchema";
import { CREATE_USER_MUTATION, SIGN_IN_MUTATION } from "../gqlMutations";
import { redirect } from "next/navigation";
import { SignInFormSchema } from "../zod-schemas/signInFormSchema";
import { revalidatePath } from "next/cache";
import { createSession } from "../session";

export const SignUp = async (
  state: SignUpFormState,
  formData: FormData
): Promise<SignUpFormState> => {
    
  const validatedFields = SignUpFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors,data:Object.fromEntries(formData.entries()) };
  } 
  const data = await fetchGraphql(print(CREATE_USER_MUTATION), {
    input: { ...validatedFields.data },
  });
  
  if (data.errors) {
    return { message: "Something went wrong" ,data:Object.fromEntries(formData.entries())};
  }
  else{
    redirect("/auth/sign-in");
    //return {data:Object.fromEntries(formData.entries())}
  }
};

export const SignIn = async (state:SignInFormState,formData:FormData):Promise<SignInFormState> => {  
    const validatedFields = SignInFormSchema.safeParse(Object.fromEntries(formData.entries()));
    if(!validatedFields.success){    
      return {
        errors:validatedFields.error.flatten().fieldErrors,
        data: Object.fromEntries(formData.entries())
      }
    }
    const data = await fetchGraphql(print(SIGN_IN_MUTATION),{
      signInInput:{
        ...validatedFields.data
      }
    })
    if(data.errors) {
      return {
        message:"Invalid credentials",
        data:Object.fromEntries(formData.entries())
      }
    }
    else{
      await createSession({
        user:{
          id:data.signIn.id,
          name:data.signIn.name,
          avatar:data.signIn.avatar
        },
        accessToken:data.signIn.token
      })
      revalidatePath("/")
      redirect("/")
    }
}
