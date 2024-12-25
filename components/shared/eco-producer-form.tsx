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
import HyperLink from "./hyperlink/hyperlink";
import { Textarea } from "../ui/textarea";

interface HeroFormProps {
  title?: string;
}

const formSchema = z.object({
  businessName: z.string().min(1, "Business legal name is required"),
  tradingName: z.string().min(1, "Business trading name is required"),
  industry: z.string().min(1, "Business type is required"),
  businessAddress: z.string().min(1, "Business address is required"),
  region: z.string().min(1, "Region is required"),
  email: z.string().email("Invalid email address"),
  pin: z.string().min(4, "KRA Pin must be more than 4 digits"),
  sector: z.string().min(1, "Sector is required"),
  contact: z
    .string()
    .min(10, "Contact number must be at least 10 digits")
    .max(15, "Contact number can't exceed 15 digits"),
});

export default function EcoProducerForm({
  title = "Let’s do Business the Right way",
}: HeroFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      tradingName: "",
      industry: "",
      businessAddress: "",
      region: "",
      email: "",
      pin: "",
      sector: "",
      contact: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="rounded-none lg:w-[33.125rem] border-none shadow-none">
      <CardHeader className="text-[#23262FCC]">
        <CardTitle className="text-3xl text-black w-3/5">{title}</CardTitle>
        <CardDescription className="font-light text-black">
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
                    <FormLabel>Company Legal Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Incorporated name" {...field} />
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
                    <FormLabel>Registered Address</FormLabel>
                    <FormControl>
                      <Input placeholder="P.O. Box" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="tradingName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Trading Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Company Trading Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="tradingName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Registered Number</FormLabel>
                    <FormControl>
                      <Input placeholder="PVT-" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>KRA PIN</FormLabel>
                    <FormControl>
                      <Input placeholder="P012345678Z.." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Industry" />
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
                name="sector"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sector</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sector" />
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
            </div>
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Talk to Us</FormLabel>
                  <FormControl>
                    <Textarea/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-sm">
              By clicking &ldquo;Get Started&rdquo;, I agree to the{" "}
              <HyperLink link="ECO-Producer terms & conditions," href="/" /> and{" "}
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
