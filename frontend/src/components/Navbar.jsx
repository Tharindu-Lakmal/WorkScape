import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose, AiOutlineLogout } from 'react-icons/ai'
import CustomButton from './CustomButton'
import { users } from '../utils/data'

function MenuList({ user, onClick }) {
  const handleLogOut = () => {}

  return (
    <div>
      <Menu as='div' className='inline-block text-left'>
        <div className='flex'>
          <Menu.Button className='items-center inline-flex gap-3 w-full rounded-normal sm:px-2 md:px-2 py-2 px-2 
          text-sm font-normal bg-bdDarkGray text-lightWhite-100 hover:bg-bdDarkLight'>
            <img src={user?.profileUrl} alt="User profile"
            className='w-10 h-10 rounded-full object-cover' />
            
            <div className='flex leading[80px] flex-col items-start'>
              <p className='text-sm font-semibold'>
                {user?.firstName ?? user?.name}
              </p>
              <span className='text-sm text-lightWhite-100'>
                {user?.jobTitle ?? user?.email}
              </span>
            </div>

            <BiChevronDown className='h-24 w-24 text-lightWhite-100 aria-hidden:true' />
          </Menu.Button>
        </div>

        <Transition as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Menu.Items className='absolute z-50
          mt-3 w-56 origin-top-right divide-y dividfe-gray-100 
          rounded-md bg-bdDarkGray shadow-lg focus:outline-none'>
            <div className='p-2'>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={`${
                      user?.accountType ? 'user-profile' : 'company-profile'
                    }`} 
                    className={`${
                      active ? 'bg-bdDarkLight text-lightWhite-300' : 'text-lightWhite-100'
                    } group flex w-full items-center rounded-md p-2 text-sm`}
                    onClick={onClick}
                  >
                    <CgProfile 
                      className={`${
                        active ? 'text-lightWhite-300' : 'text-lightWhite-100'} 
                        mr-2 h-5 w-5`}
                        aria-hidden='true'
                    />
                    {user?.accountType ? 'User Profile' : 'Company Profile'}
                  </Link>
                )}
              </Menu.Item>

              {/* log out  */}
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleLogOut()}
                    className={`${
                      active ? 'bg-bdDarkLight text-lightWhite-300' : 'text-lightWhite-100'
                    } group flex w-full items-center rounded-md p-2 text-sm`}
                  >
                    <AiOutlineLogout 
                      className={`${
                        active ? 'text-lightWhite-300' : 'text-lightWhite-100'} 
                        mr-2 h-5 w-5`}
                        aria-hidden='true'
                    />
                    Log Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>

      </Menu>
    </div>
  )
}


