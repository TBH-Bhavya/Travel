import React from 'react'
import BoraBora from "../assets/BoraBora.jpg"
import Borabori from "../assets/Borabori.jpg"
import Lakshdweep from "../assets/Lakshdweep.jpg"
import Maldives from "../assets/Maldives.jpg"
import Maldives2 from "../assets/Maldives2.jpg"
import Lakshdweep2 from "../assets/Lakshdweep2.jpg"
import SelectCards from './SelectCards'

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-col-3 gap-4'>
        <SelectCards bg={BoraBora} text="Bora Bora"/>
        <SelectCards bg={Borabori} text="Bora Bori"/>
        <SelectCards bg={Lakshdweep} text="Lakshdweep"/>
        <SelectCards bg={Maldives} text="Maldives"/>
        <SelectCards bg={Maldives2} text="Maldives2"/>
        <SelectCards bg={Lakshdweep2} text="Lakshdweep2"/>
    </div>
  )
}

export default Selects