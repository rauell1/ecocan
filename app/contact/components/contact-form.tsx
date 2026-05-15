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
import { Textarea } from "@/components/ui/textarea";
import clsx from "clsx";

interface ContactFormProps {
  title?: string;
  className?: string;
}

const formSchema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  message: z.string().min(1, "Message is required"),
  email: z.string().email("Invalid email address"),
  contact: z
    .string()
    .min(10, "Contact number must be at least 10 digits")
    .max(15, "Contact number can't exceed 15 digits"),
});

export default function ContactForm({
  title = "1, 2, 3. Go!!",
  className,
}: ContactFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      message: "",
      email: "",
      contact: "",
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    // TODO: wire up form submission
  }

  return (
    <Card className={clsx("lg:mt-[28rem] xl:mt-60 rounded-2xl w-full lg:me-4 xl:me-0", className)}>
      <CardHeader className="text-[#23262FCC]">
        <CardTitle className="text-3xl">{title}</CardTitle>
        <CardDescription className="xl:text-xl font-light"></CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter business name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here."
                      {...field}
                    />
                  </FormControl>
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
                          <SelectValue placeholder="+254" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+254">+254</SelectItem>
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
            <Button type="submit" className="w-full rounded-full">
              Send Message
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
