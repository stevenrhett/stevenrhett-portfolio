const products = [
    {
      id: 1,
      name: 'Pawsome ',
      imageSrc: '/Users/me/Development/stevenrhett-portfolio/src/assets/Screenshot 2023-04-29 at 7.57.08 PM.png',
      href: 'https://pawsome-github-io.vercel.app/',
      imageAlt: 'github repository',
    },
    {
      id: 2,
      name: 'Woodchuck Stump Grinding',
      href: 'https://woodchuck-app.vercel.app/',
      imageSrc: '/Users/me/Development/stevenrhett-portfolio/src/assets/wood.png',
      imageAlt: 'github repository',
    },
    {
      id: 3,
      name: 'Task Tracker',
      href: 'https://task-tracker-omega.vercel.app/',
      imageSrc: '/Users/me/Development/stevenrhett-portfolio/src/assets/Screenshot 2023-04-29 at 7.57.31 PM.png',
      imageAlt: 'github repository',
    },
    {
      id: 4,
      name: 'Real Estate',
      href: 'https://rainmaker82.wpcomstaging.com',
      imageSrc: '/Users/me/Development/stevenrhett-portfolio/src/assets/Screenshot 2023-07-21 at 7.50.48 AM.jpg',
      imageAlt: 'github repository',
    },

  ]

// const products = [
//     {
//         id: 1,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//     },
    // More products...
// ]

export default function Projects(){
    return (
        <div className="bg-gradient-to-r from-indigo-50 to-transparent">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Recent Projects!</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                {/*<p className="text-sm font-medium text-gray-900">{product}</p>*/}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

