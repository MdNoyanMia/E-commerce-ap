import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Image from '../Image';
import picture13 from '/src/assets/picture13.png'
import Button from '../Button';


const Cart = () => {
    return (
        <>
            <div className='py-8'>
                <Container>
                    <Flex>
                        <div>
                            <div>
                                <h3 className='font-bold text-[49px] text-[#262626]'>Cart</h3>

                                <div className='flex items-center font-normal text-[16px] text-[#767676] '>
                                    <Link to={'/'}>
                                        <h4>Home</h4>
                                    </Link>
                                    <IoIosArrowForward />
                                    <h4> Cart </h4>

                                </div>



                            </div>

                        </div>




                    </Flex>

                </Container>

            </div>

            <div className='py-5'>
                <Container>
                    <div className='items-center text-center '>

                        <table className=' w-full' border="1">
                            <tr className=''>
                                <th className='text-left'>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th></th>
                                <th>Total</th>
                                <th></th>
                                <th></th>
                            </tr>


                            <tr>
                                <td className='bg-blck py-5'></td>
                                <td className='bg-mber-400 py-5'></td>
                                <td className='bg-ambr-400 py-5'></td>
                                <td className='bg-amer-400 py-5'></td>
                                <td className='bg-amer-400 py-5'></td>
                                <td className='bg-aber-400 py-5'></td>

                            </tr>

                            <tr className=''>
                                <td className='bg-re-500 py-5'></td>
                                <td className='bg-rd-500  py-5'></td>
                                <td className='bg-rd-500 py-5 '></td>
                                <td className='bg-re-500 py-5'></td>
                                <td className='bg-r-500 py-5'></td>
                                <td className='bg-re-500 py-5'></td>


                            </tr>


                            <tr>
                                <td className='bg-green-0 py-5 flex items-center  gap-2'>
                                    <ImCross />
                                    <Image className='w-[60px]' imgSrc={picture13} />
                                    <h6>Product name</h6>



                                </td>

                                <td className=' py-5'>$44.00</td>
                                <td className=' py-5'>
                                    <input className='flex gap-3 text-right' type="text" placeholder='    -          1          +' /></td>
                                <td className=' py-5'></td>
                                <td className='- py-5'></td>
                                <td className=' py-5'></td>
                            </tr>

                            <tr>
                                <td className=' py-5'></td>
                                <td className=' py-5'></td>
                                <td className='py-5'></td>
                                <td className=' py-5'></td>
                                <td className=' py-5'>389.99 $</td>
                                <td className=' py-5'>Update cart</td>

                            </tr>


                            <tr>
                                <td className='py-5   '>

                                    <div className=' flex gap-2 text-center items-center'>
                                        <label htmlFor="SIZE">SIZE</label>
                                        <input className='outline-none border-1' list="SIZES" id="SIZE" placeholder="Please select" />
                                        <datalist id="SIZES">
                                            <option value="S" />
                                            <option value="M" />
                                            <option value="L" />
                                            <option value="XL" />
                                            <option value="XM" />
                                        </datalist>
                                        <h4>Apply coupon</h4>
                                    </div>


                                </td>

                                <td className=' py-5'></td>
                                <td className=' py-5'></td>
                                <td className=' py-5 text-left'>Total</td>
                                <td className=' py-5'>389.99 $</td>
                                <td className=' py-5'></td>

                            </tr>

                            <tr>
                                <td className=' py5'></td>
                                <td className=' py5'></td>
                                <td className=' py5'></td>
                                <td className=' py5'></td>
                                <td className=' py5'></td>
                                <td className=' py5'></td>

                            </tr>
                            <tr className=''>
                                <td className='bg-amber-40 py-5'></td>
                                <td className='bg-amber-40 py-5'></td>
                                <td className='bg-amber-40 py-5'></td>
                                <td className='bg-amber-40 py-5'></td>
                                <td className='bg-amber-00 py-5'></td>
                                <td className='bg-amber-40 py-5 '>Cart totals</td>
                            </tr>
                            <tr>
                                <td className='bg-green-00 py-5'></td>
                                <td className='bg-green-40 py-5'></td>
                                <td className='bg-green-00 py-5'></td>
                                <td className='bg-green-00 py-5'></td>
                                <td className='bg-green-00 py-5'></td>
                                <td className='bg-green-00 py-5'></td>


                            </tr>
                            <tr>
                                <td className='bg-red-5 py-5'></td>
                                <td className='bg-red-0 py-5'></td>
                                <td className='bg-red50 py-5'></td>
                                <td className='bg-red-0 py-5'></td>
                                <td className='bg-red50 py-5'></td>
                                <td className='bg-re0 py-5'></td>


                            </tr>

                            <tr>
                                <td className='bg-blck py-5'></td>
                                <td className='bg-ambr-400 py-5'></td>
                                <td className='bg-ambr-400 py-5'></td>
                                <td className='bg-amer-400 py-5'></td>
                                <td className='bg-amer-400 py-5'></td>
                                <td className='bg-amer-400 py-5'></td>

                            </tr>

                            <tr>
                                <td className='py-5'></td>
                                <td className='py-5'></td>
                                <td className='py-5'></td>
                                <td className='py-5'></td>
                                <td className='py-5'></td>
                                <td className='py-5'></td>


                            </tr>


                        </table>


                    </div>



                    <div className='flex justify-end pb-7'>
                        <Button className={'text-[14px]  top-8 py-3 px-14 text-white  border-1 hover:bg-amber-500  bg-black hover:text-white hover:duration-750  '} btnText={'Log in'} />

                    </div>


                </Container >
            </div>

        </>
    )
}

export default Cart