import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link href="/">Home</Link> |{" "}
      <Link href="/tasks">Tasks</Link>
    </nav>
  );
}