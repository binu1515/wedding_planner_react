import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const PlannerLogin = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // In a real app, this would handle the login process
    alert("This is a demo. In a real application, this would log you in.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif text-wedding-navy font-semibold mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to manage your wedding planner profile</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
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
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-wedding-gold hover:bg-wedding-navy text-white"
                >
                  Sign In
                </Button>
              </form>
            </Form>
            
            <div className="mt-6 text-center">
              <Link to="#" className="text-sm text-wedding-navy hover:text-wedding-gold">
                Forgot your password?
              </Link>
            </div>
            
            <Separator className="my-6" />
            
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Don't have an account yet?
              </p>
              <Link to="/planner/register">
                <Button variant="outline" className="border-wedding-gold text-wedding-navy hover:bg-wedding-lightGold">
                  Register as a Wedding Planner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PlannerLogin;