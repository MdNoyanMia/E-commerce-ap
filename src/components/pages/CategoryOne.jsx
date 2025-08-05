import React from 'react'

import Container from '../Container'
import Flex from '../Flex'
import { IoMdArrowDropdown } from "react-icons/io";
import Button from '../Button';
import Image from '../Image';
import picture12 from '/src/assets/picture12.png'
import picture11 from '/src/assets/picture11.png'
import picture7 from '/src/assets/picture7.png'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';


const CategoryOne = () => {
  return (
    <>
      



      <div>
        <Container>
          <Flex className='justify-between'>
            <div>
              <h3 className='font-bold text-[20px] text-[#262626]'>Shop by Category</h3>
            </div>

            <div className='relative'>

              <label>
                Sort by:
                <select className='bg-[#FFFFFF] text-[#767676] p-[6px] w-[300px] border-1 outline-none' name="Sort by">
                  <option className='text-[#767676]' value="apple">Featured</option>
                  <option className='text-[#767676]' value="banana">New dress</option>
                  <option className='text-[#767676]' value="orange">Color</option>
                </select>
              </label>
              {/* Sort by: <input className='bg-[#FFFFFF] p-[6px] w-[300px] border-1 outline-none' type="text" placeholder='  Featured' /> */}
              {/* <IoMdArrowDropdown className='absolute right-3 top-1/2 -translate-y-1/2' /> */}

            </div>

            <div className='relative flex items-center'>
              Show: <input className='bg-[#FFFFFF] p-[6px] w-[200px]  border-1 outline-none' type="text" placeholder='' />
              <h3 className='left-30 absolute'>36</h3>
              <IoMdArrowDropdown className='absolute right-3 top-1/2 -translate-y-1/2' />
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

                <li className=' hover:text-green-600 hover:duration-750 py-5  text-[#6D6D6D]'>Category 1</li>
                <li className=' hover:text-green-600 hover:duration-750 py-5  text-[#6D6D6D]'>Category 2</li>
                <li className=' hover:text-green-600 hover:duration-750 py-5  text-[#6D6D6D]'>Category 3</li>
                <li className=' hover:text-green-600 hover:duration-750 py-5  text-[#6D6D6D]'>Category 4</li>
                <li className=' hover:text-green-600 hover:duration-750 py-5 text-[#6D6D6D] '>Category 5</li>
              </ul>
            </div>


            <div className='flex gap-x-3 py-4'>


              <div className='w-[370px] relative'>
                <Image className='w-[370px]' imgSrc={picture7} />

                <Button className={'text-[14px] bg-black  top-8 py-3 px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750 absolute '} btnText={'Now'} />
                <div className="flex gap-[100px]">
                  <h3 className="font-bold text-[20px] text-black">Basic Crew Neck Tee</h3>
                  <h5 className="text-[#767676] text-[20px]">$44.00</h5>
                </div>

              </div>


              {/* rff */}

              <div className='w-[370px] relative'>
                <Image className='w-[370px]' imgSrc={picture12} />

                <Button className={'text-[14px] bg-black  top-8 py-3 px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750 absolute '} btnText={'Now'} />
                <div className="flex gap-[100px]">
                  <h3 className="font-bold text-[20px] text-black">Basic Crew Neck Tee</h3>
                  <h5 className="text-[#767676] text-[20px]">$44.00</h5>
                </div>

              </div>
              {/*  */}
              <div className='w-[370px] relative'>
                <Image className='w-[370px]' imgSrc={picture11} />

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

export default CategoryOne