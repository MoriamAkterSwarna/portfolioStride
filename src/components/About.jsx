import { Download } from "lucide-react";
import { aboutStats } from "../data/portfolioData";



const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar area */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-violet-600 via-purple-600 to-cyan-500 animate-gradient-shift bg-size-[200%_200%]" />
              <div className="absolute inset-1 rounded-3xl bg-background flex items-center justify-center">
                <span className="text-7xl sm:text-8xl">👨‍💻</span>
              </div>
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-linear-to-r from-cyan-400 to-teal-400 flex items-center justify-center text-lg animate-float">
                ⚛️
              </div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full bg-linear-to-r from-green-400 to-emerald-400 flex items-center justify-center text-lg animate-float" style={{ animationDelay: "1s" }}>
                🌿
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-violet-500 to-cyan-500 rounded-full mb-6" />

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I'm a fresher MERN Stack developer who recently completed my B.Sc
              in Computer Science (2024). I may not have years of experience, but
              I bring curiosity, consistency, and a passion for building things
              that work beautifully.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {aboutStats.map((stat, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-4 text-center hover-lift hover-glow-violet"
                >
                  <span className="text-2xl mb-1 block">{stat.icon}</span>
                  <span className="text-sm text-foreground font-medium">
                    {stat.title}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-linear-to-r from-violet-600 to-purple-600 text-primary-foreground font-medium hover:shadow-[0_0_30px_hsl(270_80%_65%/0.4)] transition-all duration-300"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
