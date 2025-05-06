import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
  <ProjectCard
    title="Tropical Balcony Makeover"
    description="A small city balcony transformed into a lush tropical escape."
    imageUrl="/sample-balcony.jpg"
  />
</main>
  );
}
