
     <div>
        <Container>
          <Flex className=' bg-amber-500'>
            {/* start */}
            <div className=''>

              <div className=''>

                <h3 className='font-bold text-[20px] text-[#262626]'>Shop by Category</h3>
                <ul className=' text-[#6D6D6D] font-normal text-[14px] gap-y-9'>

                  <Link to={"categoryone"}>

                    <div className='flex items-center justify-between '>
                      <li className=' hover:text-green-600 hover:duration-750 py-2' >Category 1</li>
                      <IoAdd />
                    </div>

                  </Link>

                  <Link to={"Categorytwo"}>

                    <li className=' hover:text-green-600 hover:duration-750 py-2 '>Category 2</li>
                  </Link>

                  <Link to={"Categorythree"}>

                    <div className='flex items-center justify-between '>
                      <li className=' hover:text-green-600 hover:duration-750 py-2' >Category 3</li>
                      <IoAdd />
                    </div>

                  </Link>

                  <Link to={"Categoryfour"}>
                    <li className=' hover:text-green-600 hover:duration-750 py-2'>Category 4</li>
                  </Link>
                  <Link to={"Categoryfive"}>
                    <li className=' hover:text-green-600 hover:duration-750 py-2 '>Category 5</li>
                  </Link>
                </ul>

              </div>

              {/* 2nnd div starat */}


              <div className='w-[300px]'>


                <div className='flex justify-between items-center py-2'>
                  <h3 className='font-bold text-[20px] text-[#262626]'>Shop by Color</h3>
                  <TiArrowSortedUp />
                </div>


                <ul className=' text-[#6D6D6D] font-normal text-[14px] gap-y-9'>
                  <Link to={"categoryone"}>

                    <div className='flex items-center gap-2 py-2'>
                      <MdCircle className='text-black' />
                      <li className=' hover:text-black hover:duration-750 '> Color 1</li>
                    </div>

                  </Link>

                  <Link to={"Categorytwo"}>
                    <div className='flex items-center gap-2 py-2'>
                      <FaCircle className='text-fuchsia-400' />
                      <li className=' hover:text-fuchsia-400 hover:duration-750 '> Color 2</li>
                    </div>
                  </Link>

                  <Link to={"Categorythree"}>

                    <div className='flex items-center gap-2 py-2'>
                      <FaCircle className='text-[#7ED321]' />

                      <li className=' hover:text-[#7ED321] hover:duration-750 ' > Color 3</li>

                    </div>

                  </Link>

                  <Link to={"Categoryfour"}>
                    <div className='flex items-center gap-2 py-2'>
                      <FaCircle className='text-[#B6B6B6]' />
                      <li className=' hover:text-[#B6B6B6] hover:duration-750 '> Color 4</li>
                    </div>
                  </Link>

                  <Link to={"Categoryfive"}>
                    <div className='flex items-center gap-2 py-2'>
                      <FaCircle className='text-[#15CBA5]' />
                      <li className=' hover:text-[#15CBA5] hover:duration-750 '> Color 5</li>
                    </div>
                  </Link>
                </ul>

              </div>

              {/* 2nnd div end */}


              {/* 3rd div start */}





              <div className='w-[300px]'>


                <div className='flex justify-between items-center '>
                  <h3 className='font-bold text-[20px] text-[#262626]'>Shop by Brand</h3>
                  <TiArrowSortedUp />
                </div>


                <ul className=' text-[#6D6D6D] font-normal text-[14px] gap-y-9'>
                  <Link to={"categoryone"}>

                    <div className=''>

                      <li className=' hover:text-black hover:duration-750 py-2 '> Brand 1</li>
                    </div>

                  </Link>

                  <Link to={"Categorytwo"}>
                    <div className=''>

                      <li className=' hover:text-fuchsia-400 hover:duration-750 py-2 '> Brand 2</li>
                    </div>
                  </Link>

                  <Link to={"Categorythree"}>

                    <div className=''>


                      <li className=' hover:text-[#7ED321] hover:duration-750 py-2 ' > Brand 3</li>

                    </div>

                  </Link>

                  <Link to={"Categoryfour"}>
                    <div className=''>

                      <li className=' hover:text-[#B6B6B6] hover:duration-750 py-2'> Brand 4</li>
                    </div>
                  </Link>

                  <Link to={"Categoryfive"}>
                    <div className=''>

                      <li className=' hover:text-[#15CBA5] hover:duration-750 py-2 '> Brand 5</li>
                    </div>
                  </Link>
                </ul>

              </div>
              {/* 3rd div end */}




              {/* 4th div start*/}

              <div className='w-[300px]'>


                <div className='flex justify-between items-center'>
                  <h3 className='font-bold text-[20px] text-[#262626]'>Shop by Price</h3>
                  <TiArrowSortedUp />
                </div>


                <ul className=' text-[#6D6D6D] font-normal text-[14px] gap-y-9'>
                  <Link to={"categoryone"}>

                    <div className='flex items-center gap-2'>

                      <li className=' hover:text-black hover:duration-750 py-2'> $0.00 - $9.99</li>
                    </div>

                  </Link>

                  <Link to={"Categorytwo"}>
                    <div className='flex items-center gap-2'>

                      <li className=' hover:text-fuchsia-400 hover:duration-750 py-2 '> $20.00 - $19.99</li>
                    </div>
                  </Link>

                  <Link to={"Categorythree"}>

                    <div className='flex items-center gap-2'>


                      <li className=' hover:text-[#7ED321] hover:duration-750 py-2' > $30.00 - $39.99</li>

                    </div>

                  </Link>

                  <Link to={"Categoryfour"}>
                    <div className='flex items-center gap-2'>

                      <li className=' hover:text-[#B6B6B6] hover:duration-750 py-2'> $40.00 - $49.99</li>
                    </div>
                  </Link>

                  <Link to={"Categoryfive"}>
                    <div className='flex  gap-2'>
                      <li className=' hover:text-[#15CBA5] hover:duration-750 py-2'> $50.00 - $59.99</li>
                    </div>
                  </Link>
                </ul>

              </div>
            </div>
            {/* 4th div end */}

            {/* end */}


            {/* right side */}

            <div className='py-0'>
              <div>
                <label htmlFor="">
                  <input type="text" placeholder='nouan'/>
                </label>
              </div>
    



            </div>



            {/* right side */}

          </Flex>
        </Container>

      </div >