const Navbar = () => {

  const user = users[1];
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={`${isOpen ? '' : 'overflow-hidden'} 
      font-sans1 relative max-w-[1920px] mx-auto z-40 xl:px-100 bg-bdDarkGray bg-opacity-100 backdrop-md`}> 
        <nav className='sm:w-[90%] w-[80%] mx-auto flex items-center justify-between p-8'>
          
          <div className='w-auto'>
            <Link to='/'>
              <svg className='w-[60%]' viewBox="0 0 374 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="workscape">
                  <path id="WorkScape" d="M153.406 32.7344L144.688 67H136.414L131.773 49C131.68 48.6562 131.555 48.1328 131.398 47.4297C131.242 46.7266 131.078 45.9609 130.906 45.1328C130.734 44.2891 130.578 43.5 130.438 42.7656C130.312 42.0156 130.227 41.4219 130.18 40.9844C130.133 41.4219 130.039 42.0078 129.898 42.7422C129.773 43.4766 129.625 44.2578 129.453 45.0859C129.297 45.9141 129.141 46.6875 128.984 47.4062C128.828 48.125 128.703 48.6719 128.609 49.0469L123.992 67H115.742L107 32.7344H114.148L118.531 51.4375C118.656 52 118.797 52.6719 118.953 53.4531C119.125 54.2344 119.289 55.0547 119.445 55.9141C119.617 56.7578 119.766 57.5781 119.891 58.375C120.031 59.1562 120.133 59.8359 120.195 60.4141C120.273 59.8203 120.375 59.1328 120.5 58.3516C120.625 57.5547 120.758 56.75 120.898 55.9375C121.055 55.1094 121.211 54.3438 121.367 53.6406C121.523 52.9375 121.664 52.3672 121.789 51.9297L126.781 32.7344H133.648L138.641 51.9297C138.75 52.3516 138.875 52.9219 139.016 53.6406C139.172 54.3438 139.328 55.1094 139.484 55.9375C139.641 56.7656 139.781 57.5781 139.906 58.375C140.047 59.1562 140.148 59.8359 140.211 60.4141C140.32 59.6328 140.469 58.6875 140.656 57.5781C140.859 56.4531 141.07 55.3359 141.289 54.2266C141.523 53.1172 141.727 52.1875 141.898 51.4375L146.258 32.7344H153.406ZM180.969 53.8516C180.969 56.0391 180.672 57.9766 180.078 59.6641C179.5 61.3516 178.648 62.7812 177.523 63.9531C176.414 65.1094 175.07 65.9844 173.492 66.5781C171.93 67.1719 170.164 67.4688 168.195 67.4688C166.352 67.4688 164.656 67.1719 163.109 66.5781C161.578 65.9844 160.242 65.1094 159.102 63.9531C157.977 62.7812 157.102 61.3516 156.477 59.6641C155.867 57.9766 155.562 56.0391 155.562 53.8516C155.562 50.9453 156.078 48.4844 157.109 46.4688C158.141 44.4531 159.609 42.9219 161.516 41.875C163.422 40.8281 165.695 40.3047 168.336 40.3047C170.789 40.3047 172.961 40.8281 174.852 41.875C176.758 42.9219 178.25 44.4531 179.328 46.4688C180.422 48.4844 180.969 50.9453 180.969 53.8516ZM162.852 53.8516C162.852 55.5703 163.039 57.0156 163.414 58.1875C163.789 59.3594 164.375 60.2422 165.172 60.8359C165.969 61.4297 167.008 61.7266 168.289 61.7266C169.555 61.7266 170.578 61.4297 171.359 60.8359C172.156 60.2422 172.734 59.3594 173.094 58.1875C173.469 57.0156 173.656 55.5703 173.656 53.8516C173.656 52.1172 173.469 50.6797 173.094 49.5391C172.734 48.3828 172.156 47.5156 171.359 46.9375C170.562 46.3594 169.523 46.0703 168.242 46.0703C166.352 46.0703 164.977 46.7188 164.117 48.0156C163.273 49.3125 162.852 51.2578 162.852 53.8516ZM201.5 40.3047C201.859 40.3047 202.273 40.3281 202.742 40.375C203.227 40.4062 203.617 40.4531 203.914 40.5156L203.375 47.2188C203.141 47.1406 202.805 47.0859 202.367 47.0547C201.945 47.0078 201.578 46.9844 201.266 46.9844C200.344 46.9844 199.445 47.1016 198.57 47.3359C197.711 47.5703 196.938 47.9531 196.25 48.4844C195.562 49 195.016 49.6875 194.609 50.5469C194.219 51.3906 194.023 52.4297 194.023 53.6641V67H186.875V40.7969H192.289L193.344 45.2031H193.695C194.211 44.3125 194.852 43.5 195.617 42.7656C196.398 42.0156 197.281 41.4219 198.266 40.9844C199.266 40.5312 200.344 40.3047 201.5 40.3047ZM215.82 30.5312V46.8438C215.82 47.8281 215.781 48.8125 215.703 49.7969C215.625 50.7812 215.539 51.7656 215.445 52.75H215.539C216.023 52.0625 216.516 51.3828 217.016 50.7109C217.531 50.0391 218.078 49.3906 218.656 48.7656L225.992 40.7969H234.055L223.648 52.1641L234.688 67H226.438L218.891 56.3828L215.82 58.8438V67H208.672V30.5312H215.82ZM259.227 57.4844C259.227 59.5156 258.734 61.2812 257.75 62.7812C256.766 64.2812 255.328 65.4375 253.438 66.25C251.562 67.0625 249.281 67.4688 246.594 67.4688C245.406 67.4688 244.242 67.3906 243.102 67.2344C241.977 67.0781 240.891 66.8516 239.844 66.5547C238.812 66.2422 237.828 65.8594 236.891 65.4062V58.6562C238.516 59.375 240.203 60.0234 241.953 60.6016C243.703 61.1797 245.438 61.4688 247.156 61.4688C248.344 61.4688 249.297 61.3125 250.016 61C250.75 60.6875 251.281 60.2578 251.609 59.7109C251.938 59.1641 252.102 58.5391 252.102 57.8359C252.102 56.9766 251.812 56.2422 251.234 55.6328C250.656 55.0234 249.859 54.4531 248.844 53.9219C247.844 53.3906 246.711 52.8203 245.445 52.2109C244.648 51.8359 243.781 51.3828 242.844 50.8516C241.906 50.3047 241.016 49.6406 240.172 48.8594C239.328 48.0781 238.633 47.1328 238.086 46.0234C237.555 44.8984 237.289 43.5547 237.289 41.9922C237.289 39.9453 237.758 38.1953 238.695 36.7422C239.633 35.2891 240.969 34.1797 242.703 33.4141C244.453 32.6328 246.516 32.2422 248.891 32.2422C250.672 32.2422 252.367 32.4531 253.977 32.875C255.602 33.2812 257.297 33.875 259.062 34.6562L256.719 40.3047C255.141 39.6641 253.727 39.1719 252.477 38.8281C251.227 38.4688 249.953 38.2891 248.656 38.2891C247.75 38.2891 246.977 38.4375 246.336 38.7344C245.695 39.0156 245.211 39.4219 244.883 39.9531C244.555 40.4688 244.391 41.0703 244.391 41.7578C244.391 42.5703 244.625 43.2578 245.094 43.8203C245.578 44.3672 246.297 44.8984 247.25 45.4141C248.219 45.9297 249.422 46.5312 250.859 47.2188C252.609 48.0469 254.102 48.9141 255.336 49.8203C256.586 50.7109 257.547 51.7656 258.219 52.9844C258.891 54.1875 259.227 55.6875 259.227 57.4844ZM275.516 67.4688C272.922 67.4688 270.711 67 268.883 66.0625C267.055 65.1094 265.664 63.6406 264.711 61.6562C263.758 59.6719 263.281 57.1328 263.281 54.0391C263.281 50.8359 263.82 48.2266 264.898 46.2109C265.992 44.1797 267.5 42.6875 269.422 41.7344C271.359 40.7812 273.602 40.3047 276.148 40.3047C277.961 40.3047 279.523 40.4844 280.836 40.8438C282.164 41.1875 283.32 41.6016 284.305 42.0859L282.195 47.6172C281.07 47.1641 280.023 46.7969 279.055 46.5156C278.086 46.2188 277.117 46.0703 276.148 46.0703C274.898 46.0703 273.859 46.3672 273.031 46.9609C272.203 47.5391 271.586 48.4141 271.18 49.5859C270.773 50.7578 270.57 52.2266 270.57 53.9922C270.57 55.7266 270.789 57.1641 271.227 58.3047C271.664 59.4453 272.297 60.2969 273.125 60.8594C273.953 61.4062 274.961 61.6797 276.148 61.6797C277.633 61.6797 278.953 61.4844 280.109 61.0938C281.266 60.6875 282.391 60.125 283.484 59.4062V65.5234C282.391 66.2109 281.242 66.7031 280.039 67C278.852 67.3125 277.344 67.4688 275.516 67.4688ZM300.312 40.2578C303.828 40.2578 306.523 41.0234 308.398 42.5547C310.273 44.0859 311.211 46.4141 311.211 49.5391V67H306.219L304.836 63.4375H304.648C303.898 64.375 303.133 65.1406 302.352 65.7344C301.57 66.3281 300.672 66.7656 299.656 67.0469C298.641 67.3281 297.406 67.4688 295.953 67.4688C294.406 67.4688 293.016 67.1719 291.781 66.5781C290.562 65.9844 289.602 65.0781 288.898 63.8594C288.195 62.625 287.844 61.0625 287.844 59.1719C287.844 56.3906 288.82 54.3438 290.773 53.0312C292.727 51.7031 295.656 50.9688 299.562 50.8281L304.109 50.6875V49.5391C304.109 48.1641 303.75 47.1562 303.031 46.5156C302.312 45.875 301.312 45.5547 300.031 45.5547C298.766 45.5547 297.523 45.7344 296.305 46.0938C295.086 46.4531 293.867 46.9062 292.648 47.4531L290.281 42.625C291.672 41.8906 293.227 41.3125 294.945 40.8906C296.68 40.4688 298.469 40.2578 300.312 40.2578ZM304.109 54.8594L301.344 54.9531C299.031 55.0156 297.422 55.4297 296.516 56.1953C295.625 56.9609 295.18 57.9688 295.18 59.2188C295.18 60.3125 295.5 61.0938 296.141 61.5625C296.781 62.0156 297.617 62.2422 298.648 62.2422C300.18 62.2422 301.469 61.7891 302.516 60.8828C303.578 59.9766 304.109 58.6875 304.109 57.0156V54.8594ZM333.172 40.3047C336.125 40.3047 338.508 41.4531 340.32 43.75C342.148 46.0469 343.062 49.4141 343.062 53.8516C343.062 56.8203 342.633 59.3203 341.773 61.3516C340.914 63.3672 339.727 64.8906 338.211 65.9219C336.695 66.9531 334.953 67.4688 332.984 67.4688C331.719 67.4688 330.633 67.3125 329.727 67C328.82 66.6719 328.047 66.2578 327.406 65.7578C326.766 65.2422 326.211 64.6953 325.742 64.1172H325.367C325.492 64.7422 325.586 65.3828 325.648 66.0391C325.711 66.6953 325.742 67.3359 325.742 67.9609V78.5312H318.594V40.7969H324.406L325.414 44.1953H325.742C326.211 43.4922 326.781 42.8438 327.453 42.25C328.125 41.6562 328.93 41.1875 329.867 40.8438C330.82 40.4844 331.922 40.3047 333.172 40.3047ZM330.875 46.0234C329.625 46.0234 328.633 46.2812 327.898 46.7969C327.164 47.3125 326.625 48.0859 326.281 49.1172C325.953 50.1484 325.773 51.4531 325.742 53.0312V53.8047C325.742 55.4922 325.898 56.9219 326.211 58.0938C326.539 59.2656 327.078 60.1562 327.828 60.7656C328.594 61.375 329.641 61.6797 330.969 61.6797C332.062 61.6797 332.961 61.375 333.664 60.7656C334.367 60.1562 334.891 59.2656 335.234 58.0938C335.594 56.9062 335.773 55.4609 335.773 53.7578C335.773 51.1953 335.375 49.2656 334.578 47.9688C333.781 46.6719 332.547 46.0234 330.875 46.0234ZM359.773 40.3047C362.195 40.3047 364.281 40.7734 366.031 41.7109C367.781 42.6328 369.133 43.9766 370.086 45.7422C371.039 47.5078 371.516 49.6641 371.516 52.2109V55.6797H354.617C354.695 57.6953 355.297 59.2812 356.422 60.4375C357.562 61.5781 359.141 62.1484 361.156 62.1484C362.828 62.1484 364.359 61.9766 365.75 61.6328C367.141 61.2891 368.57 60.7734 370.039 60.0859V65.6172C368.742 66.2578 367.383 66.7266 365.961 67.0234C364.555 67.3203 362.844 67.4688 360.828 67.4688C358.203 67.4688 355.875 66.9844 353.844 66.0156C351.828 65.0469 350.242 63.5703 349.086 61.5859C347.945 59.6016 347.375 57.1016 347.375 54.0859C347.375 51.0234 347.891 48.4766 348.922 46.4453C349.969 44.3984 351.422 42.8672 353.281 41.8516C355.141 40.8203 357.305 40.3047 359.773 40.3047ZM359.82 45.3906C358.43 45.3906 357.273 45.8359 356.352 46.7266C355.445 47.6172 354.922 49.0156 354.781 50.9219H364.812C364.797 49.8594 364.602 48.9141 364.227 48.0859C363.867 47.2578 363.32 46.6016 362.586 46.1172C361.867 45.6328 360.945 45.3906 359.82 45.3906Z" fill="#F0F4F8"/>
                  <g id="Group 3823">
                    <path id="W" d="M53.28 75L42.624 47.928L50.4 28.848L64.512 64.416H65.376L68.76 55.344C69.816 52.608 70.608 50.064 71.136 47.712C71.664 45.36 71.928 43.2 71.928 41.232C71.928 38.88 71.544 36.6 70.776 34.392C70.008 32.184 68.904 30.24 67.464 28.56C66.024 26.88 64.2 25.608 61.992 24.744V24.024H85.68V24.744L81.648 25.824L62.208 75H53.28ZM23.76 75L4.176 25.536L0.432 24.744V24.024H24.768V24.744L19.656 25.464L35.064 64.416H35.928L39.168 55.704C40.224 53.016 41.04 50.376 41.616 47.784C42.192 45.192 42.48 42.816 42.48 40.656C42.48 36.816 41.64 33.528 39.96 30.792C38.28 28.056 35.808 26.04 32.544 24.744V24.024H56.304V24.744L52.344 25.536L32.76 75H23.76Z" fill="#007BFF"/>
                    <path id="S" d="M73.048 76.08C70.744 76.08 68.344 75.888 65.848 75.504C63.352 75.12 60.952 74.592 58.648 73.92C56.344 73.248 54.256 72.432 52.384 71.472L53.824 53.688H55.12L60.448 64.632C61.552 66.936 62.824 68.88 64.264 70.464C65.704 72 67.312 73.152 69.088 73.92C70.864 74.64 72.688 75 74.56 75C76.144 75 77.488 74.784 78.592 74.352C79.696 73.92 80.536 73.272 81.112 72.408C81.736 71.544 82.048 70.536 82.048 69.384C82.048 67.944 81.64 66.576 80.824 65.28C80.056 63.936 78.76 62.544 76.936 61.104C75.16 59.664 72.688 58.056 69.52 56.28C65.152 53.544 61.696 51.144 59.152 49.08C56.608 47.016 54.784 45.096 53.68 43.32C52.576 41.496 52.024 39.6 52.024 37.632C52.024 35.568 52.528 33.648 53.536 31.872C54.544 30.048 55.984 28.488 57.856 27.192C59.776 25.848 62.032 24.816 64.624 24.096C67.264 23.328 70.216 22.944 73.48 22.944C76.312 22.944 78.952 23.16 81.4 23.592C83.896 24.024 86.152 24.624 88.168 25.392C90.232 26.112 91.936 26.952 93.28 27.912L90.184 44.832H88.888L86.296 38.28C84.904 34.824 83.488 32.064 82.048 30C80.656 27.888 79.144 26.376 77.512 25.464C75.88 24.504 74.08 24.024 72.112 24.024C70.144 24.024 68.44 24.264 67 24.744C65.608 25.224 64.528 25.92 63.76 26.832C63.04 27.696 62.68 28.776 62.68 30.072C62.68 31.416 63.184 32.784 64.192 34.176C65.2 35.52 66.88 37.056 69.232 38.784C71.584 40.464 74.776 42.456 78.808 44.76C81.88 46.488 84.448 48.096 86.512 49.584C88.576 51.024 90.232 52.416 91.48 53.76C92.776 55.056 93.688 56.376 94.216 57.72C94.744 59.016 95.008 60.408 95.008 61.896C95.008 64.008 94.576 65.856 93.712 67.44C92.848 69.024 91.672 70.368 90.184 71.472C88.696 72.576 86.992 73.464 85.072 74.136C83.2 74.808 81.232 75.288 79.168 75.576C77.104 75.912 75.064 76.08 73.048 76.08Z" fill="#007BFF"/>
                  </g>
                </g>
              </svg>
            </Link>
          </div>

          <ul className='hidden lg:flex gap-10 text-base'>
            <li className='hover:text-lightWhite-300'><Link to='/find-jobs'>Find Jobs</Link></li>
            <li><Link to='/companies'>Companies</Link></li>
            <li><Link to='/upload-job'>UploadJob</Link></li>
            <li><Link to='/about-us'>About</Link></li>
          </ul>

          <div className='hidden lg:block'>
            {
              !user?.token ? (
                <Link to='/user-auth'>
                  <CustomButton title='Sign In' containerStyles='btn-blue' />
                </Link>
              ) : (
                <div>
                  <MenuList user={user} />
                </div>
              )
            }
          </div>

          {/* mobile nav close button */}
          <button
            className='block lg:hidden text-brightBlue-100'
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? 
              <AiOutlineClose className='text-lightWhite-100' size={16} /> 
              : <FaBars className='text-lightWhite-100' size={16} />}
          </button>

        </nav>

        {/* Mobile menu */}
        <div className={`${
          isOpen ? 'absolute mr-0 flex bg-bdDarkGray' : 'absolute h-fit mr-[-340px]'
        } container rounded-normal my-2 mx-auto lg:hidden flex-col pl-24 pr-24 gap-2 py-6 max-w-[320px] h-fit right-2 duration-300 ease-in-out`}>

          <Link className='p-2 rounded-small hover:bg-bdDarkLight' to='/' onClick={handleCloseNavbar}>Find Jobs</Link>
          <Link className='p-2 rounded-small hover:bg-bdDarkLight' to='/companies' onClick={handleCloseNavbar}>Companies</Link>
          <Link className='p-2 rounded-small hover:bg-bdDarkLight' onClick={handleCloseNavbar}
             to={
              user?.accountType === 'seeker' ? 'applly-gistory' : 'upload-job'
             }
          >
            {user?.accountType === 'seeker' ? 'Applications' : 'Upload Jobs'}
          </Link>
          <Link className='p-2 mb-100 rounded-small hover:bg-bdDarkLight' to='/about-us' onClick={handleCloseNavbar}>About</Link>

          <div className='w-full py-3 border-t-2'>
            {
              !user?.token ? (
                <Link to='/user-auth'>
                  <CustomButton title='Sign In' containerStyles='btn-blue w-[100%] justify-center' />
                </Link>
              ) : (
                <div>
                  <MenuList user={user} onClick={handleCloseNavbar} />
                </div>
              )
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar