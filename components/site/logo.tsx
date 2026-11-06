import Image from "next/image";
import Link from "next/link";
import { school } from "@/data/school";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand-logo ${light ? "brand-logo-light" : ""}`} href="/" aria-label={`${school.name} — início`}>
      <Image
        className="brand-logo-image"
        src={light ? "/images/logo-nado-livre-on-dark.svg" : "/images/logo-nado-livre.svg"}
        alt=""
        width={260}
        height={210}
        priority
      />
    </Link>
  );
}
