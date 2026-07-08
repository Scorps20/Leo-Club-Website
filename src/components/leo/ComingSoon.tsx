import Link from "next/link";

export default function ComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="liquid-glass rounded-3xl max-w-lg w-full px-8 py-16 text-center">
        <p className="text-white/40 text-sm tracking-widest uppercase mb-4">
          Coming Soon
        </p>
        <h1
          className="text-4xl md:text-5xl text-white tracking-tight mb-6"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {title}
        </h1>
        <p className="text-white/60 text-base leading-relaxed mb-10">
          {description}
        </p>
        <Link
          href="/"
          className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium inline-block hover:bg-white/5 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
