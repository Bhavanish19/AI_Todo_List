"use client";
import Tasks from "@/components/AI_todolist/tasks";
import UserProfile from "@/components/AI_todolist/user-profile";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { anyApi } from "convex/server";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return(
    <main className="flex flex-col items-center
    justify-between p-24">
      <h1>AI_TODOLIST_2</h1>   
      <UserProfile />
    <Tasks />
  </main>
  );
}