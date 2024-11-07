import {RiCustomerService2Fill} from "react-icons/ri"
import {MdOutlineTravelExplore} from "react-icons/md"
const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
        <div className="lg:col-span-2 flex flex-col justify-evenly">
            <div>
                <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                <p className="py-4">Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Laudantium odio, 
                    alias debitis harum consequatur fugit 
                    autem eligendi esse quis doloribus 
                    animi quaerat fuga rem quam ducimus 
                    numquam. Eius, fugit? Delectus aperiam
                    reprehenderit sit debitis veniam unde 
                    doloremque praesentium sint laudantium 
                    impedit id, cumque quae voluptates beatae.
                    Itaque dolorum et obcaecati nemo illo maiores, veritatis, 
                    accusamus necessitatibus beatae possimus eaque tenetur 
                    aliquid ducimus. Saepe, aliquam. Adipisci, nesciunt in? Veritatis
                    quas alias natus quidem expedita. Vitae optio ipsa unde cupiditate ea, culpa 
                    sit perferendis saepe aperiam. Eius explicabo perferendis ea harum, illum, cumque culpa aperiam
                     nam eos consequatur magnam vero, architecto praesentium.

                </p>
            </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
            <div className="flex flex-col lg:flex-row items-center text-center">
         <button><RiCustomerService2Fill /></button>
            
            <div>
                <h3  className="py-2">LEADING SERVICES</h3>
                <p className="py-1">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            
            </div>
            <div className="flex flex-col lg:flex-row items-center text-center">
         <button><MdOutlineTravelExplore /></button>
            
            <div>
                <h3 className="py-2">LEADING SERVICES</h3>
                <p className="py-1">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            
            </div>
        <div></div>
        </div>
        </div>
        <div>
            <div className="border text-center">
                <p className="pt-2">Get An Additional Discount Of 10%</p>
                <p className="py-4">12 Hours left</p>
                <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
            </div>
            <form className="w-full">
                <div className="flex flex-col my-2">
                    <label>Destination</label>
                    <select className="border rounded-md pt-2">
                    <option>Lakshdweep</option>
                    <option>Kenya West</option>
                    <option>Bora Bora</option>
                    <option>Grande Antigue</option>
                    <option>Bora Bori</option>
                    </select>
                    
                </div>
                <div className="flex flex-col my-2">
                    <label>Check-in </label>
                    <input className="border rounded-md pt-2 " type="date" />
                </div>
                <div className="flex flex-col my-2">
                    <label>Check-out </label>
                    <input className="border rounded-md pt-2" type="date" />
                </div>
                <div><button className="w-full my-4">Rates & Availability</button></div>
            </form>
        </div>
    </div>
  )
}

export default Search