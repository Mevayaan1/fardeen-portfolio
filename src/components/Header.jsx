export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-transparent border-b border-gray-700">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a href="#" className="text-lg font-semibold text-black">
            YourName
          </a>

          <div className="hidden md:flex gap-6">
            {["about", "projects", "experience", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm text-slate-200 hover:text-white transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-900 transition"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
