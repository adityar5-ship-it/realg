import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-8 left-0 right-0 z-50">
      <div className="mx-auto max-w-[95%] px-4">
        <div className="flex items-center rounded-full border border-[#f6f4ee] bg-white/60 backdrop-blur-xl shadow-lg px-4 py-2">
          {/* Mobile Menu */}
          <button className="mr-2 flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 lg:hidden p-2">
            <svg
              className=""
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="MenuIcon"
            >
              <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="font-display text-[28px] tracking-wide">REAL</span>

            <div className="h-6 w-px bg-black/20" />

            <div className="flex flex-col leading-none">
              <span className="font-serif text-[10px] uppercase tracking-widest text-black/60">
                By
              </span>

              <div className="flex items-center gap-2">
                <Image
                  src="/infinity.avif"
                  alt="Infinity Logo"
                  width={32}
                  height={16}
                />
                <span className="font-sans text-sm font-bold">AGI INC</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="ml-auto flex items-center gap-6">
            <div className="lg:flex hidden">
              <button className="rounded-full bg-[#f6f4ee] px-4 py-1.5 font-serif text-sm">
                Leaderboard
              </button>
              <button className="rounded-full px-4 py-1.5 font-serif text-sm hover:bg-black/5">
                Metrics
              </button>
              <button className="rounded-full px-4 py-1.5 font-serif text-sm hover:bg-black/5">
                About
              </button>
              <button className="rounded-full px-4 py-1.5 font-serif text-sm hover:bg-black/5">
                Partner
              </button>
            </div>
            <button
              className="
          ml-3
          rounded-full
          bg-black
          px-4
          py-2
          font-sans
          text-sm
          font-medium
          text-white
          lg:ml-auto
          md:flex
        "
            >
              Participate
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
