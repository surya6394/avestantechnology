import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import logo from "../images/logo1.jpeg";
import { Link } from 'react-router-dom';


const EKYCform = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    aadharNumber: '',
    mobileNumber: '',
    email: '',
    address: '',
    pincode: '',
    country: '',
    state: '',
    district: '',
    gender: '',
    dob: '',
    nomineeName: '',
    nomineeMiddleName: '',
    nomineeSurname: '',
    nomineeRelation: '',
    panCardNumber: '',
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
    <div className="container mx-auto p-4">
      <form className="mx-auto bg-white p-8 rounded ">
        <div className="grid gap-4">

        <div>
    <h1 className='font-bold text-xl text-gray-500'>Personal Details</h1>
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

          <div className='flex justify-end mr-20'>
            <img src={logo} className='w-60 h-64 rounded-xl' alt="" />
          </div>

          </div>

          {/* Aadhar Number */}
          <div className="mb-4 w-1/2 -mt-44">
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
              Email Address
            </label>
            <input
              type="email"
              placeholder='Enter Email Address'
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          </div>

          <div className="grid  grid-cols-2 gap-10">
            {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-bgclr">
              Address
            </label>
            <textarea
              type="text"
              placeholder='Enter Address here....'
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* Pincode */}
          <div className="mb-4">
            <label htmlFor="pincode" className="block text-sm font-medium text-bgclr">
              Pincode
            </label>
            <input
              type="text"
              placeholder='Enter Pincode'
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          </div>

        <div className="grid  grid-cols-3 gap-12">
          {/* Country */}
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-bgclr">
              Country
            </label>
            <input
              type="text"
              placeholder='Country'
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* State */}
          <div className="mb-4">
            <label htmlFor="state" className="block text-sm font-medium text-bgclr">
              State
            </label>
            <input
              type="text"
              placeholder='State'
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          

          {/* District */}
          <div className="mb-4">
            <label htmlFor="district" className="block text-sm font-medium text-bgclr">
              District
            </label>
            <input
              type="text"
              placeholder='District'
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          </div>
          


            <div className="grid  grid-cols-2 gap-12">
          {/* Gender */}
          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-bgclr">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label htmlFor="dob" className="block text-sm font-medium text-bgclr">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          </div>

<div>
    <h1 className='font-bold text-xl text-gray-500'>Nominee Details</h1>
</div>

<div className="grid  grid-cols-3 gap-12">
          {/* Nominee Name */}
          <div className="mb-4">
            <label htmlFor="nomineeName" className="block text-sm font-medium text-bgclr">
              Nominee Name
            </label>
            <input
              type="text"
              placeholder='Firts Name'
              id="nomineeName"
              name="nomineeName"
              value={formData.nomineeName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* Nominee Middle Name */}
          <div className="mb-4">
            <label htmlFor="nomineeMiddleName" className="block text-sm font-medium text-bgclr">
              Nominee Middle Name
            </label>
            <input
              type="text"
              placeholder='Middile Name'
              id="nomineeMiddleName"
              name="nomineeMiddleName"
              value={formData.nomineeMiddleName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* Nominee Surname */}
          <div className="mb-4">
            <label htmlFor="nomineeSurname" className="block text-sm font-medium text-bgclr">
              Nominee Surname
            </label>
            <input
              type="text"
              placeholder='Last Name'
              id="nomineeSurname"
              name="nomineeSurname"
              value={formData.nomineeSurname}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          </div>

<div className="grid  grid-cols-2 gap-12">
          {/* Nominee Relation */}
          <div className="mb-4">
            <label htmlFor="nomineeRelation" className="block text-sm font-medium text-bgclr">
              Nominee Relation
            </label>
            <input
              type="text"
              placeholder='Relation'
              id="nomineeRelation"
              name="nomineeRelation"
              value={formData.nomineeRelation}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* PAN Card Number */}
          <div className="mb-4">
            <label htmlFor="panCardNumber" className="block text-sm font-medium text-bgclr">
              PAN Card Number
            </label>
            <input
              type="text"
              placeholder='PAN card number'
              id="panCardNumber"
              name="panCardNumber"
              value={formData.panCardNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
        </div>

        </div>

        {/* Submit Button */}
        <div className="flex mt-4 justify-center ">
            <Link to='/login'>
          <button
            type="submit"
            className="px-12 py-1 text-white bg-bgclr rounded-full font-bold hover:bg-bgclr focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Submit
          </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EKYCform;
