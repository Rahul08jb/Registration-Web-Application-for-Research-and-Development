
import { mirage } from 'ldrs'

mirage.register()

// Default values shown
function Loader() {
  return (
    <div className=' min-h-[100vh] w-full flex justify-between items-center'>
<l-mirage
  
  size="150"
  speed="2" 
  color="#20243E" 
></l-mirage>
    </div>
  )
}

export default Loader