import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Button from '../Button'
import { Link } from 'react-router-dom'

import { IoIosArrowForward } from "react-icons/io";

export const Checkout = () => {
  return (
    <>

      <div className='py-8'>
        <Container>
          <Flex>
            <div>
              <div>
                <h3 className='font-bold text-[49px] text-[#262626]'>Checkout</h3>

                <div className='flex items-center font-normal text-[16px] text-[#767676] '>
                  <Link to={'/'}>
                    <h4>Home</h4>
                  </Link>
                  <IoIosArrowForward />
                  <h4> Checkout </h4>

                </div>
              </div>

            </div>
          </Flex>
        </Container>

      </div>


      <div className='py-20'>
        <Container>
          <h3 className='text-[#767676] text-[16px] font'>Have a coupon? <span className='text-black text-[16px] font'>Click here to enter your code</span></h3>
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




              <div className=' flex flex-col w-[300px]'>
                <label className='font-bold text-black text-[16px]'>Companye Name (optional):</label>
                <input className='font-normal text-[16px] py-3 px-6 border-1  border-[#e7e0e0] outline-none' type="" placeholder='Your Companye Name' />
              </div>





              <div className=' py-4'>

                <label className='font-bold text-black text-[16px]'>Address</label>
                <address className='font-normal text-[16px] py-8 px-6 border-1 w-[300px] border-[#e7e0e0] outline-none' type="" placeholder='Your Companye Name'>
                  4279 Zboncak Port Suite 6212
                </address>
              </div>


              <div className=' flex  gap-x-50  items-center py-16'>

                <div className=' flex flex-col'>

                  <label htmlFor="Division">Country *</label>
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


                  <label htmlFor="district">Town/City *</label>
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

              <div className=' flex flex-col w-[300px]'>
                <label className='font-bold text-black text-[16px]'>Post Code *:</label>
                <input className='font-normal text-[16px] py-3 px-6 border-1  border-[#e7e0e0] outline-none' type="text" placeholder='Your Post Code *' />
              </div>




              <div className=' w-[300px] gap-x-50  items-center py-16'>

                <div className=' flex flex-col'>
                  <label className='font-bold text-black text-[16px]'>Email address:</label>
                  <input className='font-normal text-[16px] py-3 px-6 border-1  border-[#e7e0e0] outline-none' type="text" placeholder='Email address' />
                </div>
                <div className=' flex flex-col py-6'>
                  <label className='font-bold text-black text-[16px]'>Telephone:</label>
                  <input className='font-normal text-[16px] py-3 px-6 border-1  border-[#e7e0e0] outline-none' type="text" placeholder='Your phone number' />
                </div>
              </div>





              <div className='py-8'>
                <Container>
                  <Flex>
                    <div>
                      <div>
                        <h3 className='font-bold text-[49px] text-[#262626]'>Additional Information</h3>
                        <h4 className='text-[#262626] text-[14px] font-bold py-4'>Other Notes (optional)</h4>
                        <p className='text-[#767676] text-[14px] font-normal'>Notes about your order, e.g. special notes for delivery.</p>

                      </div>

                    </div>
                  </Flex>
                </Container>

              </div>



              {/* 
                            <div className='py-12'>
                                <Button className={'text-[14px] bg-[#FFFFFF] top-8 py-3 px-14 text-black  border-1 hover:bg-black  hover:text-white hover:duration-750  '} btnText={'Log in'} />
                            </div> */}

            </div>



          </Flex>
        </Container>
      </div>


    </>
  )
}
