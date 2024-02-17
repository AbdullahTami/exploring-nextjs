import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold"> Exploring Next.js </h1>
      <Link href="/client" className="btn btn-account">
        Get Started
      </Link>
    </div>
  );
}

export default HomePage;
