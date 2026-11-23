import Link from "next/link";
import { MobileNav } from "./MobileNav";

interface NavLinkItem {
  label: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  { label: "Sklep", href: "/sklep" },
  { label: "O nas", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <nav className="relative mx-auto flex w-full max-w-5xl flex-col rounded-4xl border border-zinc-800 bg-zinc-950 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            className="flex-none text-lg font-semibold text-white focus:opacity-80 focus:outline-hidden"
            href="/"
          >
            Osiedlowy szczeniak
          </Link>

          <MobileNav links={navLinks} />

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                className="rounded-full px-3 py-2 text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-900 hover:text-white focus-visible:outline focus-visible:outline-blue-500/60"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
