export default function Navbar() {
  return (
    <header className="">
      <div className="fixed w-[98%] backdrop-blur-[1px] bg-[#ffffff21] m-[15px] p-[_0_15px] rounded-[10px]">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="text-white font-semibold text-xl">
            EPFdesk
          </a>

          {/* Links */}
          <nav className="hidden md:flex space-x-8 text-white/80 font-medium text-sm">
            <a href="#product" className="hover:text-white transition">Product</a>
            <a href="#enterprise" className="hover:text-white transition">Enterprise</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#resources" className="hover:text-white transition">Resources</a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex space-x-4">
            <a
              href="/login"
              className="text-white/80 hover:text-white text-sm font-medium"
            >
              Sign in
            </a>
            <a
              href="/signup"
              className="text-black bg-white px-4 py-2 rounded-[2px] text-sm font-medium hover:bg-white/90 transition"
            >
              Try for free
            </a>
          </div>

          {/* Mobile Menu Placeholder */}
          <div className="md:hidden text-white">
            <button aria-label="Open menu">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
