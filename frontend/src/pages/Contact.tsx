import BlinkingTree from "../components/BlinkingTree";

// ContactPage.tsx
const Contact: React.FC = () => {
   
    return (
        <div className='flex flex-col justify-center items-center w-full mt-20'>
            <h2 className="text-center text-5xl">Contact Us</h2>
            <p className="italic m-4">Send us a festive greeting and spread some holiday cheer!</p>
            <form className="max-w-lg mx-auto mt-8 p-4 shadow-md rounded-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                    <input 
                        type="text" 
                        name="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail:</label>
                    <input 
                        type="email" 
                        name="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
                    <textarea 
                        name="message"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
            </form>
        <BlinkingTree />
        </div>
    );
};

export default Contact;
