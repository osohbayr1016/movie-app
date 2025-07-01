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

export const CreateFirstPage = ({ nextStep }: StepProps) => {
  const signupSchema = z.object({
    name: z.string().min(2, "Please enter your name").max(50),
    about: z.string().min(2, "Please enter info about yourself").max(50),
    URL: z.string().min(2, "Please enter a social link"),
    image: z.any(),
  });

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      about: "",
      URL: "",
      image: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof signupSchema>) => {
    console.log(values);
    nextStep();
  };

  const isValueValid =
    !form.watch("name") ||
    !form.watch("about") ||
    !form.watch("URL") ||
    !form.watch("image");

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className=" w-[510px] flex flex-col ">
        <div className="">
          <h1 className="font-[600] text-[24px] text-[#09090B]">
            Complete your profile page
          </h1>
          <p className="font-[400] text-[14px] text-[#71717A] pb-[20px]"></p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-[25px]"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Photo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter username here"
                      {...field}
                      type="file"
                      className="w-[160px] h-[160px] rounded-full border-dotted opacity-50 "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter username here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Enter username here"
                      {...field}
                      className="border-1 rounded-md h-[100px] py-1 px-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="URL"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Social media URL</FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="Enter username here"
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
      </div>
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
