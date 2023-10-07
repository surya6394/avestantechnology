import React from 'react';
import { FaHandPointRight } from "react-icons/fa";
import Header from './Header';

function Login() {
  return (
    <>
    <Header />
    <div className="flex grid-cols-2">
      <div>
        <h1>Benefits of Saving Account</h1>
        <div>
          <ul>
            <li>
              <FaHandPointRight/>
              <p>Liquidity. Ore of the benefits of opening a savings account is that it offers you liquidity</p>
            </li>
            <li>
              <FaHandPointRight/>
              <p>Liquidity. Ore of the benefits of opening a savings account is that it offers you liquidity</p>
            </li>
            <li>
              <FaHandPointRight/>
              <p>Liquidity. Ore of the benefits of opening a savings account is that it offers you liquidity</p>
            </li>
            <li>
              <FaHandPointRight/>
              <p>Liquidity. Ore of the benefits of opening a savings account is that it offers you liquidity</p>
            </li>
            <li>
              <FaHandPointRight/>
              <p>Liquidity. Ore of the benefits of opening a savings account is that it offers you liquidity</p>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
    </>
  )
}

export default Login