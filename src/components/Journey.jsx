import { timelineItems } from "../data/portfolioData";

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            My <span className="gradient-text">Journey</span> So Far
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground">How I went from zero to full-stack</p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-violet-500/60 via-cyan-500/40 to-transparent hidden md:block" />

          <div className="space-y-8">
            {timelineItems.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className="relative flex items-center md:justify-between">

                  {/* Left card */}
                  <div className={`w-full md:w-[44%] ${isLeft ? "md:block" : "md:invisible"}`}>
                    {isLeft && (
                      <div className="glass rounded-2xl p-5 border border-white/10 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/10">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <p className="font-semibold text-sm text-foreground leading-tight">{item.title}</p>
                            <p className="text-xs text-cyan-400 font-medium mt-0.5">{item.date}</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:flex">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 ring-4 ring-background shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
                  </div>

                  {/* Right card */}
                  <div className={`w-full md:w-[44%] ${!isLeft ? "md:block" : "md:invisible"}`}>
                    {!isLeft && (
                      <div className="glass rounded-2xl p-5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <p className="font-semibold text-sm text-foreground leading-tight">{item.title}</p>
                            <p className="text-xs text-violet-400 font-medium mt-0.5">{item.date}</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile: single column card */}
                  <div className="md:hidden w-full flex gap-4 items-start">
                    <div className="flex flex-col items-center pt-1">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 ring-[3px] ring-background shrink-0" />
                      {i < timelineItems.length - 1 && (
                        <div className="w-px flex-1 min-h-[3rem] bg-gradient-to-b from-violet-500/50 to-transparent mt-1" />
                      )}
                    </div>
                    <div className="glass rounded-2xl p-4 border border-white/10 hover:border-violet-400/30 transition-all duration-300 flex-1 mb-2">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <p className="font-semibold text-sm text-foreground leading-tight">{item.title}</p>
                          <p className="text-xs text-cyan-400 font-medium mt-0.5">{item.date}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* End marker */}
          <div className="hidden md:flex justify-center mt-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-400/30 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Still writing this story…
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
