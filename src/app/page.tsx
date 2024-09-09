import type { ProfileType, ProjectType } from "@/types";
import HeroSvg from "../../public/icons/HeroSvg";
import { getProfile, getProjects } from "@/lib/sanity.query";
import Link from "next/link";
import Image from "next/image";
import { UrlForImage } from "@/lib/sanity";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();
  const projects: ProjectType[] = await getProjects();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                {data.headline}
              </h1>
              <p className="text-base text-zinc-400 leading-relaxed">
                {data.shortBio}
              </p>
              <ul className="flex items-center gap-x-6 my-10">
                {Object.entries(data.socialLinks)
                  .sort()
                  .map(([key, value], id) => (
                    <li key={id}>
                      <a
                        href={value}
                        rel="noreferer noopener"
                        className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300">
                        {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        <HeroSvg />
      </section>
      <section className="max-w-2xl mb-16 mt-24">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Featured projects I&apos;ve built over the years
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full">
        {projects.map((project) => (
          <div
            key={project._id}
            className="p-1 cursor-pointer shadow-2xl rounded-md  transform transition-transform hover:scale-105 ">
            <Link
              href={`/projects/${project.slug}`}
              className="flex flex-col items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out">
              <Image
                src={UrlForImage(project.logo).url()}
                alt={project.name}
                width={350}
                height={200}
                className="w-fit h-fit items-center transition-transform transform-gpu hover:scale-105"
              />

              <div className="pt-2">
                <h2 className="font-semibold mb-1">{project.name}</h2>
                <div className="text-sm text-zinc-400">{project.tagline}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
