const products = [
    {
      id: 1,
      name: 'Pawsome ',
      imageSrc: 'src/assets/Screenshot 2023-04-29 at 7.57.08 PM.png',
      href: 'https://github.com/stevenrhett/pawsome.github.io',
      imageAlt: 'github repository',
    },
    {
      id: 2,
      name: 'Woodchuck Stump Grinding',
      href: 'https://github.com/stevenrhett/woodchuck-app',
      imageSrc: 'src/assets/wood.png',
      imageAlt: 'github repository',
    },
    {
      id: 3,
      name: 'Task Tracker',
      href: 'https://github.com/stevenrhett/task-tracker',
      imageSrc: 'src/assets/Screenshot 2023-04-29 at 7.57.31 PM.png',
      imageAlt: 'github repository',
    },
    {
      id: 4,
      name: 'Social',
      href: 'https://github.com/stevenrhett/1980.social',
      imageSrc: 'src/assets/social.png',
      imageAlt: 'github repository',
    },

  ]

export default function Projects(){
  return (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-10 lg:max-w-2xl">
          <div className="text-center text-2xl mb-6">Projects</div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="h-fit w-full overflow-hidden rounded-lg bg-gray-200 ">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-center text-gray-700">{product.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }



