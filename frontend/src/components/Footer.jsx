import React from 'react'
import { assets } from '@/assets/assets'
const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-32'/>
                <p className="w-full md:w-2/3 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eius ad maxime sapiente illum totam. Eveniet molestiae non nam quidem veritatis? Necessitatibus beatae quos assumenda aspernatur, non eos similique soluta.
                    Eius porro officiis error quam, cumque non fuga voluptatem maxime eveniet vitae corporis magnam delectus, magni reprehenderit nihil debitis. Eum dolor quos non mollitia repudiandae nihil ut sit expedita. Dolor?
                </p>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+123456789</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2025@ forever.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer