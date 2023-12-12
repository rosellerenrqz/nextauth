import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 sm:p-10">
      <ul className="flex flex-col sm:flex-row sm:justify-evenly text-xl mx-auto font-medium">
        <li className="mb-2 sm:mb-0">
          <Link href="/">Home</Link>
        </li>
        <li className="mb-2 sm:mb-0">
          <Link href="/server">Server</Link>
        </li>
        <li className="mb-2 sm:mb-0">
          <Link href="/client">Client</Link>
        </li>
        <li className="mb-2 sm:mb-0">
          <Link href="/extra">Extra</Link>
        </li>
        <li className="mb-2 sm:mb-0">
          <Link href="/api/auth/signin">Sign In</Link>
        </li>
        <li className="mb-2 sm:mb-0">
          <Link href="/api/auth/signout">Sign Out</Link>
        </li>
      </ul>
    </nav>
  );
}
