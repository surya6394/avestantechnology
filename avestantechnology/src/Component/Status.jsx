import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import logo from "../images/logo1.jpeg";
import StatusBar from './StatusBar';


const Status = (status) => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        aadharNumber: '',
        mobileNumber: '',
        mpin: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData); // You can replace this with your form submission logic
    };

    return (
        <div className='grid grid-cols-2 gap-8'>
            <div className="container mx-auto p-4">
                <form onSubmit={handleSubmit} className="mx-auto ring-1 ring-bgclr bg-white p-8 rounded-xl ">
                    <div className="grid gap-4">

                        <div>
                            <h1 className='font-bold text-xl text-gray-600'>Personal Details</h1>
                        </div>
                        {/* Name */}

                        <div>
                            <div className="grid  grid-cols-3 gap-8">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-bgclr">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder='Enter Name'
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full border rounded-md"
                                        required
                                    />
                                </div>

                                {/* Surname */}
                                <div className="mb-4">
                                    <label htmlFor="surname" className="block text-sm font-medium text-bgclr">
                                        Surname
                                    </label>
                                    <input
                                        type="text"
                                        placeholder='Enter Surname'
                                        id="surname"
                                        name="surname"
                                        value={formData.surname}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full border rounded-md"
                                        required
                                    />
                                </div>

                                <div className='flex justify-end '>
                                    <img src={logo} className='w-36 h-40 rounded-xl' alt="" />
                                </div>

                            </div>

                            {/* Aadhar Number */}
                            <div className="mb-4 w-1/2 -mt-20">
                                <label htmlFor="aadharNumber" className="block text-sm font-medium text-bgclr">
                                    Aadhar Number
                                </label>
                                <input
                                    type="text"
                                    placeholder='Enter Aadhar Number'
                                    id="aadharNumber"
                                    name="aadharNumber"
                                    value={formData.aadharNumber}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border rounded-md"
                                    required
                                />
                            </div>

                            {/* Mobile Number */}
                            <div className="mb-4 w-1/2">
                                <label htmlFor="mobileNumber" className="block text-sm font-medium text-bgclr">
                                    Mobile Number
                                </label>
                                <input
                                    type="text"
                                    placeholder='Enter Mobile Number'
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border rounded-md"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-4 w-1/2">
                                <label htmlFor="email" className="block text-sm font-medium text-bgclr">
                                    Your M pin for login
                                </label>
                                <input
                                    type="email"
                                    placeholder='Enter Email Address'
                                    id="email"
                                    name="email"
                                    value={formData.mpin}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border rounded-md"
                                    required
                                />
                            </div>

                        </div>
                    </div>
                </form>
            </div>
            <div>
                <div className='mt-10'>
                    <h1 className='font-bold text-2xl text-gray-700'>Application Status</h1>
                </div>
                <div>
                    <header className="bg-white">
                        <div className='text-xl text-gray-400 mt-1'><StatusBar status="Application Submitted" /></div>
                        <div className='text-3xl text-bgclr font-bold mt-14'><StatusBar status="In Progress" /></div>
                        <div className='text-xl text-gray-400 mt-14'><StatusBar status="Approved" /></div>
                    </header>
                </div>
            </div>
        </div>
    );
};

export default Status;
