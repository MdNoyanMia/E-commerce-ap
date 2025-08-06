import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import Flex from '../Flex'
import { IoIosArrowForward } from "react-icons/io";
import Button from '../Button';
import Signup from './Signup';

const Login = () => {
    return (
        <>

            <div className='py-8'>
                <Container>
                    <Flex>
                        <div>
                            <div>
                                <h3 className='font-bold text-[49px] text-[#262626]'>Login</h3>

                                <div className='flex items-center font-normal text-[16px] text-[#767676] '>
                                    <Link to={'/'}>
                                        <h4>Home</h4>
                                    </Link>
                                    <IoIosArrowForward />
                                    <h4>  Login</h4>

                                </div>

                                <p className='font-normal text-[16px] text-[#767676] w-[600px] py-30'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stLoginandard dummy text ever since the.</p>


                            </div>

                        </div>




                    </Flex>

                </Container>

            </div>

            <div>

                <Container>
                    <Flex>

                        <div className='py-6'>

                            <h3 className='font-bold text-[39px] text-black'>Returning Customer</h3>



                            <div className=' flex  gap-x-50  items-center py-16'>
                                <div className=' flex flex-col'>
                                    <label className='font-bold text-black text-[16px]'>Email address:</label>
                                    <input className='font-normal text-[16px] py-3 px-6 border-1  border-[#e6dfdf] outline-none' type="text" placeholder='company@domain.com' />
                                </div>

                                <div className=' flex flex-col'>
                                    <label className='font-bold text-black text-[16px]'>Password:</label>
                                    <input className='font-normal text-[16px] py-3 px-6 border-1  border-[#e7e0e0] outline-none' type="password" placeholder='password' />
                                </div>

                            </div>

                            <div className='py-12'>
                                <Button className={'text-[14px] bg-[#FFFFFF] top-8 py-3 px-14 text-black  border-1 hover:bg-black  hover:text-white hover:duration-750  '} btnText={'Log in'} />
                            </div>

                        </div>



                    </Flex>
                </Container>
            </div>







            <div>
                <Container>
                    <Flex>

                        <div className='py-6'>

                            <h3 className='font-bold text-[39px] text-black py-3'>New Customer</h3>



                            <p className='font-normal text-[16px] text-[#767676] w-[600px] py-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stLoginandard dummy text ever since the.</p>

                            <div className='py-12'>
                                <Button className={'text-[14px] bg-black top-8 py-3 px-14 text-[#767676] border-1 hover:bg-amber-300 hover:text-black hover:duration-750  '} btnText={'Continue'} />
                            </div>

                        </div>
                    </Flex>
                </Container>
            </div>



        </>
    )
}

export default Login