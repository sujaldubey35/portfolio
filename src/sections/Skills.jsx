const Skills = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {["JavaScript","HTML","CSS","BootStrap","React", "FastAPI", "Node.Js", "MongoDB", "MySQL", "Docker","VS.Code"].map(skill => (
          <span key={skill} className="px-4 py-2 bg-white/10 rounded-xl">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;