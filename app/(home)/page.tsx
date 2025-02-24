import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <title>IsmyBio Documentation</title>
        <meta name="description" content="Welcome to IsmyBio, your personal bio page." />
        <meta name="keywords" content="IsmyBio, bio, documentation, tutorials" />
        <h1 className="text-5xl font-bold text-fd-secondary-foreground">Learn to use</h1> <br></br><br></br>
      <center><Image src="/hero.png" alt="IsmyBio" width={750} height={500} /></center> <br></br><br></br>
      <div className="flex flex-row gap-2 items-center text-fd-muted-foreground justify-center">
        <Link
          href="/docs"
          className="text-fd-primary-foreground bg-fd-primary rounded-full font-medium text-sm px-4 py-3 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        >
          See Tutorials
        </Link>
        <Link
          href="https://ismy.bio"
          className="text-fd-secondary-foreground bg-fd-secondary rounded-full font-medium text-sm px-4 py-3 transition-colors hover:bg-fd-accent"
        >
          Return to IsmyBio
        </Link>
      </div>
    </main>
  );
}
