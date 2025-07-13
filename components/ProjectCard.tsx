// components/ProjectCard.tsx
import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  imageUrl,
  liveUrl,
  githubUrl,
}) => {
  return (
    <div className="bg-red dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={192}
        className="w-full h-48 object-cover"
        priority
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-black dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-100 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={liveUrl}
            target="_blank"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            className="text-gray-600 dark:text-gray-400 hover:underline font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
