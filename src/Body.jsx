import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Body() {

  return (<>
    {/*<header className="bg-white shadow-sm">*/}
    {/*  <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8">*/}
    {/*    <h1 className="text-lg font-semibold leading-6 text-gray-900"*/}
    {/*    >Steven | Rhett | Studios</h1>*/}
    {/*  </div>*/}
    {/*</header>*/}
    <main>
        <div className="relative bg-white flex flex-col">
          <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8">
            <p className="mt-6 text-lg leading-8 text-gray-800">
              As a skilled full stack developer, I am driven by my passion for
              continuous learning and innovative creation. At present,
              I am deeply invested in a project that I believe will revolutionize the field.
              </p>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              I am currently working on a project called{" "}
              <Link
                to="https://www.felontech.org"
                className="font-semiBold text-blue-800">
                FelonTech
              </Link>{" "}
              which is a social platform geared toward returning citizens
              wishing to learn or refresh on modern technology. It
              allows users to connect with and learn at a self-paced
              environment.
              <br/>
              <br/>I am also working on a project called{" "}
              <Link
                to="https://www.pawsome-github-io.vercel.app"
                className="font-semiBold text-blue-800"
              >
                Pawsome
              </Link>{" "}
                  <span>  🐾🐾 </span>
              which is a social platform geared toward pet owners and pet trainers.</p>

            <div className="inline-flex items-center justify-center px-0 py-3">
              <div className="flex">
                <button className="btn btn-wide bg-blue-400 px-2 py-1 rounded">
                  <Link to="/projects">Responsive
                </Link>
                </button>
              </div>
            </div>
          </div>
        </div>


    </main>
  </>);
}






