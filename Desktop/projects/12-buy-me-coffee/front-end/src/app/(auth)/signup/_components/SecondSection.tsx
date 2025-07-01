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
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

export const SecondSection = () => {
  const router = useRouter();

  const loginSchema = z.object({
    username: z
      .string()
      .min(2, "username too short")
      .email("Invalid email")
      .max(50),
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
    router.push("/login");
  };

  const isValueValid = !form.watch("username") || !form.watch("password");
  return (
    <div>
      <div className=" gap-[6px] flex flex-col">
        <h1 className="font-[600] text-[24px] text-[#09090B]">
          Welcome, Username
        </h1>
        <p className="font-[400] pb-[24px] text-[14px] text-[#71717A]">
          Connect email and set a password
        </p>
      </div>
      <div className="absolute top-[30px] right-[80px]">
        <Button variant={"outline"}>Log in</Button>
      </div>
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
          <div className="pt-[24px]">
            <Button type="submit" className="w-full" disabled={isValueValid}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
      {/* <div>
        <div className="px-[24px] pb-[24px] gap-[2px] flex flex-col">
          <p className="font-[500] text-[14px] text-[#09090B]">Email</p>
          <Input placeholder="Enter email here" />
        </div>
        <div className="px-[24px] pb-[24px] gap-[2px] flex flex-col">
          <p className="font-[500] text-[14px] text-[#09090B]">Password</p>
          <Input placeholder="Enter password here" />
        </div>
        <div className="px-[24px] pb-[24px] flex flex-col">
          <Link href={"/"}>
            <Button className="w-full">Continue</Button>
          </Link>
        </div>
      </div> */}
    </div>
  );
};
