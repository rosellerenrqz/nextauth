import React from "react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import UserCard from "@/components/UserCard";

export default async function ClientPage() {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Client"} />
      ) : (
        <div>test</div>
      )}
    </>
  );
}
