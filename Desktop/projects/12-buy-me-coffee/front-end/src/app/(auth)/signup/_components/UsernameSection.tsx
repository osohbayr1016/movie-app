"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import Link from "next/link";

type StepProps = {
  nextStep: () => void;
};

export const UsernameSection = ({ nextStep }: StepProps) => {
  const signupSchema = z.object({
    username: z.string().min(2, "username too short").max(50),
  });

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof signupSchema>) => {
    nextStep();
  };

  const isValueValid = !form.watch("username");

  return (
    <div>
      <div>
        <div className=" gap-[6px] flex flex-col">
          <h1 className="font-[600] text-[24px] text-[#09090B]">
            Create your Accound
          </h1>
          <p className="font-[400] text-[14px] text-[#71717A] pb-[20px]">
            Choose a username for your page
          </p>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter username here" {...field} />
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
      <Link href={"/login"} className="absolute top-[30px] right-[80px]">
        <Button variant={"outline"}>Log in</Button>
      </Link>
      {/* <div>
        <div className="px-[24px] pb-[24px] gap-[10px] flex flex-col">
          <p className="font-[500] text-[14px] text-[#09090B]">Username</p>
          <Input placeholder="Enter username here" />
        </div>
        <div className="px-[24px] pb-[24px] flex flex-col">
          <Button className="w-full">Continue</Button>
        </div>
      </div> */}
    </div>
  );
};
