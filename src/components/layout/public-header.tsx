import Link from 'next/link';
import { AppLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';

export function PublicHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 flex items-center gap-2 p-1.5">
            <AppLogo className="h-8 w-auto text-primary" />
            <span className="font-headline text-xl font-semibold text-white">
              Explore Jharkhand
            </span>
          </Link>
        </div>
        <div className="flex flex-1 justify-end gap-x-4">
           <Button asChild variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
