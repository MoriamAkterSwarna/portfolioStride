import { TypeAnimation } from "react-type-animation";
import { Download, FolderOpen } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-fuchsia-500/10 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-muted-foreground">
            👋 Open to Work — Available for Internship & Jobs
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="gradient-text">Aryan Khan</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
          Aspiring MERN Stack Developer
        </p>

        {/* Typing animation */}
        <div className="h-10 flex items-center justify-center mb-6">
          <TypeAnimation
            sequence={[
              "I Build Web Apps", 1500,
              "I Love Clean Code", 1500,
              "I'm Always Learning", 1500,
              "Let's Work Together", 1500,
            ]}
            speed={60}
            deletionSpeed={80}
            repeat={Infinity}
            className="text-lg sm:text-xl font-mono text-secondary"
          />
        </div>

        {/* Tagline */}
        <p className="text-muted-foreground mb-10 text-lg italic">
          "Turning coffee & curiosity into full-stack web experiences."
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-linear-to-r from-violet-600 to-purple-600 text-primary-foreground font-medium hover:shadow-[0_0_30px_hsl(270_80%_65%/0.4)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <FolderOpen size={18} />
            See My Projects
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg glass text-foreground font-medium hover-glow-cyan hover:-translate-y-0.5 transition-all duration-300"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
