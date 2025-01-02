import { Nav } from "../nav";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <header className="p-2 text-slate-950">
        <Nav />
      </header>

      <main className="p-2 container mx-auto">{children}</main>
    </div>
  );
}
