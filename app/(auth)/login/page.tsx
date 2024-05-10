"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import Link from "next/link"

const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})

export default function LoginPage() {
    const navigation = useRouter()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          username: "",
          password: "",
        },
      })
     
      function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        })
        navigation.push("/dashboard")
      }

    return (
        <div className="w-full min-h-screen grid lg:grid-cols-2">
            <div className="w-full flex justify-center items-center">
                
                <div className='w-full p-12 flex flex-col justify-center items-center gap-8'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                            <Card className='w-full max-w-lg mx-auto'>
                                <CardHeader>
                                    <CardTitle>
                                        Welcome
                                    </CardTitle>
                                    <CardDescription>
                                        Login in to your account
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-4">
                                    {/*  */}
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Email" {...field} />
                                            </FormControl>
                                            {/* <FormDescription>
                                                This is your public display name.
                                            </FormDescription> */}
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="Password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </CardContent>
                                <CardFooter>
                                    <Button type="submit">Login</Button>
                                </CardFooter>
                            </Card>
                        </form>
                    </Form>
                    <div>
                        <p className="w-full flex justify-center items-center gap-2">
                            <span>
                                Don{"'"}t have an account?
                            </span>
                            <Link href="/signup">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex w-full h-full bg-violet-700 flex-col justify-center items-center gap-8">
                <h1 className="text-7xl font-extrabold text-violet-600">
                    LOGIN
                </h1>
            </div>
        </div>
    )
}
