// @ts-ignore
import React from "react";
// @ts-ignore
export default function Body() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto  lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
          <div className="hidden sm:mt-32 sm:flex lg:mt-16">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20"></div>
          </div>
          <h1 className="mt-12 text-4xl font-bold tracking-tight text-gray-800 sm:mt-10 sm:text-6xl">
            Welcome to my World!{" "}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I am a full stack developer with a passion for learning and
            creating. I am currently working on a project called{" "}
            <a
              href="https://www.felontech.org"
              className="font-semibold text-indigo-600"
            >
              FelonTech
            </a>{" "}
            which is a social platform geared toward returning citizens. Its
            also is for adults wishing to refresh on modern technology. It
            allows users to connect with and learn in a self paced environment.
            <br />
            <br />I am also working on a project called{" "}
            <a
              href="https://www.my-tern.com"
              className="font-semibold text-indigo-600"
            >
              The MyTERN Program
            </a>{" "}
            which is a reentry program at Tufts University. The platform allows
            users to connect with each other and share their thoughts and ideas.
            <br />
            <br />I am also working on a project called{" "}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-purple-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
            >
              Recent Projects
            </a>
            <a
              href="#"
              className="text-base font-semibold leading-7 text-purple-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div className="relative rounded-lg overflow-hidden lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
        <img
          className=" w-full  object-cover lg:absolute  lg:aspect-auto lg:h-full"
          src={""}
          alt={""}
        />
      </div>
    </div>
  );
}
