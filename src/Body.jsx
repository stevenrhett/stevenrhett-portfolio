import {Link} from "react-router-dom";

export default function Body() {
    return (<>
        <div className="relative bg-white">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">

                    <h1 className="mt-14 text-5xl font-extrabold text-center tracking-tight text-gray-900 sm:text-mt-10 sm:text-6xl">
                        Welcome to my World!
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-800">
                        I am a full stack developer with a passion for learning and
                        creating. I am currently working on a project called{" "}
                        <a
                            href="https://www.felontech.org"
                            className="font-semiBold text-blue-800">
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
                            className="font-semiBold text-blue-800"
                        >
                            The MyTERN Program
                        </a>{" "}
                        which is a reentry program at Tufts University. The platform
                        allows users to connect with each other and share their thoughts
                        and ideas.
                    </p>

                    <div className="inline-flex items-center justify-center px-5 py-3">
                        <div className="flex-1 ">


                            <button className="btn btn-active btn-primary">
                                <Link
                                    to="/projects"
                                >
                                    Recent Projects
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}






