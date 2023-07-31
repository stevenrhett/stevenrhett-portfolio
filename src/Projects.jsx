const products = [
    {
        id: 1,
        name: 'Pawsome ',
        imageSrc: './assets/Screenshot 2023-04-29 at 7.57.08 PM.png',
        href: 'https://pawsome-github-io.vercel.app/',

    },
    {
        id: 2,
        name: 'Woodchuck Stump Grinding',
        href: 'https://woodchuck-app.vercel.app/',
        imageSrc: './src/assets/wood.png',

    },
    {
        id: 3,
        name: 'Task Tracker',
        href: 'https://task-tracker-omega.vercel.app/',
        imageSrc: './src/assets/Screenshot 2023-04-29 at 7.57.31 PM.png',

    },
    {
        id: 4,
        name: 'Real Estate',
        href: 'https://rainmaker82.wpcomstaging.com',
        imageSrc: './src/assets/Screenshot 2023-07-21 at 7.50.48 AM.jpg',

    },

]

export default function Projects() {
    return (
        <div className="bg-gradient-to-r from-indigo-50 to-transparent">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Recent Projects!</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-base-50 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    className="object-contain object-center w-full h-full"
                                    alt=""/>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-md text-center text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0"/>
                                            {product.name}
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

