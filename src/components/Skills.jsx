import { Code2, Server, Database, Wrench } from "lucide-react";
import { skillGroups } from "../data/portfolioData";


const Skills = () => {

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground">
            Technologies I've worked with so far
          </p>
        </div>

        {/* Skill cloud */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {skillGroups.map((group) =>
            group.items.map((skill, i) => (
              <div
                key={skill}
                className="group relative glass rounded-xl px-5 py-3 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg cursor-default"
                style={{ animation: `fadeInUp 0.5s ease-out ${i * 60}ms both` }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-white/50" />
                  <span className="font-medium text-sm">{skill}</span>
                </div>
                <div
                  className={`absolute inset-0 rounded-xl bg-linear-to-r ${group.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                />
              </div>
            ))
          )}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="glass rounded-2xl p-5 text-center hover-lift group cursor-default"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-linear-to-br ${group.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className="text-background" />
                </div>
                <p className="font-bold text-lg">{group.items.length}</p>
                <p className="text-xs text-muted-foreground">{group.title} Skills</p>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div className="max-w-md mx-auto glass rounded-2xl p-6 text-center border border-primary/10">
          <p className="text-muted-foreground italic">
            "Still learning. Always improving. 🚀"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
