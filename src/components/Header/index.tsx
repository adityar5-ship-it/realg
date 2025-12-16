import { ButtonBase } from "@mui/material";
import Image from "next/image";

export default function Header() {
  return (
    <div className="fixed top-12 left-0 right-0 z-50">
      <div className="mx-auto md:max-w-[90%] px-4">
        <div className="flex items-center rounded-full border border-[#f6f4ee] bg-white/60 backdrop-blur-xl shadow-lg md:px-4 md:py-2">
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
            <span className="font-display text-[28px] tracking-wide">
              REALG
            </span>

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
                <span className="font-sans text-sm font-bold whitespace-nowrap">
                  AGI INC
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="ml-auto flex items-center gap-4">
            <div className="lg:flex hidden gap-4">
              <ButtonBase
                sx={{
                  borderRadius: "9999px",
                  overflow: "hidden",
                }}
                component="button"
              >
                <span
                  className={`block rounded-full px-4 py-1 text-[#232F3E] font-sans text-sm hover:bg-black/5 transition`}
                >
                  Leaderboard
                </span>
              </ButtonBase>
              <ButtonBase
                sx={{
                  borderRadius: "9999px",
                  overflow: "hidden",
                }}
                component="button"
              >
                <span
                  className={`block rounded-full px-4 py-1 text-[#232F3E] font-sans text-sm hover:bg-black/5 transition`}
                >
                  Metrics
                </span>
              </ButtonBase>
              <ButtonBase
                sx={{
                  borderRadius: "9999px",
                  overflow: "hidden",
                }}
                component="button"
              >
                <span
                  className={`block rounded-full px-4 py-1 text-[#232F3E] font-sans text-sm hover:bg-black/5 transition`}
                >
                  About
                </span>
              </ButtonBase>
              <ButtonBase
                sx={{
                  borderRadius: "9999px",
                  overflow: "hidden",
                }}
                component="button"
              >
                <span
                  className={`block rounded-full px-4 py-1 text-[#232F3E] font-sans text-sm hover:bg-black/5 transition`}
                >
                  Partner
                </span>
              </ButtonBase>
            </div>
            <button
              className="
          ml-2
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
          cursor-pointer
        "
            >
              Participate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
