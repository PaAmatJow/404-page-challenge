import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Link href='/404' className="px-10 py-4 bg-[#141516] text-[#bbb] rounded-md" >
        404 page
      </Link>
    </main>
  );
}
