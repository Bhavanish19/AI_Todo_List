"use client";
import { signInAction } from "@/actions/auth-action";
import Tasks from "@/components/AI_todolist/tasks";
import UserProfile from "@/components/AI_todolist/user-profile";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { anyApi } from "convex/server";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Home() {
 // const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex flex-col items-center
    justify-between p-24">
      <h1>Login</h1>

      <form action={signInAction}>
       <Button>Log in</Button>
      </form>
    </main>
  );
}