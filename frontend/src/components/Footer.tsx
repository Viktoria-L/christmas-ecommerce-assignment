import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-rose-800 mt-auto w-full mx-auto p-4 md:py-4 text-center">           
                <div className="sm:flex items-center flex-col justify-center">
                    <Link to="/" className="flex flex-col items-center justify-center mb-2 sm:mb-0">
                        <span className="text-xl mt-1 text-white font-mountain">Santa Sweet Delight</span>
                    </Link>
                        <span className='text-2xl mt-3 text-white flex justify-center'>
                            <img src="/images/Elf-Hat-4.svg" className="h-10" />
                        </span>
                </div>
                <hr className="my-6 border-rose-900 sm:mx-autolg:my-8" />
                <span className="block text-sm text-white sm:text-center">© 2023 <a href="" className="hover:underline">Santa Sweet Delight™</a>. All Rights Reserved.</span>
    </footer>
  )
}

export default Footer;