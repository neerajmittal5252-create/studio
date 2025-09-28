import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4">
        <Image
            src="https://picsum.photos/seed/auth-bg/1920/1080"
            alt="Jharkhand landscape background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[0.6]"
            data-ai-hint="landscape forest"
        />
        {children}
    </main>
  );
}
