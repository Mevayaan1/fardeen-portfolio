 

export default function BentoCard({ children, className = "" }) {
  return (
    <div
      className={`card ${className}`}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
