
import { useState } from "react";
import { ExternalLink, Code2, ChevronDown, Lightbulb } from "lucide-react";
import { projects, stackTagClass as stackColors } from "../data/portfolioData";



const Projects = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground">Things I've Actually Built</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <article
              key={project.num}
              className={`glass rounded-2xl overflow-hidden hover-lift ${project.glowColor} transition-all duration-300`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className={`absolute inset-0 bg-linear-to-t ${project.gradient} opacity-30`} />
                <span className="absolute top-4 left-4 text-4xl font-bold text-foreground/30 drop-shadow-lg">
                  {project.num}
                </span>
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-background/30 backdrop-blur-sm hover:bg-background/50 transition-colors text-foreground"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-background/30 backdrop-blur-sm hover:bg-background/50 transition-colors text-foreground"
                  >
                    <Code2 size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {project.desc}
                </p>
                <p className="text-sm text-foreground/70 mb-4">
                  <span className="font-medium">Solves:</span> {project.solves}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
                        stackColors[tech] || "bg-muted text-foreground"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mb-4">
                  <a
                    href="#"
                    className={`flex-1 text-center px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r ${project.gradient} text-primary-foreground hover:opacity-90 transition-opacity`}
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href="#"
                    className="flex-1 text-center px-4 py-2 rounded-lg text-sm font-medium glass hover:bg-muted/80 transition-colors"
                  >
                    &lt; &gt; GitHub
                  </a>
                </div>

                {/* Accordion */}
                <button
                  onClick={() =>
                    setExpandedCard(expandedCard === i ? null : i)
                  }
                  className="w-full flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="flex items-center gap-1">
                    <Lightbulb size={14} /> What I Learned
                  </span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      expandedCard === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedCard === i ? "max-h-32 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-muted-foreground bg-muted/30 rounded-lg p-3">
                    {project.learned}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
