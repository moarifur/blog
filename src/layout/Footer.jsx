import {MdOutlineMailOutline, MdOutlinePhoneInTalk} from "react-icons/md";
import {FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";
import footer from '../assets/footer.jpg';

const footerData = {
    category: [
        {
            title: 'AI',
            link: '#'
        },
        {
            title: 'DevOps',
            link: '#'
        },
        {
            title: 'Programming',
            link: '#'
        },
        {
            title: 'Cyber Security',
            link: '#'
        },
    ],
    recent: [
        {
            title: 'AI change make people happy',
            link: '#'
        },
        {
            title: 'DevOps job are at high stake',
            link: '#'
        },
        {
            title: 'Programming is fun for child',
            link: '#'
        },
        {
            title: 'Cyber Security can save your life',
            link: '#'
        },
    ],
    topRate: [
        {
            title: 'AI for children',
            link: '#'
        },
        {
            title: 'DevOps job for programmer',
            link: '#'
        },
        {
            title: "Kid's Programming School",
            link: '#'
        },
        {
            title: 'Cyber Attack ruin India',
            link: '#'
        },
    ]
}

const Footer = () => {
    return (
        <div id='contact'>
            <div className="flex">
                <img src={footer} className="hidden md:block object-cover w-[500px] h-auto" alt=""/>
                {/*<img src={footer} className="w-full md:w-[650px] h-auto" alt=""/>*/}
                <div
                    className="bg-neutral-800 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-8 md:p-20">

                    {/* Footer's Category Section */}
                    <div className="p-5">
                        <p className="text-white text-md font-bold pb-4">Categories</p>
                        <ul>
                            {footerData.category.map((data, index) => (
                                <li
                                    key={index}
                                    className="text-neutral-500 text-sm pb-2 hover:text-yellow-600 cursor-pointer"
                                >
                                    <a href={data.link}>{data.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Footer's Recent Section */}
                    <div className="p-5">
                        <p className="text-white text-md font-bold pb-4">Recent Hot Post</p>
                        <ul>
                            {footerData.recent.map((data, index) => (
                                <li
                                    key={index}
                                    className="text-neutral-500 text-sm pb-2 hover:text-yellow-600 cursor-pointer"
                                >
                                    <a href={data.link}>{data.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Footer's Top Rating Section */}
                    <div className="p-5">
                        <p className="text-white text-md font-bold pb-4">Recent Hot Post</p>
                        <ul>
                            {footerData.topRate.map((data, index) => (
                                <li
                                    key={index}
                                    className="text-neutral-500 text-sm pb-2 hover:text-yellow-600 cursor-pointer"
                                >
                                    <a href={data.link}>{data.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-5">
                        <ul>
                            <p className="text-white text-md font-bold pb-4">Quick Contact</p>
                            <li className="text-neutral-500 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                            <span className='flex gap-x-2'>
                                <MdOutlinePhoneInTalk className='text-white text-xl'/>
                                (001) 647 XXXX XXXX
                            </span>
                            </li>
                            <li className="text-neutral-500 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                            <span className='flex gap-x-2'>
                                <MdOutlineMailOutline className='text-white text-xl'/>
                                test@email.com
                            </span>
                            </li>

                            <br/>
                            <li className="text-white text-md font-bold">
                                <span>Connect With Us</span>
                                <div className="flex gap-x-3">
                                    <FaInstagram className="mt-3 text-lg cursor-pointer hover:text-pink-600"/>
                                    <FaTwitter className="mt-3 text-lg cursor-pointer hover:text-blue-600"/>
                                    <FaLinkedin className="mt-3 text-lg cursor-pointer hover:text-blue-600"/>
                                    <FaYoutube className="mt-3 text-lg cursor-pointer hover:text-red-600"/>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
            <div className="bg-neutral-900 flex flex-col justify-center items-center text-center  p-5">
                <h1 className=" text-white font-semibold">
                    © 2024 All rights reserved | Developed by{" "}
                    <span className="hover:text-yellow-600 font-semibold cursor-pointer">
						Mohammad A Rahman{" "}
					</span>
                </h1>
            </div>
        </div>
    );
}

export default Footer;