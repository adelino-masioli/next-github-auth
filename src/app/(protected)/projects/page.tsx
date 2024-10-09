import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import ProjectsClient from "./ProjectsClient";

export default async function ProjectsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // Here you can fetch project data from the server if needed
  const projects = [
    { id: 1, title: "Project A", description: "Project Description A" },
    { id: 2, title: "Project B", description: "Project Description B" },
    // Add more projects as needed
  ];

  return <ProjectsClient initialProjects={projects} />;
}
