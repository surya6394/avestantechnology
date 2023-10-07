import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
<footer class="bg-bgclr ">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 class="mb-6 text-xl font-bold text-white dark:text-white">Company</h2>
            <ul class="text-white font-bold font-md">
                <li class="mb-4">
                    <Link to='/' class=" hover:underline">About Us</Link>
                </li>
                <li class="mb-4">
                    <Link to='/' class="hover:underline">Blogs</Link>
                </li>
                <li class="mb-4">
                    <Link to='/' class="hover:underline">Careers</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-xl font-bold text-white dark:text-white">Support</h2>
            <ul class="text-white font-bold font-md">
                <li class="mb-4">
                    <Link to='/' class="hover:underline">Help Center</Link>
                </li>
                <li class="mb-4">
                    <Link to='/' class="hover:underline">Safety Center</Link>
                </li>
                <li class="mb-4">
                    <Link to='/' class="hover:underline">Community Guidelines</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-xl font-bold text-white dark:text-white">Legal</h2>
            <ul class="text-white font-bold font-md">
            <li class="mb-4">
                    <Link to='/' class="hover:underline">Cookies Policy</Link>
                </li>
                <li class="mb-4">
                    <Link to='/' class="hover:underline">Privacy Policy</Link>
                </li>
                <li class="mb-4">
                    <Link to='/' class="hover:underline">Terms &amp; Conditions</Link>
                </li>
                <li class="mb-4">
                    <Link to='/' class="hover:underline">Low Enforcement</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-xl font-bold text-white dark:text-white">Install App</h2>
            
        </div>
    </div>
    </div>
</footer>

  )
}

export default Footer