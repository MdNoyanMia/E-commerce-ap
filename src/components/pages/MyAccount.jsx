import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
import Container from '../Container'
import Flex from '../Flex'
import { IoIosArrowForward } from "react-icons/io";


const MyAccount = () => {
    return (
        <>
            <div className='py-8'>
                <Container>
                    <Flex>
                        <div>
                            <div>
                                <h3 className='font-bold text-[49px] text-[#262626]'>My Account</h3>

                                <div className='flex items-center font-normal text-[16px] text-[#767676] '>
                                    <Link to={'/'}>
                                        <h4>Home</h4>
                                    </Link>
                                    <IoIosArrowForward />
                                    <h4>  My Account </h4>

                                </div>

                                {/* <p className='font-normal text-[16px] text-[#767676] w-[600px] py-30'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stLoginandard dummy text ever since the.</p> */}

                            </div>
                        </div>
                    </Flex>
                </Container>
            </div>


            <div className='py-30'>


                <Container>
                    <Flex className='  '>
                        <div>
                            <ul >
                                <li className=''>Dashboard </li>
                                <li className='py-5'>Others</li>
                                <li className='py-5'>Donwloads</li>
                                <li className='p-y-5'>Addresses</li>
                                <li className='py-5'>Account details </li>
                                <li className='py-5'>Logout</li>
                            </ul>

                        </div>

                        <div className='text-[#767676] '>

                            <h3>Hello <span className='text-[#262626]'> admin</span>  (not <span className='text-[#262626]'> admin</span> ?<span className='text-[#262626]'>  Log out </span> )</h3>
                            <p className=' py-5 w-[750px]'>From your account dashboard you can view your  <span className='text-[#262626]'> recent orders,</span>  manage your <span className='text-[#262626]'>shipping and billing addresses,</span> and <span className='text-[#262626]'>edit your password and account details.</span></p>

                        </div>

                    </Flex>

                </Container>
            </div>


        </>
    )
}

export default MyAccount