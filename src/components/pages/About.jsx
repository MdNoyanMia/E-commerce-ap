import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import picture1 from '/src/assets/picture1.png'
import picture15 from '/src/assets/picture15.png'
import Button from '../Button'

const About = () => {
  return (
    <>
      <div className='py-3'>
        <Container>
          <Flex>
            <div>
              <h3 className='font-bold text-[49px] text-[#262626]'>Products</h3>

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

      <div className='flex m-auto'>
        <Container>
          <Flex className='flex justify-between gap-x-25'>
            <div className='flex  relative'>
              <Image imgSrc={picture1} />


              <Button className={'text-[14px] bg-black  bottom-8 left-25 py-3 px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750 absolute '} btnText={'Our Brands'} />
            </div>
            <div className='flex  relative'>

              <Image imgSrc={picture15} />

              <Button className={'text-[14px] bg-black  bottom-4 left-28 py-3 px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750 absolute '} btnText={'Our Stores'} />
            </div>


          </Flex>
        </Container>
      </div>


      <div className='py-10'>
        <Container>
          <div className='font-normal text-[33px] text-[#262626] w-[100%]'>
            <h3>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h3>
          </div>
        </Container>
      </div>


      <div className=' py-10'>
        <Container>

          <Flex className="flex justify-between">

            <div className='w-[550px] h-[150px]'>

              <h3 className='font-bold text-[20px] text-black'>Our Vision</h3>

              <p className='font-normal text-[16px] text-[#767676] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>



            <div className='w-[550px] h-[150px]'>

              <h3 className='font-bold text-[20px] text-black'>Our Story</h3>

              <p className='font-normal text-[16px] text-[#767676] '> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>

            </div>




            <div className='w-[550px] h-[150px]'>

              <h3 className='font-bold text-[20px] text-black'>Our Brands</h3>

              <p className='font-normal text-[16px] text-[#767676] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

            </div>

          </Flex>
        </Container>
      </div>


    </>
  )
}

export default About