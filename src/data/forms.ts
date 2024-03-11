import { z } from 'zod';

export const registrationFormSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().email({ message: "Invalid email" }),
    phone: z.string().regex(new RegExp(/^6[58792]\d{7}$/), { message: "Invalid Phone number" }),
    password: z.string().regex(new RegExp(/^(?=.*\d).{6,}$/), { message: "Not strong enaugh" }),
    repassword: z.string()
}).refine((data) => data.password === data.repassword, {
    message: 'Password does not matches',
    path: ['repassword']
}).refine(data => !!data.firstName?.trim() || !!data.lastName?.trim(), {
    message: 'Both last and first names can\'t be empty',
    path: ['firstName']
});

export const authenticationFormSchema = z.object({
    identifier: z.string({
        required_error: 'Field required',
    }),
    password: z.string({
        required_error: 'Field required'
    })
});

export type RegistrationFormSchemaAsType = z.infer<typeof registrationFormSchema>;
export type AuthenticationFormSchemaAsType = z.infer<typeof authenticationFormSchema>;