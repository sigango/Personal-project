import React from 'react';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';
import hamburger from '../assets/images/hamburger.svg';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    const handleSignin = () => {
        navigate('/login');
        };
    const handleSignup = () => {
        navigate('/register');
        };
    
  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-4">Order Your Favorite Food</h1>
        <p className="text-xl text-gray-600 mb-8">Fast and easy receive in our store</p>
        <div className="flex flex-row">
            <button
            onClick={handleSignin}
            className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-primary active:bg-primary hover:bg-primary/70"
            >
            Sign In
        </button>
        <button
            onClick={handleSignup}
            className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-primary active:bg-primary hover:bg-primary/70"
            >
            Sign Up
        </button>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <img src={hamburger} alt="Hamburger" className="object-contain max-h-full" />
      </div>
    </div>
  );
};

export default LandingPage;