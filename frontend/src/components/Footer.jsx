import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { footerLinks } from '../utils/data'
import { Link } from 'react-router-dom'
import InputText from './InputText'
import CustomButton from './CustomButton'
import LogoFooter from './LogoFooter'


const Footer = () => {
  return (
    <div className='footer mt-100 bg-bdDarkGray w-full sm:pt-[40px] pt-[80px]'>
      <div className='max-w-[1400px] mx-auto'>
        
        <div className='w-[85%] mx-auto flex flex-wrap gap-10 justify-between'>
          <div className='mt-[-20px]'>
            <LogoFooter />
          </div>

          {footerLinks.map(({id, title, links}) => (
            <div className='w-auto px-4' key={id}>
              <h2 className='text-medium tracking-widest font-medium mb-3'>
                {title}
              </h2>

              <div className='mb-10 flex flex-col gap-3'>
                {
                  links.map((link, indexedDB) => (
                    <Link to='/' key={indexedDB}
                      className='text-lightWhite-100 opacity-80 
                      hover:opacity-100 hover:text-lightWhite-300'>
                        {link}
                    </Link>
                  ))
                }
              </div>
            </div>
          ))}
        </div>

        <div className='w-[85%] mx-auto '>
          <p className='mt-2'>
            Subscribe to our Newsletter
          </p>

          <div className='container pt-2 pb-8 flex flex-wrap 
          items-center justify-between'>
            <div className='w-full md:w-2/4 lg:w-1/3 h-16 flex 
            items-center md:justify-center gap-2'>
              <InputText 
                styles='w-full flex-grow md:w-70 2xl:w-64 
                bg-gray-100 sm-mr-4 md-2'
                type='email' 
                placeholder='Email Address'
              />

              <CustomButton 
                title='Subscribe'
                containerStyles={
                  "block bg-brightBlue-100 text-lightWhite-100 px-5 py-2 rounded hover:bg-brightBlue-300 focus:potline-none flex-col items-center mt-2"
                }
              />
            </div>

            <span className='inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto'>
              <a className='text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FaFacebook />
              </a>
              <a className='ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FaTwitter />
              </a>
              <a className='ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FiInstagram />
              </a>

              <a className='ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FaLinkedin />
              </a>
            </span>
          </div>
        </div>

        <div className='max-w-[1400px] mx-auto pt-10 pb-5'>
          <div className='w-[85%] mx-auto py-4 flex flex-wrap flex-col sm:flex-row border-t-2 border-lightWhite-100'>
            <p className='text-gray-300 text-sm text-center sm:text-left'>
              &copy; 2023 WorkScape —
              <a
                href='#'
                className='text-[#1199e7] ml-1'
                target='_blank'
                rel='noopener noreferrer'
              >
                @WorkScape
              </a>
            </p>

            <span className='sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-300 text-sm'>
              Designed by WorkScape
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer