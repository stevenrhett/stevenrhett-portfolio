"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function Body() {
    return (<div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
          <div className="hidden sm:mt-32 sm:flex lg:mt-16">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20"></div>
          </div>
          <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
            Welcome to my World!{" "}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I am a full stack developer with a passion for learning and
            creating. I am currently working on a project called{" "}
            <a href="https://www.thesocialnetwork.com" className="font-semibold text-indigo-600">
              The Social Network
            </a>{" "}
            which is a social media platform that allows users to connect with
            each other and share their thoughts and ideas.
            <br />
            <br />I am also working on a project called{" "}
            <a href="https://www.thesocialnetwork.com" className="font-semibold text-indigo-600">
              The Social Network
            </a>{" "}
            which is a social media platform that allows users to connect with
            each other and share their thoughts and ideas.
            <br />
            <br />I am also working on a project called{" "}
            <a href="https://www.thesocialnetwork.com" className="font-semibold text-indigo-600">
              The Social Network
            </a>{" "}
            which is a social media platform that allows users to connect with
            each other and share their thoughts and ideas.
            <br />
            <br />
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="#" className="rounded-md bg-purple-300 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400">
              Recent Projects
            </a>
            <a href="#" className="text-base font-semibold leading-7 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div className="relative rounded-lg overflow-hidden lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
        <img className=" sm:rounded-lg  w-full bg-base-50 object-cover sm:object-center  lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" src={""} alt="photo of a man with a beard and filter that is making him look like a cartoon"/>
      </div>
    </div>);
}
exports.default = Body;
