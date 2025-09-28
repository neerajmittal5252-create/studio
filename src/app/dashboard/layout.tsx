'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  Camera,
  LayoutDashboard,
  LogOut,
  Send,
  ShoppingCart,
  Trophy,
  User,
  Users,
} from 'lucide-react';
import { AppLogo } from '@/components/icons';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/plan-trip', label: 'Plan My Trip', icon: Send },
  { href: '/dashboard/visual-guide', label: 'Visual Guide', icon: Camera },
  { href: '/dashboard/community', label: 'Community', icon: Users },
  { href: '/dashboard/bookings', label: 'Bookings', icon: ShoppingCart },
  { href: '/dashboard/rewards', label: 'Rewards', icon: Trophy },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <AppLogo className="size-7 shrink-0" />
            <span className="text-lg font-semibold">Explore Jharkhand</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={{ children: item.label, side: 'right' }}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === '/dashboard/profile'}
                tooltip={{ children: 'Profile', side: 'right' }}
              >
                <Link href="/dashboard/profile">
                  <Avatar className="size-6">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span>Profile</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={{ children: 'Log out', side: 'right' }}>
                <Link href="/">
                  <LogOut />
                  <span>Log out</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center justify-between border-b bg-background/50 px-4 md:justify-end">
          <SidebarTrigger className="md:hidden" />
          {/* Header content can go here, e.g. search bar, notifications */}
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
