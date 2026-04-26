const ProjectCard = ({ title, desc, tech, github, live }) => {
  return (
    <div className="bg-white/10 p-6 rounded-xl hover:scale-105 transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2">{desc}</p>
      <p className="text-blue-400 mt-2">{tech}</p>

      <div className="flex gap-4 mt-4">
        <a href={github} target="_blank" className="text-sm bg-gray-700 px-3 py-1 rounded">
          GitHub
        </a>
        <a href={live} target="_blank" className="text-sm bg-blue-500 px-3 py-1 rounded">
          Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;