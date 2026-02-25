import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <div className="w-3xs flex items-center gap-2 font-semibold text-xl">
      <Link href="/">
        <Image
          className="dark:invert"
          src="/logo-full.png"
          alt="AIValley - Public AI Directory"
          width={100}
          height={20}
          priority
        />
      </Link>
    </div>
  );
}
