"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import HyperLink from "../hyperlink/hyperlink";
import clsx from "clsx";

interface EcostationFormProps {
  title?: string;
  className?: string;
}

const formSchema = z.object({
  businessName: z.string().min(1, "Business legal name is required"),
  tradingName: z.string().min(1, "Business trading name is required"),
  businessType: z.string().min(1, "Business type is required"),
  businessAddress: z.string().min(1, "Business address is required"),
  region: z.string().min(1, "Region is required"),
  email: z.string().email("Invalid email address"),
  contact: z
    .string()
    .min(10, "Contact number must be at least 10 digits")
    .max(15, "Contact number can't exceed 15 digits"),
});

export default function EcostationForm({
  title = "1, 2, 3. Go!!",
  className,
}: EcostationFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      tradingName: "",
      businessType: "",
      businessAddress: "",
      region: "",
      email: "",
      contact: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card
      className={clsx(
        "rounded-2xl w-5/6 ms-auto",
        className
      )}
    >
      <CardHeader className="text-[#23262FCC]">
        <CardTitle className="text-3xl text-black">{title}</CardTitle>
        <CardDescription className="xl:text-sm font-light text-black">
          Already in the ECOmmunity?{" "}
          <Link href="/" className="text-green-500 hover:underline">
            Log in
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Legal Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter business name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="businessAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address/ street name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-1 gap-4">
              <FormField
                control={form.control}
                name="businessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="type1">Type 1</SelectItem>
                        <SelectItem value="type2">Type 2</SelectItem>
                        <SelectItem value="type3">Type 3</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <div className="flex">
                      <Select>
                        <SelectTrigger className="w-[80px]">
                          <SelectValue placeholder="+233" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+233">+233</SelectItem>
                          <SelectItem value="+1">+1</SelectItem>
                          <SelectItem value="+44">+44</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        placeholder="Mobile number"
                        className="flex-1 ml-2"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-sm">
              By clicking &ldquo;Get Started&rdquo;, I agree to the{" "}
              <HyperLink link="ECO-Station terms & conditions," href="/" /> and{" "}
              <HyperLink link="privacy policy" href="/" />.
            </p>
            <Button type="submit" className="w-full rounded-full">
              Get Started
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
