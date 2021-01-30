import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full min-h-auto p-4 bg-purple-500">
      <h1 className="font-serif text-black text-5xl pb-2">About me</h1>
      <div className="flex flex-col h-auto p w-full sm:flex-row ">
        <div className="flex flex-1 w-full items-start justify-center">
          <div className="w-3/4 h-3/4 sm:w-1/2 sm:h-1/2 my-8">
            <Image
              className="profile-pic"
              src="/images/profile.jpeg"
              alt="profile pic"
              height="100%"
              width="100%"
              layout="responsive"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <p className="text-black text-2xl pb-3">
            I'm Adriano Vasconcelos, a brazilian <b>Web Developer</b> that loves
            to solve problems! Currently seeking new challenges to further
            develop myself!
          </p>
          <p className="text-gray-900 text-xl py-2">
            I have started studying Web development in late 2019 and instantly
            fell in love with it! Since then I have tried to improve a little
            bit every single day in order to become a highly capable software
            developer!
          </p>
          <p className="text-gray-900 text-xl py-2">
            Currently, I'm living in Brazil working for{" "}
            <Link href="http://www.softcom.pro.br/">
              <a target="_blank" className="text-red-800">
                Softcom Informática
              </a>
            </Link>{" "}
            and also finishing my graduation in Computer Engineering at{" "}
            <Link href="https://portal.ufgd.edu.br/">
              <a target="_blank" className="text-green-800">
                UFGD
              </a>
            </Link>
            . I have about 1+ years of web and mobile development experience and
            it is only the beginning!
          </p>
          <p className="text-gray-900 text-xl py-2">
            Developing solutions is definitely one of my favorite hobbies! I can
            spend several hours without noticing it, the feeling of
            accomplishing a difficult task is one of my favorite!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
