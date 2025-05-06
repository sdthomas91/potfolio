// src/components/ProjectCard.tsx
import { urlFor } from "@/sanity/imageUrl";

interface ProjectCardProps {
  title: string;
  description: string;
  image: any; // ideally a SanityImage type, but `any` works for now
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  const imageUrl = urlFor(image).width(500).height(300).url();

  return (
    <div className="rounded-lg overflow-hidden border bg-card shadow-md p-4">
      {image && (
        <img src={imageUrl} alt={title} className="w-full rounded mb-4" />
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
