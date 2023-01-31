import React from "react";
import coderthinking from "./assets/coderthinking.svg"
import {Link} from "react-router-dom";

export default function Body() {
    return (<div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">

                <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                    <div
                        className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        {" "}
                        <Link to="/about" className="whitespace-nowrap font-semibold text-indigo-600">
                            <span className="absolute inset-0" aria-hidden="true"/>
                            Read more <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
                <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                    Welcome to my World!
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    I am a full stack developer with a passion for learning and
                    creating. I am currently working on a project called{" "}
                    <a
                        href="https://www.felontech.org"
                        className="font-semiBold text-purple-700"
                    >
                        FelonTech
                    </a>{" "}
                    which is a social platform geared toward returning citizens. Its
                    also is for adults wishing to refresh on modern technology. It
                    allows users to connect with and learn in a self paced
                    environment.
                    <br/>
                    <br/>I am also working on a project called{" "}
                    <a
                        href="https://www.my-tern.com"
                        className="font-semiBold text-purple-700"
                    >
                        The MyTERN Program
                    </a>{" "}
                    which is a reentry program at Tufts University. The platform
                    allows users to connect with each other and share their thoughts
                    and ideas.
                    <br/>
                    <br/>I am also working on a project called{" "}
                </p>


                <div className="mt-10 flex items-center gap-x-6">
                    <Link
                        to="/projects"
                        className="rounded-md bg-purple-500 px-3.5 py-1.5 text-base font-semiBold leading-7 text-white shadow-sm hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
                    >
                        Recent Projects
                    </Link>
                    <Link
                        to="/about"
                        className="text-base  pl-4 font-semiBold leading-7 text-purple-900"
                    >
                        Learn more <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
                className="aspect-[3/2] w-full bg-gray-50 sm:object-contain lg:object-cover"
                src={coderthinking}
                alt={"Drawing of a man leaning against a large laptop."}
            />
        </div>

    </div>);
}
