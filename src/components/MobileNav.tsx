"use client";

import * as Popover from "@radix-ui/react-popover";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavLinkItem {
  label: string;
  href: string;
}

export function MobileNav({ links }: { links: NavLinkItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <button
            type="button"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 p-2 text-zinc-100 transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-blue-500/60"
          >
            <span className="relative inline-flex size-5 items-center justify-center">
              <Menu
                className={`absolute transition-all duration-200 ${
                  open ? "scale-75 opacity-0" : "scale-100 opacity-100"
                }`}
                size={20}
              />
              <X
                className={`transition-all duration-200 ${
                  open ? "scale-100 opacity-100" : "scale-75 opacity-0"
                }`}
                size={20}
              />
            </span>
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            align="center"
            sideOffset={12}
            collisionPadding={16}
            className="z-50 w-[calc(100vw-2rem)] max-w-5xl rounded-4xl border border-zinc-800 bg-zinc-950 p-3 shadow-xl transition-all duration-200 data-[state=closed]:-translate-y-2 data-[state=closed]:opacity-0 data-[state=open]:translate-y-0 data-[state=open]:opacity-100"
          >
            <div className="flex flex-col items-center gap-1">
              {links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="w-full rounded-full px-4 py-2.5 text-center text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-900 hover:text-white focus-visible:outline focus-visible:outline-blue-500/60"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
