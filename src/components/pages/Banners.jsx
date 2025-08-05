import React from 'react'
import Container from '../Container'
import Image from '../Image'
import picture9 from '/src/assets/picture9.png'
import Button from '../Button'

const Banners = () => {
    return (
        <div className='relative'>
            <Container>
                <Image imgSrc={picture9} />
                <div className=' absolute w-[300px] h-[200px] bottom-10 right-80'>


                    <h3 className='font-bold text-[20px] text-[#262626] pt-4'>Phone of the year</h3>
                    <p className=' py-5 font-normal text-[16px] text-[#6D6D6D] w-[511px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>

                    <Button className={'text-[14px] bg-black px-10 text-[#FFFFFF] hover:bg-amber-300 hover:text-black hover:duration-750 '} btnText={'Shop Now'} />
                </div>

            </Container>
        </div>
    )
}

export default Banners