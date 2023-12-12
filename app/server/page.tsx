import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import UserCard from "@/components/UserCard";

export default async function ServerPage() {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Server"} />
      ) : (
        <div>serverPage</div>
      )}
    </>
  );
}
