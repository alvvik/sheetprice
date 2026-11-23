"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type CollapsiblePanelProps = {
  open: boolean;
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function CollapsiblePanel({ open, children, className, id }: CollapsiblePanelProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (open) {
      setHeight(el.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open, children]);

  useEffect(() => {
    if (!open) return;
    const el = contentRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      setHeight(el.scrollHeight);
    });
    ro.observe(el);

    return () => ro.disconnect();
  }, [open]);

  return (
    <div id={id} className={className} style={{ height }} aria-hidden={!open}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
