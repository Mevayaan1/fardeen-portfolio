export default function BentoCard({ children, className = "" }) {
  return (
    <div
      className={`card ${className}`}
      style={{ animationDelay: Math.random() * 0.3 + 's' }}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
