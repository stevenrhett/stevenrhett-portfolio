//
import React from "react";
//
import coderthinking from "./assets/coderthinking.svg";
import "./App.css";
//

//
export default function Body() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl grid grid-rows-2 grid-cols-2 gap-8 lg:px-6">
        <div className="px-6 pt-10 pb-24 sm:pb-32  lg:px-0 lg:pt-24  ">
          <div className="mx-auto max-w-2xl lg:mx-0">
            {/*<img*/}
            {/*  className="h-11"*/}
            {/*  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"*/}
            {/*  alt="Your Company"*/}
            {/*/>*/}

            <h1 className="mt-12 font-bold tracking-tight text-gray-800 sm:-mt-8 text-6xl sm:text-4xl text-opacity-80">
              Welcome to my World!{" "}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I am a full stack developer with a passion for learning and
              creating. I am currently working on a project called{" "}
              <a
                href="https://www.felontech.org"
                className="font-semibold text-purple-700"
              >
                FelonTech
              </a>{" "}
              which is a social platform geared toward returning citizens. Its
              also is for adults wishing to refresh on modern technology. It
              allows users to connect with and learn in a self paced
              environment.
              <br />
              <br />I am also working on a project called{" "}
              <a
                href="https://www.my-tern.com"
                className="font-semibold text-purple-700"
              >
                The MyTERN Program
              </a>{" "}
              which is a reentry program at Tufts University. The platform
              allows users to connect with each other and share their thoughts
              and ideas.
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
                className="text-base  pl-4 font-semibold leading-7 text-purple-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 grid-cols-1 gap-8">
          <img
            className="aspect-[3/2] w-full bg-gray-50 sm:object-contain lg:object-cover"
            src={coderthinking}
            alt={"Drawing of a man leaning against a large laptop."}
          />
        </div>
      </div>
    </div>
  );
}
