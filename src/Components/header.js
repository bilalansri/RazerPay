import { useState } from 'react'
import logo from './Images/razorpay-logo-white.svg'
import pak from './Images/pak.png'
import hdimg from './Images/illustration-desktop.jpg'
import pg from './Images/payment-gateway.svg'
import pb from './Images/payment-buttons.svg'
import ca from './Images/current-account.svg'
import vp from './Images/vendor-payments.svg'
import pr from './Images/pricing.svg'
import re from './Images/resources.svg'
import pa from './Images/partners.svg'
import su from './Images/support.svg'


export default ()=>{
    let [open, setOpen] = useState(true)

    return <>

<div className='bg-head'>
        <nav className='flex justify-between lg:justify-around p-6 flex-row'>

            <img src={logo} className='w-40 p-4' />

            <ul className='lg:text-white space-x-10 items-center lg:text-lg lg:flex lg:flex-row hidden'>
                <li className=''>Payments</li>
                <li className=''>Banking Plus</li>
                <li className=''>Rize</li>
                <li className=''>Resources</li>
                <li className=''>Partners</li>
                <li className=''>Support</li>
                <li className=''>Pricing</li>
                <li className=''>
                    <img src={pak} className='w-8'/>
                </li>
                <li className=' w-max'>
            <button className='text-white border-2 border-blue-600  p-2 rounded'>Log In</button>
                </li>
                <li className=''>
            <button className='text-blue-500 border-2 bg-white p-2 rounded'>Sign Up -></button>
                </li>
            </ul>

            <div className='w-max justify-around flex lg:hidden'>
            <button className='text-white border-2 border-blue-600 p-3 rounded'>Log In</button>
            <span className='text-white text-3xl items-center flex' onClick={()=>setOpen(!open)}>
            <ion-icon name={open ? "menu-outline" : "close-outline"}></ion-icon>
            </span>
            </div>
        </nav>

        <div className= {open ? 'hidden' : ' bg-white flex flex-col absolute right-0 w-80'}>
            <div>
                <div className='text-gray-500 p-2 py-5 flex flex-row justify-between'>
                    <p>PAYMENTS</p>
                </div>
                <div className='text-gray-500 p-2 flex flex-row'>
                    <img src={pg} className='bg-blue-500 rounded-3xl w-8'/>
                    <p className='mx-4'>Payment Gateway</p>
                </div>
                <div className='text-gray-500 p-2 flex flex-row'>
                    <img src={pg} className='bg-blue-500 rounded-3xl w-8'/>
                    <p className='mx-4'>Payment Links</p>
                </div>
                <div className='text-gray-500 p-2 flex flex-row'>
                    <img src={pb} className='bg-blue-500 rounded-3xl w-8'/>
                    <p className='mx-4'>Payment Buttons</p>
                </div>
                <div className='text-blue-500 text-xl p-2 justify-between font-bold flex flex-row'>
                    <p className=''>Explore Payment Suite</p>
                    <p className=''>></p>
                </div>

                <hr className='m-4'/>

                <div className='text-gray-500 p-2 py-5 flex flex-row justify-between'>
                    <p>RAZORPAY X - BANKING SUITE</p>
                </div>
                <div className='text-gray-500 p-2 flex flex-row'>
                    <img src={ca} className='bg-blue-500 rounded-3xl w-8'/>
                    <p className='mx-4'>Current Accounts</p>
                </div>
                <div className='text-gray-500 p-2 flex flex-row'>
                    <img src={vp} className='bg-blue-500 rounded-3xl w-8'/>
                    <p className='mx-4'>Vendor Payments</p>
                </div>
                <div className='text-blue-500 text-xl p-2 justify-between font-bold flex flex-row'>
                    <p className=''>Explore Payment Suite</p>
                    <p className=''>></p>
                </div>

                <hr className='m-4'/>

                <div className='text-orange-400 p-2 flex flex-row'>
                    <img src={pr} className='w-8'/>
                    <p className='mx-4'>Pricing</p>
                </div>
                <div className='text-gray-500 p-2 justify-between flex flex-row'>
                    <span className=' flex flex-row'>
                        <img src={re} className='w-8'/>
                        <p className='mx-4'>Resources</p>
                    </span>
                        <p className=''>></p>
                </div>
                <div className='text-gray-500 p-2 justify-between flex flex-row'>
                    <span className=' flex flex-row'>
                        <img src={pa} className='w-8'/>
                        <p className='mx-4'>Partners</p>
                    </span>
                        <p className=''>></p>
                </div>
                <div className='text-gray-500 p-2 justify-between flex flex-row'>
                    <span className='flex flex-row'>
                        <img src={su} className='w-8'/>
                        <p className='mx-4'>Support</p>
                    </span>
                        <p className=''>></p>
                </div>
            </div>

            {/* <div className=''>
                <button className='w-11/12 bg-blue-500 p-2 font-bold text-white rounded '>Login</button>
            </div> */}
        </div>

        <div className='lg:p-6 lg:flex flex-row '>

            <div className='lg:w-1/2'>
                <h1 className='text-4xl font-bold p-10 text-white'>Power your finance, grow your business</h1>
                <p className='p-10 text-gray-500'>Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.</p>
                <button className='bg-blue-600 mx-10 p-4 rounded text-white font-bold'>Sign Up Now</button>
            </div>

            <div className='lg:w-1/2'>
                <img src={hdimg} className='w-4/5 m-auto'/>
            </div>
        </div>
            
    </div>
    </>
}