import { Link } from "react-router-dom";

const people = [
  {
    name: "Steven Johnson",
    role: "Junior Developer",
    bio: "I am a React developer with a passion for building user-friendly and engaging web applications. I have an understanding of React fundamentals, including state management, routing, and component composition. I am a quick learner and I am always eager to take on new challenges. I am confident that I can be a valuable asset to your team.\n" +
      "\n",
    imageUrl:
      "https://i.imgur.com/NbtkcAq.png",
    githubUrl: "https://github.com/stevenrhett",
    linkedinUrl: "https://www.linkedin.com/in/steven-johnson-massachusetts/"
  }
];
export default function Teams() {

  return (
    <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gradient-to-r from-blue-300 to-transparent px-4 py-4 shadow-sm sm:px-6 min-h-screen">
      <main className="lg:pl-72">
        <div>
          <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
            <ul
              role="list">
              {people.map((person) => (
                <li key={person.name}>
                  <img className="w-fit justify-center object-cover" src={person.imageUrl} alt="" />
                  <div className="text-lg font-semibold leading-8 text-gray-900">{person.name}</div>
                  <div className="leading-7 max-w-2xl text-gray-800">{person.bio}</div>

                  <p className="leading-7 text-gray-800">{person.role}</p>
                  <ul className="mt-6 flex gap-x-6">
                    <li>
                      <Link to={person.githubUrl} className="text-gray-700 hover:text-gray-900">
                        <span className="sr-only">GitHub</span>
                        <img className="h-5 w-5" src="src/assets/icons8-github-24.png" alt="#" />
                      </Link>
                    </li>
                    <li>
                      <Link to={person.linkedinUrl} className="text-gray-700 hover:text-gray-900">
                        <span className="sr-only">LinkedIn</span>
                        <img className="h-5 w-5" src="src/assets/icons8-linkedin-24.png" alt="#" />
                      </Link>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};