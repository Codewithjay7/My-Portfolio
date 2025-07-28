import React from 'react'

// src/components/Skills.jsx

const skills = [
  "HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", 
  "Git & GitHub", "Vite", "Firebase", "REST API", "Responsive Design"
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 text-white text-center ">
      <h2 className="text-3xl font-bold mb-30 mt-20">🛠 Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-70">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-xl shadow-md hover:bg-indigo-600 transition duration-300 " 
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
