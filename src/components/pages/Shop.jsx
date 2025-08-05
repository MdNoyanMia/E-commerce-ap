import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

import CategoryOne from './CategoryOne';
import CategoryTwo from './CategoryTwo';
import CategoryThree from './CategoryThree';
import CategoryFour from './CategoryFour';
import ProductInsite from './ProductInsite';




const Shop = () => {
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

      <div>
        <Container>
          <CategoryOne />
        </Container>
      </div>


      <div>
        <Container>
          <CategoryTwo />
        </Container>
      </div>

      <div>
        <Container>
          <CategoryThree />
        </Container>
      </div>


      <div>
        <Container>
          <CategoryFour />
        </Container>
      </div>

      <div>
        <ProductInsite/>
      </div>















    </>


  )
}

export default Shop