import Image from "next/image";
import { Metadata } from "next";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
// import fallBackImage from "@/public/project.png";
import { getSingleProject } from "@/lib/sanity.query";
import Link from "next/link";

type Props = {
  params: {
    project: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return {
    title: `${project.name} | Project`,
    description: project.tagline,
    openGraph: {
      images:
        project.coverImage?.image ||
        "",
      title: project.name,
      description: project.tagline,
    },
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {project.name}
          </h1>

          <Link
            href={project.projectUrl}
            rel="noreferrer noopener"
            className="bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2">
            Explore
          </Link>
        </div>
        <Link href={project.projectUrl}>
          <Image
            className="rounded-xl border border-zinc-800"
            width={900}
            height={460}
            src={project.coverImage?.image}
            alt={project.coverImage?.alt || project.name}
          />
        </Link>

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
          <PortableText value={project.description} />
        </div>
      </div>
    </main>
  );
}