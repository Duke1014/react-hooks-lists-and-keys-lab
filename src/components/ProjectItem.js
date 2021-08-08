import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((tech) => {
          return <span key = {project.id}>{tech}</span>
        })}
      </div>
    </div>
  );
}

export default ProjectItem;
