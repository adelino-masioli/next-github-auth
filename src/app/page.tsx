import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Welcome to my Portfolio</h1>
      <p className="text-xl mb-8">
        I am a developer passionate about creating innovative solutions.
      </p>
      <Link href="/projects">
        <Button>View Projects</Button>
      </Link>
    </div>
  );
}
