import { ImageIcon } from "lucide-react";

export default function MediaPlaceholder({
  className = "",
  label = "Photos & videos coming soon",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`bg-black flex flex-col items-center justify-center gap-3 ${className}`}
    >
      <ImageIcon size={28} className="text-white/15" />
      <span className="text-white/20 text-xs tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}
