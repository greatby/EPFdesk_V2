export default function Footer() {
  return (
    <footer className="fixed w-[98%] backdrop-blur-[1px] bg-[#ffffff21] m-[15px] p-[_0_15px] rounded-[10px]">
      <div className="mx-auto max-w-7xl px-3 py-6 flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">EPFdesk</h2>
          <p className="text-sm text-white/70 max-w-xs">
            Building tools to supercharge your AI development journey.
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-medium mb-2">Product</h3>
            <ul className="space-y-1 text-white/70">
              <li><a href="#" className="hover:text-white transition">Overview</a></li>
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Company</h3>
            <ul className="space-y-1 text-white/70">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Support</h3>
            <ul className="space-y-1 text-white/70">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
