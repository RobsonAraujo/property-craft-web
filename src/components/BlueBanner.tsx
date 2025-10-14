import { Sparkles, Target, Heart, TrendingUp } from "lucide-react";

export default function BlueBanner() {
  const values = [
    { icon: Target, text: "Goal-Focused" },
    { icon: Heart, text: "Client-First" },
    { icon: TrendingUp, text: "Results-Driven" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-brand-800 py-16 sm:py-20 lg:py-24">
      <div className="relative flex items-center justify-center px-4">
        <div className="text-center text-white max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold text-brand-100 bg-brand-700/50 rounded-full border border-brand-700">
            <Sparkles className="w-4 h-4 text-brand-300" />
            <span>Your Success is Our Mission</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Let&apos;s make that happen!
          </h2>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90 mb-8 leading-relaxed">
            You&apos;ve invested in property to get more out of life.
          </p>

          <div className="relative inline-block mb-12">
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We&apos;re here to ensure your investment works harder for you,
              delivering the lifestyle and returns you deserve.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 max-w-3xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-white/90"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-brand-700 rounded-lg">
                  <value.icon className="w-5 h-5 text-brand-200" />
                </div>
                <span className="text-base font-medium">
                  {value.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
