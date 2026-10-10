import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#050505] px-6 text-center text-white">
      <div>
        <h1 className="text-6xl font-black text-ember">404</h1>
        <h2 className="mt-4 text-2xl font-bold">Page Not Found</h2>
        <p className="mt-2 text-white/60">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-ember px-6 py-3 text-sm font-bold text-black"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
