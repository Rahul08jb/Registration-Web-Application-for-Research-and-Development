
import { ChevronDown } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Dropdown({ options }) {
    const [isOpen , setOpen ] = useState(false)
    const toggleHandle = () =>{
        setOpen(!isOpen);
    }
  return (
    <>
    <div>
     <span onClick={toggleHandle} className='hover:text-yellow-400 flex group group/item justify-center items-center gap-2'>Call For Paper <ChevronDown /></span> 
     <ul style={{display : `${isOpen ? "flex" : "none"}`}} className=' absolute shadow-lg bg-custom-gradient py-4  flex-col gap-3 top-[85px] rounded-lg'>
        {options.map((item,index)=>(
        <li  key={index} className='hover:bg-yellow-400 w-full py-2 px-5 hover:text-blue-900'><Link smooth onClick={()=>setOpen(false)} to={`/call-for-paper/#${item.section}`}>{item.name}</Link></li>
        ))}
     </ul>
     </div>
    </>
  )
}

Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string,
  };
  
  
export default Dropdown;
