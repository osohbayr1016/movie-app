import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

type StepProps = {
  nextStep: () => void;
};

export const CreateSecondPage = ({ nextStep }: StepProps) => {
  const signupSchema = z.object({
    countries: z.any(),
    firstName: z.string().min(2, "First name must match").max(50),
    lastName: z.string().min(2, "Last name must match"),
    card: z.string().min(16, "Invalid card number").max(16),
    years: z.string().min(4, "Invalid year").max(4),
    expires: z.string().min(1, "Invalid month").max(2),
    cvc: z.string().min(3, "Invalid CVC").max(3),
  });

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      countries: "",
      firstName: "",
      lastName: "",
      card: "",
      expires: "",
      years: "",
      cvc: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof signupSchema>) => {
    console.log(values);
    nextStep();
  };

  const isValueValid =
    !form.watch("countries") ||
    !form.watch("firstName") ||
    !form.watch("lastName") ||
    !form.watch("card");
  !form.watch("expires");
  !form.watch("years");
  !form.watch("cvc");

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className=" w-[510px] flex flex-col ">
        <div className="">
          <h1 className="font-[600] text-[24px] text-[#09090B]">
            How would you like to be paid?
          </h1>
          <p className="font-[400] text-[14px] text-[#71717A] pb-[20px]">
            Enter location and payment details
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-[25px]"
          >
            <FormField
              control={form.control}
              name="countries"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>select country</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full ">
                        <SelectValue placeholder="Select" {...field} />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        <SelectItem value="Australia">Australia</SelectItem>
                        <SelectItem value="Mongolia">Mongolia</SelectItem>
                        <SelectItem value="United States">
                          United States
                        </SelectItem>
                        <SelectItem value="New Zealand">New Zealand</SelectItem>
                        <SelectItem value="United Kingdom">
                          United Kingdom
                        </SelectItem>
                        <SelectItem value="HipHop">HipHop</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full justify-between">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl className="w-[250px]">
                      <Input placeholder="Enter username here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl className="w-[250px]">
                      <Input placeholder="Enter username here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="card"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter card number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="XXXX-XXXX-XXXX-XXXX"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="expires"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expires</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="month" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="years"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Year" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cvc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVC</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="CVC" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Link href={"/"} className="pt-[24px]">
              <Button type="submit" className="w-full" disabled={isValueValid}>
                Submit
              </Button>
            </Link>
          </form>
        </Form>
      </div>
    </div>
  );
};
