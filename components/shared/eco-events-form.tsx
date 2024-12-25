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
  eventName: z.string().min(1, "Event legal name is required"),
  organizingName: z.string().min(1, "Event organizing name is required"),
  industry: z.string().min(1, "Event type is required"),
  eventAddress: z.string().min(1, "Event address is required"),
  region: z.string().min(1, "Region is required"),
  email: z.string().email("Invalid email address"),
  pin: z.string().min(4, "KRA Pin must be more than 4 digits"),
  sector: z.string().min(1, "Sector is required"),
  feedback: z.string().min(1, "Sector is required"),
  contact: z
    .string()
    .min(10, "Contact number must be at least 10 digits")
    .max(15, "Contact number can't exceed 15 digits"),
});

export default function EcoEventsForm({
  title = "Keep the Rhythm Alive!",
}: HeroFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: "",
      organizingName: "",
      industry: "",
      eventAddress: "",
      region: "",
      email: "",
      pin: "",
      sector: "",
      contact: "",
      feedback: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="rounded-none lg:w-[33.125rem] border-none shadow-none">
      <CardHeader className="text-[#23262FCC]">
        <CardTitle className="text-3xl text-black w-4/5">{title}</CardTitle>
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
                name="eventName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter event name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="eventAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Event address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="organizingName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organising Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Company Trading Name" {...field} />
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
            <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vibe with us</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Leave comments"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-sm">
              By clicking &ldquo;Get Started&rdquo;, I agree to the{" "}
              <HyperLink link="ECO-Events terms & conditions," href="/" /> and{" "}
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
