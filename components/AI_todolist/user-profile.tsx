"use client";
import Image from "next/image";
import { Import } from "lucide-react";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import React from "react";

 export default function UserProfile() {
    const session = useSession();

    return (
        <div>
            <Image
                // src={session?.data?.user?.image}
                src="profile.png"
                width={24}
                height={24}
                alt ='user profile picture'
                className="rounded-full"
                />
            </div>
    );
 }
