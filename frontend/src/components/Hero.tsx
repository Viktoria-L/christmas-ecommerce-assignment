import { Link } from "react-router-dom";

const Hero = () => {
  return (
        <section className="relative bg-[url('./assets/images/tree.jpg')] bg-cover bg-center bg-no-repeat max-h-[509px]">
        <div className="absolute inset-0 max-h-[509px]"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 max-h-[509px]">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
                Let us find your
                <strong className="block font-extrabold text-rose-700">
                Christmas Spirit.
                </strong>
            </h1>
            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                tenetur fuga ducimus numquam ea!
            </p>

            {/* Gör om till Links  */}
            <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
                <Link to="/products" className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 xs:w-auto">
                Enter Candyland
                </Link>

                <a href="#" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 xs:w-auto">
                Learn More
                </a>
            </div>
            </div>
        </div>
        </section>
  )
}

export default Hero