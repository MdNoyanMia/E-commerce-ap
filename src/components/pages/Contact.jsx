import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import Flex from '../Flex'
import { IoIosArrowForward } from "react-icons/io";
import Button from '../Button';
import Login from './Login';

const Contact = () => {
  return (
    <>
      <div className='py-3'>
        <Container>
          <Flex>
            <div>
              <h3 className='font-bold text-[49px] text-[#262626]'>Contact</h3>

              <div className='flex items-center font-normal text-[16px] text-[#767676] '>
                <Link to={'/'}>
                  <h4>Home</h4>
                </Link>
                <IoIosArrowForward />
                <h4> Contact </h4>

              </div>

            </div>

          </Flex>

        </Container>

      </div>

      <div className='py-10'>
        <Container>
          <Flex>
            <div>
              <h3 className='font-bold text-[39px] text-black'>Fill up a Form</h3>



              <div className='flex flex-col gap-y-2'>
                <label>
                  Name:
                  <input className='font-normal text-[14px] text-[#767676] py-3 px-6 w-[300px] border-none outline-none bg-[#f1e4e485]' type="text" placeholder='Your name here' />
                </label>
                <label>
                  Email:
                  <input className='font-normal text-[14px] text-[#767676] py-3 px-6 w-[300px] border-none outline-none bg-[#f1e4e485]' type="text" placeholder='Your Email here' />
                </label>
                <label>

                  Message:
                </label>
                <textarea className='font-normal text-[14px] text-[#767676] py-3 px-6 w-[300px] h-[100px] border-none outline-none bg-[#f1e4e485]' name="" id="" placeholder='Your name here'>


                </textarea>


              </div>



              <div className='py-12'>
                <Button className={'text-[14px] bg-black  top-8 py-3 px-14 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750  '} btnText={'Post'} />
              </div>

            </div>

          </Flex>
        </Container>
      </div>


      <div>
        <Container>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d196713.24386481792!2d90.21149708456481!3d23.633013553376514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1754369922266!5m2!1sen!2sbd"
            width={1000}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </Container>
      </div>


<div>
  <Login/>
</div>
    </>
  )
}

export default Contact