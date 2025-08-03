import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logu from '/src/assets/logu.png'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa6";

const Header = () => {
    return (
        <>
            <div className='bg-amber-400 py-9'>
                <Container>
                    <Flex>
                        <div>
                            <Link to={"/"}>
                                <Image imgSrc={logu} />
                            </Link>
                        </div>

                        <div className='m-auto'>
                            <ul className='flex gap-x-5 text-[#767676] font-normal text-[16px]'>

                                <Link to={"/"}>
                                    <li className='relative after:absolute after:content[""] after:left-0 after:bottom-0 after:w-[0] after:h-[4px] after:bg-red-600 hover:text-green-600 hover:after:w-[100%] after:duration-750 '>Home</li>

                                </Link>


                                <Link to={"shop"}>
                                    <li className='relative after:absolute after:content[""] after:left-0 after:bottom-0 after:w-[0] after:h-[4px] after:bg-red-600 hover:text-green-600 hover:after:w-[100%] after:duration-750 ' >Shop</li>
                                </Link>

                                <Link to={"about"}>
                                    <li className='relative after:absolute after:content[""] after:left-0 after:bottom-0 after:w-[0] after:h-[4px] after:bg-red-600 hover:text-green-600 hover:after:w-[100%] after:duration-750 '>About</li>
                                </Link>

                                <Link to={"contact"}>
                                    <li className='relative after:absolute after:content[""] after:left-0 after:bottom-0 after:w-[0] after:h-[4px] after:bg-red-600 hover:text-green-600 hover:after:w-[100%] after:duration-750 '>Contacts</li>
                                </Link>

                                <Link to={"journal"}>
                                    <li className='relative after:absolute after:content[""] after:left-0 after:bottom-0 after:w-[0] after:h-[4px] after:bg-red-600 hover:text-green-600 hover:after:w-[100%] after:duration-750 '>Journal</li>
                                </Link>

                            </ul>
                        </div>

                    </Flex>
                </Container>
            </div>

            <div className='py-5 bg-[#D8D8D8]'>
                <Container>
                    <Flex className='justify-between'>
                        <div className='flex items-center gap-x-2 text-[#262626]'>
                            <FaBarsStaggered />
                            <h3>Shop by Category</h3>

                        </div>
                        <div className='relative '>
                            <input className='bg-[#FFFFFF] p-[15px] w-[550px] border-none outline-none' type="text" placeholder='Search Products' />

                            <CiSearch className='absolute right-3 top-1/2 -translate-y-1/2' />

                        </div>
                        <div className='flex gap-x-3'>
                            <div className='flex gap-x-1'>
                                <FaUser />
                                <IoMdArrowDropdown />
                            </div>
                            <FaCartArrowDown />
                        </div>
                    </Flex>
                </Container>

            </div>

        </>
    )
}

export default Header