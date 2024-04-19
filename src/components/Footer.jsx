import react from "react"
import bg from "../assets/logo.svg"


const Footer = () => {

    const links = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Services",
            url: "/services"
        },
        {
            name: "Contact",
            url: "/contact"
        }
    ]

    return (
        <div className="bg-gray-900 px-16 pt-16 pb-3">
         <div className="flex text-white gap-10 justify-center">
            <div className="w-[300px] mr-[100px]">
                <div>
                    <img src={bg} alt="Wizwork" className="w-[200px]" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora illum maxime excepturi aliquam eos!</p>
            </div>
            <div className=" flex flex-col gap-3 p-5">
                <h2 className="text-blue-600 font-bold text-2xl">Links</h2>
                <ul className="flex flex-col gap-1">
                    <a></a>
                    {links.map((link) => (
                        <li className="hover:underline hover:text-blue-50" key={link.url}><a href={link.url}>{link.name}</a></li>
                    ))}
                </ul>
            </div>

            <div className=" flex flex-col gap-4 p-5">
                <h3 className="text-purple-400 font-bold text-2xl">Get Job Notifications</h3>
                <p>Subscribe to our newsletter to get the latest job updates</p>
                <div className="flex gap-2">
                    <input type="email" placeholder="Enter your email" class=" text-purple-900 font-bold p-3 rounded-md focus:outline-none border-none" />
                    <button className="bg-purple-700 p-2 rounded-md hover:bg-purple-800">Subscribe</button>
                </div>
            </div>
         </div>
            <div className="border-t mt-10 mb-4 max-w-[1000px] mx-auto"></div>
            <div className="text-white flex justify-between  max-w-[800px] mx-auto">
                <h5 className="text-gray-400">
                    &copy; 2021 Wizwork. All rights reserved.
                </h5>

                <div className="flex gap-2 text-gray-400">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;