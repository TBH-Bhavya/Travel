import { useState } from 'react'
import { BsArrowLeftSquareFill,BsArrowRightSquareFill } from 'react-icons/bs';
const sliderData = [
    {
        url : "https://media.istockphoto.com/id/1089746020/photo/seashell.webp?a=1&b=1&s=612x612&w=0&k=20&c=CI_9SqmafRS6SCZd7TMIQFgR-RQNBM4LX8mWhCkotMY="
    },
    {
        url: "https://media.istockphoto.com/id/489838744/photo/sunset-over-indian-ocean.webp?a=1&b=1&s=612x612&w=0&k=20&c=pcajBbeOVWWEv0nUnmMpl_936W49YW_wMLCalr53VcI="
    },
    {
      url: "https://media.istockphoto.com/id/182730617/photo/varkala-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=KOo5jAjXlO-8_YqfmrCgoxuzjqPidd_V9j_HIopbuoM="
    }
]

const Carousel = () => {
    const [slide, setSlide] = useState(0);
    const length = sliderData.length;
    const prevSlide = () =>{
        setSlide(slide === length-1 ? 0 : slide+1)
    }
    const nextSlide = () =>{
        setSlide(slide === 0 ? length-1 : slide-1 )
    }
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'/>
        <BsArrowRightSquareFill  onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'/>
     {sliderData.map((item, index)=>(
        // eslint-disable-next-line react/jsx-key
        <div className={index==slide ? "opacity-100" : "opacity-0"}>
            {index === slide && (<img className='w-full rounded-md' src={item.url} alt='/' /> )}
        </div>
     ))}
    </div>
  )
}

export default Carousel