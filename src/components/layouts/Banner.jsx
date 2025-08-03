import React from 'react'
import Container from '../Container'
import Button from '../Button'
import Flex from '../Flex'
import { FaCarSide } from "react-icons/fa";
import { CiRedo } from "react-icons/ci";
import Image from '../Image'
import pic from '/src/assets/pic.png'
import pictwo from '/src/assets/pictwo.png'
import picnai from '/src/assets/picnai.png'

import picture5 from '/src/assets/picture5.png';
import picture6 from '/src/assets/picture6.png';
import picture7 from '/src/assets/picture7.png';
import picture8 from '/src/assets/picture8.png';

import { FaHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { BsCartCheckFill } from "react-icons/bs";
import AutoPlay from '../AutoPlay';

const Banner = () => {
    return (
        <>
            <Container>
                <div className='bg-[url(/src/assets/slider01.png)] py-[250px] bg-center bg-cover bg-no-repeat relative'>

                    <div className='w-[400px] h-[300px] left-[30px] -translate-y-1/2 absolute'>

                        <h3 className='font-bold text-[49px] text-[#262626]'>Final Offer</h3>
                        <h4 className=' py-12 font-normal text-[16px] text-[#6D6D6D]'>Up to<span className='font-bold text-[40px] text-[#262626] px-2 py-[20px]'>50%</span>sale for all furniture items!</h4>

                        <Button className={'text-[14px] bg-black px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750  '} btnText={'Shop Now'} />
                    </div>

                </div>
                {/* banner end */}

                <div>

                    <Flex className='justify-between'>
                        <div>
                            <h3 className='text-[14px] text-[#6D6D6D]'><span className='text-[16px] text-black font-bold'>2</span> Two years warranty</h3>
                        </div>
                        <div className='flex gap-x-1'>
                            <FaCarSide />
                            <h3 className='text-[14px] text-[#6D6D6D]' >
                                Free shipping</h3>
                        </div>
                        <div className='flex gap-x-1 '>
                            <CiRedo />
                            <h3 className='text-[14px] text-[#6D6D6D]'>Return policy in 30 days</h3>
                        </div>

                    </Flex>

                </div>

            </Container>

            {/*  */}

            <div className='py-6 '>
                <Container>
                    <Flex className='justify-between gap-x-2'>

                        <div className='w-[650px] h-[650px] relative '>
                            <Image className='' imgSrc={pic} />

                            <div className=' absolute w-[300px] h-[200px] bottom-10 left-14'>


                                <h3 className='font-bold text-[16px] text-[#262626] pt-4'>Final Offer</h3>
                                <h4 className=' py-5 font-normal text-[16px] text-[#6D6D6D]'>Up to<span className='font-bold text-[14px] text-[#262626] px-2 py-[20px]'>30%</span>sale for all furniture items!</h4>

                                <Button className={'text-[14px] bg-black px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750  '} btnText={'Shop Now'} />
                            </div>

                        </div>
                        {/* 2nd div */}

                        <div className='h-[650px] w-[650px]'>
                            <div className=' h-[300px] w-[650px] relative'>
                                <Image imgSrc={pictwo} />
                                {/*  */}
                                <div className=' absolute w-[300px] h-[200px] bottom-5 left-14'>


                                    <h3 className='font-bold text-[16px] text-[#262626] pt-4'>Electronics Sale</h3>
                                    <h4 className=' py-5 font-normal text-[16px] text-[#6D6D6D]'>Up to<span className='font-bold text-[14px] text-[#262626] px-2 py-[20px]'>70%</span>sale for all furniture items!</h4>

                                    <Button className={'text-[14px] bg-black px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750  '} btnText={'Shop Now'} />
                                </div>

                                {/*  */}
                            </div>
                            <div className='h-[300px] w-[650px] py-11 relative'>
                                <Image imgSrc={picnai} />

                                {/*  */}

                                <div className=' absolute w-[300px] h-[200px] bottom-0 left-14'>


                                    <h3 className='font-bold text-[16px] text-[#262626] pt-4'>Furniture Offer</h3>
                                    <h4 className=' py-5 font-normal text-[16px] text-[#6D6D6D]'>Up to<span className='font-bold text-[14px] text-[#262626] px-2 py-[20px]'>50%</span>sale for all furniture items!</h4>

                                    <Button className={'text-[14px] bg-black px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750  '} btnText={'Shop Now'} />
                                </div>
                                {/*  */}
                            </div>

                        </div>
                    </Flex>

                </Container>
            </div>

            {/* AutoPlay */}
            <div>
                <Container>
                    <AutoPlay />
                </Container>

            </div>
            {/* AutoPlay */}



            {/*  */}

            <div className=' py-30 '>

                <Container>

                    <Flex className='gap-x-6'>

                        <div className=' relative w-[300px]'>
                            <Image className='' imgSrc={picture5} />

                            <Button className={'text-[14px] bg-black  top-8 py-3 px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750 absolute '} btnText={'Now'} />
                            <div className="flex gap-[50px] py-3">
                                <h3 className="font-bold text-[16px] w-[200px] text-black">Basic Crew Neck Tee</h3>
                                <h5 className="text-[#767676] text-[16px]">$44.00</h5>
                            </div>
                            <h3>Back</h3>

                        </div>


                        <div className=' relative w-[300px]'>
                            <Image className='w-[370px]' imgSrc={picture6} />

                            <Button className={'text-[14px] bg-black  top-8 py-3 px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750 absolute '} btnText={'Now'} />

                            <div className="flex gap-[50px] py-3">
                                <h3 className="font-bold text-[16px] w-[200px]  text-black">Basic Crew Neck Tee</h3>
                                <h5 className="text-[#767676] text-[16px]">$44.00</h5>
                            </div>
                            <h3>Back</h3>
                        </div>

                        <div className=' relative w-[300px]'>
                            <Image className='w-[370px]' imgSrc={picture7} />

                            <Button className={'text-[14px] bg-black  top-8 py-3 px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750 absolute '} btnText={'Now'} />
                            <div className="flex gap-[50px] py-3">
                                <h3 className="font-bold text-[16px] w-[200px]  text-black">Basic Crew Neck Tee</h3>
                                <h5 className="text-[#767676] text-[16px]">$44.00</h5>
                            </div>
                            <h3>Back</h3>
                        </div>

                        <div className=' relative w-[300px] '>
                            <Image className='w-[370px] ' imgSrc={picture8} />
                            {/*  */}
                            <Button className={'text-[14px] bg-black  top-8 py-3 px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750 absolute '} btnText={'Now'} />
                            {/*  */}
                            <div className="flex gap-[50px] py-3">
                                <h3 className="font-bold text-[16px] w-[300px]  text-black">Basic Crew Neck Tee</h3>
                                <h5 className="text-[#767676] text-[16px]">$44.00</h5>

                            </div>
                            <h3>Back</h3>

                        </div>
                    </Flex>

                </Container>
            </div>

        </>
    )
}

export default Banner