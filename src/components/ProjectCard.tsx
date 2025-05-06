import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  return (
    <Card className="w-full max-w-sm shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
          className="rounded-md object-cover"
        />
      </CardContent>
    </Card>
  );
}
