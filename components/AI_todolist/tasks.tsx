"use client"; 
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { anyApi } from "convex/server";
import Image from "next/image";

export default function Tasks () {
  const tasks = useQuery(api.tasks.get);
  return(
    <div>
        <p>Tasks</p>
         {tasks?.map((tasks, idx) => <p key={idx}>{JSON.stringify(tasks)}</p>)} 
    </div>
  );
}