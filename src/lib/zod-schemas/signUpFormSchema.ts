// import z from "zod";
// export const SignUpFormSchema = z.object({
//     name:z.string().min(2).trim(),
//     email:z.string().email(),
//     password:z.string().min(2)
//     .regex(/[a-zA-Z]/,{message:"Contain at least 1 letter"})
//     .regex(/[0-9]/,{message:"Contain at least 1 number"})
//     .regex(/[^a-zA-Z0-9]/,{message:"Contain at least 1 special character"})
//     .trim()
// })
import z from "zod";

export const SignUpFormSchema = z.object({
    name: z.string().min(2).trim(),
    email: z.string().email(),
    password: z.string().min(6) // Şifreyi en az 6 karakter yapmalısın
        .regex(/[a-zA-Z]/, { message: "Contain at least 1 letter" }) // En az 1 harf
        .regex(/[0-9]/, { message: "Contain at least 1 number" }) // En az 1 rakam
        .regex(/[^a-zA-Z0-9]/, { message: "Contain at least 1 special character" }) // En az 1 özel karakter
        .trim()
});
