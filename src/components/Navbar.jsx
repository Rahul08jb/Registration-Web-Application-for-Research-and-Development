
import { AlignRight, X } from 'lucide-react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import knit from "../assets/knit.png"
import Dropdown from './Dropdown';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const options = [{
    name : "Paper Submission",
    section: "paper-submission"
  }
,
 {
  name : "Plagiarism-policy",
  section : "plagiarism-policy"
 }
 ,
 {
  name : "Conferece Track",
  section : "track"
 }
];

  const handleSelect = (option) => {
    console.log('Selected option:', option);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='p-[1rem] fixed w-full z-[9999]'>
      <nav className="bg-gradient-to-r from-[#343A62] to-[#20243E] text-white py-3 px-4 rounded-[2rem] mx-auto top-0 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <div>
            <img 
              src={knit} 
              alt="Logo" 
              className="h-10 w-auto" 
            />
          </div>

          {/* Navigation Links for Desktop */}
          <ul className="hidden md:flex items-center uppercase text-sm space-x-10 text-white">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li>
            <Dropdown
        options={options}
        defaultOption="Choose an option"
        onSelect={handleSelect}
        className="my-custom-dropdown"
      />
      </li>
            <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link to="/registration" className="hover:text-yellow-400">Registration</Link></li>
            <li><Link to="/download" className="hover:text-yellow-400">Download</Link></li>
            <li><Link to="/policy" className="hover:text-yellow-400">Policy</Link></li>
            <li><Link to="/committee" className="hover:text-yellow-400">Committee</Link></li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white bg-transparent focus:outline-none">
            {isOpen ? <X /> : <AlignRight  /> }
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Links */}
        {isOpen && (
          <div className="md:hidden mt-2 rounded-lg">
            <ul className="flex flex-col space-y-2 px-4 py-2">
              <li><Link to="/" className="hover:text-yellow-400" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/call-for-paper" className="hover:text-yellow-400" onClick={toggleMenu}>Call for Paper</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400" onClick={toggleMenu}>About</Link></li>
              <li><Link to="/registration" className="hover:text-yellow-400" onClick={toggleMenu}>Registration</Link></li>
              <li><Link to="/download" className="hover:text-yellow-400" onClick={toggleMenu}>Download</Link></li>
              <li><Link to="/policy" className="hover:text-yellow-400" onClick={toggleMenu}>Policy</Link></li>
              <li><Link to="/committee" className="hover:text-yellow-400" onClick={toggleMenu}>Committee</Link></li>
              <li><Link to="/create-account" className="hover:text-yellow-400">Create Account</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
