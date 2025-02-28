"use server"
import { authFetchGraphql, fetchGraphql } from "../fetchGraphql";
import { print } from "graphql";
import { CREATE_COMMENT_MUTATION, GET_POST_COMMENTS } from "../gqlMutations";
import { CommentEntity } from "../types/modelTypes";
import { CreateCommentFormState } from "../types/formState";
import { commentFormSchema } from "../zod-schemas/commentFormSchema";
export const fetchPostComments = async ({
  postId,
  skip,
  take,
}: {
  postId: number;
  skip?: number;
  take?: number;
}) => {
  const data = await fetchGraphql(print(GET_POST_COMMENTS), {
    postId,
    skip,
    take,
  });
  return {
    comments: data.getPostComments as CommentEntity[],
    count: data.getCommentCount as number,
  };
};

export const createComment = async (
  state: CreateCommentFormState,
  formData: FormData
): Promise<CreateCommentFormState> => {  
  const validatedFields = commentFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      data: Object.fromEntries(formData.entries()),
    };
  }
  const data = await authFetchGraphql(print(CREATE_COMMENT_MUTATION), {
    createCommentInput: {
      ...validatedFields.data,
    },
  });
  if (data) {
    console.log("data");
    
    return {
      message: "Şərhiniz əlavə olundu",
      ok: true,
      open: false,
    };
  }
  return {
    message: "Şərhiniz əlavə olunarkən xəta baş verdi",
    ok: false,
    open: true,
  };
};
