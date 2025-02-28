import z from "zod";

export const SignInFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5) // Şifreyi en az 6 karakter yapmalısın
        // .regex(/[a-zA-Z]/, { message: "Contain at least 1 letter" }) // En az 1 harf
        // .regex(/[0-9]/, { message: "Contain at least 1 number" }) // En az 1 rakam
        // .regex(/[^a-zA-Z0-9]/, { message: "Contain at least 1 special character" }) // En az 1 özel karakter
        .trim()
});
