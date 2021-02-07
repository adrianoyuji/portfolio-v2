import Link from "next/link";
import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

interface ProjectProps {
  title: string;
  company: string;
  company_url: string;
  description: string;
  technologies: Tech[];
  platforms: Platform[];
  imgurl: string;
  live_url: string;
  github_url: string;
}

interface Platform {
  icon: IconType;
  color: string;
}

interface Tech {
  icon: IconType;
  color: string;
}

const ProjectCard = ({
  title,
  company,
  company_url,
  description,
  technologies,
  platforms,
  imgurl,
  live_url,
  github_url,
}: ProjectProps) => {
  return (
    <div className="py-2 flex flex-col md:flex-row h-auto w-11/12 bg-white shadow-lg rounded transform hover:scale-95 duration-300 ease-in-out">
      <div className="flex-3">
        <img src={imgurl} alt={title} className="rounded-t p-4" />
      </div>
      <div className="flex-1 flex-col p-4">
        <h1 className="text-xl flex flex-row items-center h-auto ">
          <b>{title}</b>
          <div className="flex flex-row space-x-2 pl-2">
            {github_url && (
              <Link href={github_url}>
                <div className="flex flex-row items-center cursor-pointer hover:bg-gray-100 rounded p-1">
                  <FaGithub className="cursor-pointer" />
                  <a className="pl-1 text-xs">Code</a>
                </div>
              </Link>
            )}
            {live_url && (
              <Link href={live_url}>
                <div className="flex flex-row items-center cursor-pointer hover:bg-gray-100 rounded p-1">
                  <AiOutlineGlobal color="blue" className="cursor-pointer" />
                  <a className="pl-1 text-xs">Live</a>
                </div>
              </Link>
            )}
          </div>
        </h1>
        {company && (
          <h2 className="text-lg">
            at{" "}
            <Link href={company_url}>
              <a target="_blank" className="text-red-500">
                {company}
              </a>
            </Link>
            .
          </h2>
        )}
        <p className="text-md">{description}</p>
        <div className="flex flex-col space-y-1 mt-4">
          <label className="text-md">Technologies used:</label>
          <div className="flex flex-row space-x-2">
            {technologies.map((tech: Tech, index) => (
              <tech.icon size="1.3em" color={tech.color} key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-md">Platforms:</label>
          <div className="flex flex-row space-x-2">
            {platforms.map((platform: Platform, index) => (
              <platform.icon size="1.3em" color={platform.color} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
