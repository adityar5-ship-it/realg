export default function RealHero() {
  return (
    <section className="w-full p-4 mt-12 text-center">
      <div className="mx-auto max-w-5xl">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <span
            className="
            rounded-full 
            bg-linear-to-r 
from-[#EDC5FF] via-[#50B9FF] to-[#A9E9FF]
hover:from-[#A9E9FF] hover:via-[#50B9FF] hover:to-[#EDC5FF]
            px-8 py-2
            text-sm font-bold text-white
            shadow-md
          "
          >
            RealG v2 is live
          </span>
        </div>

        {/* Title */}
        <h1
          className="
          font-zilla
          text-[64px] sm:text-[80px] md:text-[90px]
          font-medium
          text-black
        "
        >
          REALG
        </h1>

        {/* Description */}
        <p className="text-[28px] text-gray-500">
          <span className="bg-[radial-gradient(circle_at_center,#EDC5FF_0%,#50B9FF_45%,#A9E9FF_70%)] bg-clip-text text-transparent">
            R
          </span>
          ealistic{" "}
          <span className="bg-[radial-gradient(circle_at_center,#EDC5FF_0%,#50B9FF_45%,#A9E9FF_70%)] bg-clip-text text-transparent">
            E
          </span>
          valuations for{" "}
          <span className="bg-[radial-gradient(circle_at_center,#EDC5FF_0%,#50B9FF_45%,#A9E9FF_70%)] bg-clip-text text-transparent">
            A
          </span>
          gents{" "}
          <span className="bg-[radial-gradient(circle_at_center,#EDC5FF_0%,#50B9FF_45%,#A9E9FF_70%)] bg-clip-text text-transparent">
            L
          </span>
          eaderboard{" "}
          <span className="bg-[radial-gradient(circle_at_center,#EDC5FF_0%,#50B9FF_45%,#A9E9FF_70%)] bg-clip-text text-transparent">
            G
          </span>
        </p>
      </div>
    </section>
  );
}
