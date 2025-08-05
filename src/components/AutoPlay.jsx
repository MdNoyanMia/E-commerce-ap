
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from './Image';
import picture1 from '/src/assets/picture1.png';
import picture2 from '/src/assets/picture2.png';
import picture3 from '/src/assets/picture3.png';
import picture4 from '/src/assets/picture4.png';
import Button from "./Button";
import { FaHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { BsCartCheckFill } from "react-icons/bs";



function AutoPlay() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"

    };
    return (
        <div className="slider-container py-5">
            <h3 className="font-bold text-[39px] text-black">New Arrivals</h3>
            <Slider {...settings}>

                <div className='w-[370px] relative'>
                    <Image className='w-[370px]' imgSrc={picture1} />

                    <Button className={'text-[14px] bg-black  top-8 py-3 px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750 absolute '} btnText={'Now'} />
                    <div className="flex gap-[100px]">
                        <h3 className="font-bold text-[20px] text-black">Basic Crew Neck Tee</h3>
                        <h5 className="text-[#767676] text-[20px]">$44.00</h5>
                    </div>

                </div>



<div className="relative w-[370px]">
  <Image className="" imgSrc={picture2} />

  <Button
    className="text-[14px] bg-black top-8 py-3 px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750 absolute"
    btnText="Now"
  />

  <div className="absolute bottom-[100px] right-25 flex flex-col items-end gap-2">
    <div className="flex items-center gap-2">
      <h3>Add to Wish List</h3>
      <FaHeart />
    </div>

    <div className="flex items-center gap-2">
      <h4>Compare</h4>
      <IoIosGitCompare />
    </div>

    <div className="flex items-center gap-2">
      <h5>Add to Cart</h5>
      <BsCartCheckFill />
    </div>
  </div>

  <div className="flex justify-between mt-4">
    <h3 className="font-bold text-[20px] text-black">Basic Crew Neck Tee</h3>
    <h5 className="text-[#767676] text-[20px]">$44.00</h5>
  </div>
</div>


                {/* <div className=' relative w-[370px]'>
                    <Image className='' imgSrc={picture2} />

                    <Button className={'text-[14px] bg-black  top-8 py-3 px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750 absolute '} btnText={'Now'} />

                    <div className="absolute w-full  bottom-[100px]  left-0 text-right">

                        <div className="flex items-end w-full gap-2  ">
                            <h3>Add to Wish List</h3>
                            <FaHeart />
                        </div>

                        <div className="flex items-end gap-2">
                            <h4>Compare</h4>
                            <IoIosGitCompare />
                        </div>



                        <div className="flex items-end gap-2 ">
                            <h5>Add to Car</h5>
                            <BsCartCheckFill />
                        </div>
                    </div>




                    <div className="flex gap-[100px]">
                        <h3 className="font-bold text-[20px] text-black">Basic Crew Neck Tee</h3>
                        <h5 className="text-[#767676] text-[20px]">$44.00</h5>
                    </div>
                </div> */}

                <div className='w-[370px] relative'>
                    <Image className='w-[370px]' imgSrc={picture3} />

                    <Button className={'text-[14px] bg-black  top-8 py-3 px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750 absolute '} btnText={'Now'} />
                    <div className="flex gap-[100px]">
                        <h3 className="font-bold text-[20px] text-black">Basic Crew Neck Tee</h3>
                        <h5 className="text-[#767676] text-[20px]">$44.00</h5>
                    </div>
                </div>

                <div className='w-[370px] relative'>
                    <Image className='w-[370px] ' imgSrc={picture4} />
                    {/*  */}
                    <Button className={'text-[14px] bg-black  top-8 py-3 px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750 absolute '} btnText={'Now'} />
                    {/*  */}
                    <div className="flex gap-[100px]">
                        <h3 className="font-bold text-[20px] text-black">Basic Crew Neck Tee</h3>
                        <h5 className="text-[#767676] text-[20px]">$44.00</h5>
                    </div>
                </div>

            </Slider>
        </div>
    );
}
export default AutoPlay;