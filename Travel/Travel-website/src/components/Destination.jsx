import BoraBora from "../assets/BoraBora.jpg"
import Borabori from "../assets/Borabori.jpg"
import Lakshdweep from "../assets/Lakshdweep.jpg"
import Maldives from "../assets/Maldives.jpg"
import Maldives2 from "../assets/Maldives2.jpg"
const Destination = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
        <h1>All-Inclusive Resorts</h1>
        <p>On the one of the best Beaches</p>
        <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
            <img  className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={BoraBora} alt="/" />
            <img  className="w-full h-full object-cover"src={Borabori} alt="/" />
            <img  className="w-full h-full object-cover"src={Lakshdweep} alt="/" />
            <img className="w-full h-full object-cover" src={Maldives} alt="/" />
            <img  className="w-full h-full object-cover"src={Maldives2} alt="/" />
            
        </div>

    </div>
  )
}

export default Destination