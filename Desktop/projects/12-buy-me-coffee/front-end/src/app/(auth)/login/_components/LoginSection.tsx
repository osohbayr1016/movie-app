"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

export const LoginSection = () => {
  const router = useRouter();

  const loginSchema = z.object({
    username: z.string().min(2, "Invalid Email").email("Invalid email").max(50),
    password: z
      .string()
      .min(8, "password must have 8 characters")
      .regex(/[A-Z]/, "Must include an uppercase letter")
      .regex(/[0-9]/, "Must include a number")
      .max(50),
  });

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
    router.push("/");
  };

  const isValueValid = !form.watch("username") || !form.watch("password");
  console.log(isValueValid);

  return (
    <div>
      <div className="pb-[24px] flex flex-col">
        <h1 className="font-[600] text-[24px] text-[#09090B]">Welcome back</h1>
      </div>
      <Link href={"/signup"} className="absolute top-[30px] right-[80px]">
        <Button variant={"outline"}>Sign up</Button>
      </Link>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="gap-4 flex flex-col"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter username here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter password here"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link href={"/CreateProfile"} className="pt-[24px]">
            <Button type="submit" className="w-full" disabled={isValueValid}>
              Submit
            </Button>
          </Link>
        </form>
      </Form>
      {/* <div>
        <div className="px-[24px] gap-[2px] flex flex-col">
          <p className="font-[500] text-[14px] text-[#09090B]">Email</p>
          <Input placeholder="Enter username here" />
        </div>
        <div className="px-[24px] gap-[2px] flex flex-col">
          <p className="font-[500] text-[14px] text-[#09090B]">Password</p>
          <Input placeholder="Enter password here" />
        </div>
        <div className="px-[24px] flex flex-col">
          <Button className="w-full">Continue</Button>
        </div>
      </div> */}
    </div>
  );
};
