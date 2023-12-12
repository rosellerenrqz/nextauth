import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import UserCard from "../components/UserCard";

export default async function Home() {
  const session = await getServerSession(options);
  // console.log(session?.user);
  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1>Shall not pass!</h1>
      )}
    </>
  );
}
