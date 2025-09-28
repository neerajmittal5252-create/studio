import Link from 'next/link';
import { Github, Twitter, Instagram } from 'lucide-react';
import { AppLogo } from '@/components/icons';

export function PublicFooter() {
  return (
    <footer className="bg-secondary/30">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <AppLogo className="h-6 w-auto" />
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Explore Jharkhand. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
