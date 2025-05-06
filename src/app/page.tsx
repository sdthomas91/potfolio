// src/app/page.tsx (or a separate `/projects` page later)

import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
import ProjectCard from "@/components/ProjectCard"; // your existing component

const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  description,
  image,
  slug
}`;

export default async function HomePage() {
  const projects = await client.fetch<SanityDocument[]>(PROJECTS_QUERY);

  return (
    <main className="container mx-auto min-h-screen p-8 grid gap-6 grid-cols-1 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
        key={project._id}
        title={project.title}
        description={project.description}
        image={project.image}
      />
      ))}
    </main>
  );
}
