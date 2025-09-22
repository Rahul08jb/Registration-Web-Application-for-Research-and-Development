import { LinkedinIcon, Twitter } from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import knit from "../assets/knit.png"

const Footer = () => {
  return (

    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl text-start font-bold mb-4">Connect Us</h3>
            <ul className="space-y-2 text-start">
              <li><a href="#" className="hover:text-gray-300">cvml@knit.ac.in</a></li>

              <li><a href="#" className="hover:text-gray-300"> Mob : 05362 240 454</a></li>
              <li><a href="https://www.knit.ac.in/" className="hover:text-gray-300">https://www.knit.ac.in/</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li className="flex gap-2 ">
                <a href="https://www.linkedin.com/in/cdc-knit/" className="linkdln">
                  <LinkedinIcon className="mx-1" />
                </a>
                <a className="Insta">
                  <BsInstagram className="si size-6 mx-1"/>
                </a>
                <a className="Twitter">
                  <Twitter className="mx-1"/>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl text-start font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-start">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="bg-white p-2 rounded-full">
              <img className="h-[120px] w-[120px] m-auto"  src={knit} alt="knit" />
              </div>
              <li className="l list-none"><a href="#" className="hover:text-gray-300">Aktu College Code : 104</a></li>
            </div>
            </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 KNIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
