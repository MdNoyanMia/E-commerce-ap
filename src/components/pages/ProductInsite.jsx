import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import picture15 from '/src/assets/picture15.png'
import picture13 from '/src/assets/picture13.png'
import picture12 from '/src/assets/picture12.png'
import picture11 from '/src/assets/picture11.png'
import { MdStar } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import Button from '../Button'
import { TiStar } from "react-icons/ti";
const ProductInsite = () => {
    return (
        <>

            <div>
                <Container>

                    <div className='m-auto flex gap-15'>
                        <Image className=' m-auto ' imgSrc={picture15} />
                        <Image className=' m-auto ' imgSrc={picture13} />

                    </div>
                    <div className='m-auto flex py-10 gap-15'>
                        <Image className=' m-auto ' imgSrc={picture11} />
                        <Image className=' m-auto ' imgSrc={picture12} />
                    </div>

                </Container>
            </div>



            {/* 2nd div */}
            <div>
                <Container>
                    <div>

                        <h3 className='font-bold text-[39px] text-[#262626]'>Product</h3>
                    </div>
                    <div className=''>

                        <Flex className='items-center gap-2'>
                            <div className='flex text-amber-300'> <MdStar />
                                <MdStar />
                                <MdStar />
                                <MdStar />
                                <MdStar />
                            </div>
                            <div className='gap-x-01'> <h4><span>1</span>  Review</h4></div>
                        </Flex>

                    </div>

                    <div className='flex gap-6'>
                        <h4>$88.00</h4>
                        <h3>$44.00</h3>

                    </div>


                </Container>
            </div>

            <div>

                <Container>
                    <div className=' border-t-1 border-t-[#D8D8D8] w-[500px] '>


                        <div className=' flex gap-x-2 items-center py-3'>
                            <h3>COLOR:</h3>
                            <FaCircle className=' text-[#97979794]' />
                            <FaCircle className=' text-[#ff868686]' />
                            <FaCircle className=' text-[#7dd3215b]' />
                            <FaCircle className=' text-[#b6b6b688]' />

                            <FaCircle className=' text-[#15cba479]' />
                        </div>



                        <div className='flex flex-col gap-y-2'>
                            <label>
                                SIZE:
                                <select className='bg-[#FFFFFF] text-[#767676] p-[6px] w-[100px] border-1 outline-none' name="SIZE">
                                    <option className='text-[#767676]' value="apple">S</option>
                                    <option className='text-[#767676]' value="banana">M</option>
                                    <option className='text-[#767676]' value="orange">L</option>
                                </select>
                            </label>


                            <label className='py-2'>
                                QUANTITY:
                                <input className='bg-[#FFFFFF] text-[#767676] p-[6px] w-[100px] border-1 outline-none' name="SIZE" type="text" placeholder='  -    1     +' />
                            </label>


                            <label className='py-2'>
                                STATUS:
                                <input className='bg-[#FFFFFF] text-[#767676] p-[6px] w-[100px] border-1 outline-none' name="SIZE" type="text" placeholder=' In stock' />
                            </label>

                        </div>


                        <div className=' flex gap-x-2'>

                            <Button className={'text-[14px] bg-amber-50 border-1 border-solid border-black top-8 py-3 px-12 text-black hover:bg-amber-300 hover:text-black hover:duration-750  gap-x-2 '} btnText={'Add to Wish List'} />


                            <Button className={'text-[14px] bg-black  top-8 py-3 px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750  '} btnText={'Add to Cart'} />


                        </div>




                    </div>

                </Container>
            </div>


            <div className='py-6'>
                <Container>

                    <div className='flex justify-between w-[700px] border-t-1 py-7 border-solid border-[#767676]'>
                        <h3>FEATURES  & DETAILS</h3>
                        <h4>+</h4>
                    </div>


                    <div className='flex justify-between w-[700px] border-t-1 py-7 border-b-1 border-solid border-[#767676] '>
                        <h3> SHIPPING & RETURNS</h3>
                        <h4>+</h4>
                    </div>


                    <p className='w-[700px] text-[#767676] font-normal text-[16px] py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                    </p>

                </Container>

            </div>

            <div>
                <Container>
                    <div className='flex gap-x-5 py-8'>
                        <h3 className='text-[20px] font-bold text-[#767676]'>Description</h3>
                        <h4 className='text-[20px] font-bold text-black'>Reviews (1)</h4>


                    </div>

                    <p className='text-[16px] text-[#767676]'>1 review for Product</p>
                </Container>
            </div>

            <div>
                <Container>
                    <div className='flex  justify-between gap-x-6 items-center'>

                        <div className='flex  items-center gap-x-6 '>
                            <h4> John Ford</h4>
                            <div className='flex text-amber-300'>
                                <TiStar /><TiStar /><TiStar /><TiStar /><TiStar /></div>
                        </div>
                        <p className='flex gap-x-[200px]'>6 months ago</p>

                    </div>
                    <div>
                        <p className='text-[16px] text-[#767676] w-full'>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </Container>
            </div>

            <div className='py-6'>
                <Container>
                    <div>

                        <h3>Add a Review</h3>

                        <div className='flex flex-col gap-y-8 py-6'>
                            <label>
                                Name:
                                <input className='bg-[#FFFFFF] text-[#767676] p-[6px] w-[300px] border-1 outline-none' name="SIZE" type="text" placeholder=' Your name here' />
                            </label>


                            <label className='py-2'>
                                Email:
                                <input className='bg-[#FFFFFF] text-[#767676] p-[6px] w-[300px] border-1 outline-none' name="SIZE" type="text" placeholder=' Your name here' />
                            </label>


                            <label className='py-2'>
                                Review:
                                <input className='bg-[#FFFFFF] text-[#767676] p-[6px] w-[300px] border-1 outline-none' name="SIZE" type="text" placeholder=' Your name here' />
                            </label>

                        </div>



                    </div>
                </Container>
            </div>



            <div>
                <Container>
                    <Button className={'text-[14px] bg-black  top-8 py-3 px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750  '} btnText={'Post'} />
                </Container>
            </div>

        </>
    )
}

export default ProductInsite