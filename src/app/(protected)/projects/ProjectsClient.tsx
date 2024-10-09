"use client";

import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useAuth } from "@/utils/useAuth";

interface Project {
  id: number;
  title: string;
  description: string;
}

interface ProjectsClientProps {
  initialProjects: Project[];
}

export default function ProjectsClient({
  initialProjects,
}: ProjectsClientProps) {
  const { session, status } = useAuth();

  if (status === "loading") {
    return <LoadingSpinner size="large" message="Loading projects..." />;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {initialProjects.map((project) => (
          <div key={project.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
