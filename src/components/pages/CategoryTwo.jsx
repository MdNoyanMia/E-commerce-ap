import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { IoMdArrowDropdown } from "react-icons/io";
import Button from '../Button';
import Image from '../Image';
import picture10 from '/src/assets/picture10.png'
import picture14 from '/src/assets/picture14.png'
import picture8 from '/src/assets/picture8.png'

import { FaCircle } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import { IoIosArrowForward } from "react-icons/io";




const CategoryTwo = () => {
  return (
    <>

      <div>
        <Container>
          <Flex className='justify-between'>
            <div>
              <h3 className='font-bold text-[20px] text-[#262626]'>Shop by Color</h3>

              <div className='flex items-center font-normal text-[16px] text-[#767676] '>
                <Link to={'/'}>
                  <h4>Home</h4>
                </Link>
                <IoIosArrowForward />
                <h4>  Products</h4>

              </div>

            </div>

          </Flex>

        </Container>
      </div>

      {/* 1end */}

      <div className='py-9'>
        <Container>
          <Flex className='flex justify-between'>
            <div className='w-[370px]'>
              <ul>

                <Link to={"categoryone"}>

                  <div className='flex items-center gap-2 py-5'>
                    <FaCircle className='text-black' />
                    <li className=' hover:text-black hover:duration-750 '> Color 1</li>
                  </div>

                </Link>



                <Link to={"Categorytwo"}>
                  <div className='flex items-center gap-2 py-5'>
                    <FaCircle className='text-fuchsia-400' />
                    <li className=' hover:text-fuchsia-400 hover:duration-750 '> Color 2</li>
                  </div>
                </Link>


                <Link to={"Categorythree"}>

                  <div className='flex items-center gap-2 py-5'>
                    <FaCircle className='text-[#7ED321]' />

                    <li className=' hover:text-[#7ED321] hover:duration-750 ' > Color 3</li>

                  </div>

                </Link>

                <Link to={"Categoryfour"}>
                  <div className='flex items-center gap-2 py-5'>
                    <FaCircle className='text-[#B6B6B6]' />
                    <li className=' hover:text-[#B6B6B6] hover:duration-750 '> Color 4</li>
                  </div>
                </Link>

                <Link to={"Categoryfive"}>
                  <div className='flex items-center gap-2 py-5'>
                    <FaCircle className='text-[#15CBA5]' />
                    <li className=' hover:text-[#15CBA5] hover:duration-750 '> Color 5</li>
                  </div>
                </Link>




              </ul>
            </div>


            <div className='flex gap-x-3 py-4'>


              <div className='w-[370px] relative'>
                <Image className='w-[370px]' imgSrc={picture10} />

                <Button className={'text-[14px] bg-black  top-8 py-3 px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750 absolute '} btnText={'Now'} />
                <div className="flex gap-[100px]">
                  <h3 className="font-bold text-[20px] text-black">Basic Crew Neck Tee</h3>
                  <h5 className="text-[#767676] text-[20px]">$44.00</h5>
                </div>

              </div>


              {/* rff */}

              <div className='w-[370px] relative'>
                <Image className='w-[370px]' imgSrc={picture14} />

                <Button className={'text-[14px] bg-black  top-8 py-3 px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750 absolute '} btnText={'Now'} />
                <div className="flex gap-[100px]">
                  <h3 className="font-bold text-[20px] text-black">Basic Crew Neck Tee</h3>
                  <h5 className="text-[#767676] text-[20px]">$44.00</h5>
                </div>

              </div>
              {/*  */}
              <div className='w-[370px] relative'>
                <Image className='w-[370px]' imgSrc={picture8} />

                <Button className={'text-[14px] bg-black  top-8 py-3 px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750 absolute '} btnText={'Now'} />
                <div className="flex gap-[100px]">
                  <h3 className="font-bold text-[20px] text-black">Basic Crew Neck Tee</h3>
                  <h5 className="text-[#767676] text-[20px]">$44.00</h5>
                </div>

              </div>




            </div>
          </Flex>
        </Container>

      </div>








    </>
  )
}

export default CategoryTwo