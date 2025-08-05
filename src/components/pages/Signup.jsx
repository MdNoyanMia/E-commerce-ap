import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
import Container from '../Container'
import Flex from '../Flex'
import { IoIosArrowForward } from "react-icons/io";
import MyAccount from './MyAccount'
const Signup = () => {
    return (
        <>



            <div className='py-8'>
                <Container>
                    <Flex>
                        <div>
                            <div>
                                <h3 className='font-bold text-[49px] text-[#262626]'>Sign up</h3>

                                <div className='flex items-center font-normal text-[16px] text-[#767676] '>
                                    <Link to={'/'}>
                                        <h4>Home</h4>
                                    </Link>
                                    <IoIosArrowForward />
                                    <h4>  Sign up </h4>

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

                            <h3 className='font-bold text-[39px] text-black'>Your Personal Details</h3>



                            <div className=' flex  gap-x-50  items-center py-16'>
                                <div className=' flex flex-col'>
                                    <label className='font-bold text-black text-[16px]'>First Name:</label>
                                    <input className='font-normal text-[16px] py-3 px-6 border-1  border-[#e6dfdf] outline-none' type="text" placeholder='First Name' />
                                </div>



                                <div className=' flex flex-col'>
                                    <label className='font-bold text-black text-[16px]'>Last Name:</label>
                                    <input className='font-normal text-[16px] py-3 px-6 border-1  border-[#e6dfdf] outline-none' type="text" placeholder='Last Name' />
                                </div>

                            </div>


                            <div className=' flex  gap-x-50  items-center py-16'>

                                <div className=' flex flex-col'>
                                    <label className='font-bold text-black text-[16px]'>Email address:</label>
                                    <input className='font-normal text-[16px] py-3 px-6 border-1  border-[#e7e0e0] outline-none' type="text" placeholder='Email address' />
                                </div>
                                <div className=' flex flex-col'>
                                    <label className='font-bold text-black text-[16px]'>Telephone:</label>
                                    <input className='font-normal text-[16px] py-3 px-6 border-1  border-[#e7e0e0] outline-none' type="Password" placeholder='Your phone number' />
                                </div>
                            </div>


                            {/* 
                            <div className='py-12'>
                                <Button className={'text-[14px] bg-[#FFFFFF] top-8 py-3 px-14 text-black  border-1 hover:bg-black  hover:text-white hover:duration-750  '} btnText={'Log in'} />
                            </div> */}

                        </div>



                    </Flex>
                </Container>
            </div>



            <div>
                <Container>
                    <Flex>

                        <div className='py-6'>

                            <h3 className='font-bold text-[39px] text-black py-3'>New Customer</h3>




                            <div className=' flex  gap-x-50  items-center py-16'>
                                <div className=' flex flex-col'>

                                    <label className='font-bold text-black text-[16px]'>Address 1</label>
                                    <address>
                                        4279 Zboncak Port Suite 6212
                                    </address>
                                </div>



                                <div className=' flex flex-col'>
                                    <label className='font-bold text-black text-[16px]'>Address 2</label>
                                    <address>
                                        ----
                                    </address>
                                </div>

                            </div>


                            <div className=' flex  gap-x-50  items-center py-16'>

                                <div className=' flex flex-col'>
                                    <label className='font-bold text-black text-[16px]'>City</label>
                                    <input className='font-normal text-[16px] py-3 px-6 border-1  border-[#e7e0e0] outline-none' type="Password" placeholder='Your City' />
                                </div>
                                <div className=' flex flex-col'>
                                    <label className='font-bold text-black text-[16px]'>Post Code</label>
                                    <input className='font-normal text-[16px] py-3 px-6 border-1  border-[#e7e0e0] outline-none' type="Password" placeholder='Your Post Code' />
                                </div>
                            </div>


                            <div className=' flex  gap-x-50  items-center py-16'>

                                <div className=' flex flex-col'>

                                    <label htmlFor="Division">Division:</label>
                                    <input list="Divisions" id="division" placeholder="Please select" />
                                    <datalist id="Divisions">
                                        <option value="Chittagong" />
                                        <option value="Dhaka" />
                                        <option value="Khulna" />
                                        <option value="Rajshahi" />
                                        <option value="Sylhet" />
                                        <option value="Barisal" />
                                        <option value="Rangpur" />
                                        <option value="Mymensingh" />
                                    </datalist>
                                </div>
                                <div className=' flex flex-col'>


                                    <label htmlFor="district">District:</label>
                                    <input list="districts" id="district" placeholder="Please select" />
                                    <datalist id="districts">
                                        <option value="Comilla" />
                                        <option value="Dhaka" />
                                        <option value="Gaibandha" />
                                        <option value="Chittagong" />
                                        <option value="Feni" />
                                    </datalist>


                                </div>
                            </div>

                            <div className='py-12'>
                                <Button className={'text-[14px] bg-black top-8 py-3 px-14 text-[#767676] border-1 hover:bg-amber-300 hover:text-black hover:duration-750  '} btnText={'Continue'} />
                            </div>

                        </div>


                    </Flex>
                </Container>
            </div>





            <div className='py-6'>

                <Container>
                    <h3 className='font-bold text-[39px] text-black py-3'>Your Password</h3>





                    <div className=' flex  gap-x-50  items-center py-16'>

                        <div className=' flex flex-col'>
                            <label className='font-bold text-black text-[16px]'>Password</label>
                            <input className='font-normal text-[16px] py-3 px-6 border-1  border-[#e7e0e0] outline-none' type="Password" placeholder='Your Password' />
                        </div>
                        <div className=' flex flex-col'>
                            <label className='font-bold text-black text-[16px]'>RepeatPassword</label>
                            <input className='font-normal text-[16px] py-3 px-6 border-1  border-[#e7e0e0] outline-none' type="Password" placeholder='Your Repeat Password' />
                        </div>
                    </div>






                    <div className='font-normal text-[18px] flex gap-5'>
                        <input className='py-7 px-8' type="checkbox" id="horns" name="horns" />
                        <label htmlFor="horns">I have read and agree to the Privacy Policy</label>
                    </div>


                    <div className='font-normal text-[18px] flex gap-x-5 py-5'>


                        <label htmlFor="horns">Subscribe Newsletter:</label>
                        <input className='py-7 px-8' type="checkbox" id="horns" name="horns" />
                        <label htmlFor="horns">Yes</label>
                        <input className='py-7 px-8' type="checkbox" id="hornser" name="horns" />
                        <label htmlFor="horns">No</label>


                    </div>




                    <div className='py-12'>
                        <Button className={'text-[14px] bg-black top-8 py-3 px-14 text-[#767676] border-1 hover:bg-amber-300 hover:text-black hover:duration-750  '} btnText={'Log in'} />
                    </div>
                </Container>


            </div>


<MyAccount/>            

        </>
    )
}

export default Signup