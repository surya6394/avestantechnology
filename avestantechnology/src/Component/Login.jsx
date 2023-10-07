import React from "react";
import { useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillLock, AiFillEye } from "react-icons/ai";
import Header from "./Header";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);
  };

  return (
    <>
      <Header />
      <div className="flex grid grid-cols-2 py-7 px-6 space-x-6">
        <div className="ring-1 ring-bgclr rounded-3xl px-6 py-8 ">
          <div className="text-center bg-bgclr rounded-full mx-20 py-1 text-white text-2xl font-bold">
            <h1>Benefits of Saving Account</h1>
          </div>
          <div>
            <ul className="flex flex-col gap-8 mt-5 px-8">
              <li className="flex">
                <FaHandPointRight className="mt-3 mr-3 text-3xl" />
                <p className="text-xl leading-6">
                  Liquidity. Ore of the benefits of opening a savings account{" "}
                  is that it offers you liquidity
                </p>
              </li>
              <li className="flex">
                <FaHandPointRight className="mt-3 mr-3 text-3xl" />
                <p className="text-xl leading-6">
                  Liquidity. Ore of the benefits of opening a savings account{" "}
                  is that it offers you liquidity
                </p>
              </li>
              <li className="flex">
                <FaHandPointRight className="mt-3 mr-3 text-3xl" />
                <p className="text-xl leading-6">
                  Liquidity. Ore of the benefits of opening a savings account{" "}
                  is that it offers you liquidity
                </p>
              </li>
              <li className="flex">
                <FaHandPointRight className="mt-3 mr-3 text-3xl" />
                <p className="text-xl leading-6">
                  Liquidity. Ore of the benefits of opening a savings account{" "}
                  is that it offers you liquidity
                </p>
              </li>
              <li className="flex">
                <FaHandPointRight className="mt-3 mr-3 text-3xl" />
                <p className="text-xl leading-6">
                  Liquidity. Ore of the benefits of opening a savings account{" "}
                  is that it offers you liquidity
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-bgclr rounded-3xl">
          <div className="flex justify-center items-center bg-white my-14 mx-20 rounded-3xl py-10">
            <form onSubmit={handleSubmit} className="w-full max-w-xs">
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Enter Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className=" w-full border border-gray-300 rounded-md px-3 py-2 pl-10 focus:outline-none focus:border-blue-500 ring-1 ring-bgclr shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // placeholder="Enter Mobile Number"
                  placeholder="Enter Mobile No."

                  required
                />
                <BsFillPersonFill
                  class="absolute -mt-7 ml-4 text-gray-400
                    flex items-center  
                    pointer-events-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Enter Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 pl-10 focus:outline-none focus:border-blue-500 ring-1 ring-bgclr shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                  required
                />
                <AiFillLock
                  class="absolute -mt-7 ml-4 text-gray-400
                    flex items-center  
                    pointer-events-none"
                />

                <AiFillEye
                  class="absolute -mt-7 ml-72 text-gray-400
                    flex items-end  
                    pointer-events-none"
                />

                <div className="text-end">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>
              <div className=" text-center">
                <button
                  type="submit"
                  className="text-center bg-bgclr hover:bg-red-900 text-white font-bold py-2 px-20 rounded-full focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
                <div className="text-xl font-bold pt-7 text-cyan-900">
                  <h1>Become a Member</h1>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;