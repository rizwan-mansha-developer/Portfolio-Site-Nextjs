import { client } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SkillsInterface {
  _id: string;
  title: string;
  description: string;
  logo: string;
}
const Skills = async () => {
  const query = `*[_type == "skill"]{
      _id,
      title,
      description,
      "logo": logo.asset->url
  }`;
  const response = async () => {
    const response: SkillsInterface[] = await client.fetch(query);
    return response;
  };
  return await response();
};

const SkillPage = async () => {
  const Service = await Skills();
  return (
    <div className="">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8">
            My Skills
          </h1>
          <p className="text-base text-zinc-400 leading-relaxed">
            Web Developer passionate about creating responsive and performant
            web applications.
          </p>
        </div>

        <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
          {Service.map((service, idx) => (
            <Link
              href={service.title}
              key={idx}
              className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out">
              <Image
                src={service.logo}
                width={60}
                height={60}
                alt={service.title}
                className="bg-zinc-800 rounded-md p-2"
              />
              <div>
                <h2 className="font-semibold mb-1">{service.title}</h2>
                <div className="text-sm text-zinc-400">
                  {service.description}
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};

export default SkillPage;
