"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input, PasswordInput } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import * as yup from "yup";
import Link from "next/link"
import { ScanFaceIcon } from "@/components/icons"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { useLogin } from "@/api/login"


const loginSchema = yup.object().shape({
    emailAddress: yup.string()
        .required("Please enter your email address")
        .email("Invalid email address"),
    password: yup.string()
        .required("Please enter your password"),
});

export type LoginValues = yup.InferType<typeof loginSchema>;

const defaultValues: LoginValues = {
    emailAddress: "",
    password: "",
};

export default function Login() {
    const form = useForm<LoginValues>({ resolver: yupResolver(loginSchema), defaultValues, mode: "all" });
    const { mutate, isPending } = useLogin();


    async function onSubmit({ emailAddress, password }: LoginValues) {
        let formData = new URLSearchParams();
        formData.append('username', emailAddress);
        formData.append('password', password);
        mutate(formData);
        form.reset()
    }
    return (
        <>
            <header className="px-4 lg:px-8 h-20 flex items-center">
                <Link href="/" className="flex items-center justify-center" prefetch={false}>
                    <ScanFaceIcon className="h-10 w-10" />
                    <span className="sr-only">Attendance Management</span>
                </Link>
            </header>
            <div className="flex flex-col items-center justify-center h-[70vh] bg-background">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Login</CardTitle>
                        <CardDescription>Enter your email and password to access your account.</CardDescription>
                    </CardHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
                            <CardContent className="space-y-4">
                                <div className="flex flex-col gap-2 w-full">
                                    <FormField
                                        control={form.control}
                                        name="emailAddress"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Label htmlFor="emailAddress">Email</Label>
                                                <FormControl>
                                                    <Input
                                                        id="emailAddress"
                                                        placeholder="email@yourcompany.com"
                                                        {...field}
                                                        error={form.formState.errors.emailAddress?.message} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Label htmlFor="password">Password</Label>
                                                <FormControl>
                                                    <PasswordInput
                                                        id="password"
                                                        placeholder="Enter Password"
                                                        {...field}
                                                        error={form.formState.errors.password?.message} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-end">
                                <Button type="submit">Sign In</Button>
                            </CardFooter>
                        </form>
                    </Form>
                </Card>
            </div>
        </>
    )
}
