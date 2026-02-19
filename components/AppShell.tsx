'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

type NavItem = { href: string; label: string; icon?: string };

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { href: '/', label: 'Home', icon: '⌂' },
      { href: '/contact', label: 'Contact', icon: '✉' },
    ],
    []
  );

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <div className="appbar">
      <button
        className="iconButton"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        type="button"
      >
        {open ? '✕' : '☰'}
      </button>
        <div className="title">Jennifer Lindsay</div>
      </div>

      {/* Overlay */}
      <div
        className={open ? 'overlay overlayOpen' : 'overlay'}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Drawer */}
      <aside className={open ? 'drawer drawerOpen' : 'drawer'} aria-hidden={!open}>
        <div className="drawerHeader">
          <div className="drawerTitle">Jennifer Lindsay</div>
        </div>

        <nav className="drawerNav">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? 'drawerLink drawerLinkActive' : 'drawerLink'}
              >
                <span className="drawerIcon" aria-hidden="true">
                  {item.icon ?? '•'}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="page">{children}</main>
    </>
  );
}
