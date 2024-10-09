"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Login</h1>
      <Button onClick={() => signIn("github", { callbackUrl: "/dashboard" })}>
        Entrar com GitHub
      </Button>
    </div>
  );
}
