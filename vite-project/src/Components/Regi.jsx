import React, { useState } from 'react';

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Regi = () => {

  const [user,setUser]= useState({
    Name:"",
    Lastname:"",
    emailId:"",
    password:"",
    phone:"",

  })

  const [translate, setTranslate] = useState(false);
  const [form, setForm] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignInClick = () => {
    setTranslate(!translate);

    setTimeout(() => {
      setForm(!form);
    }, 250);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className='py-2 px-4 bg-teal-500 text-white font-bold rounded-lg mt-10 ml-10 absolute top-[45%] left-[45%]'
      >
        Open Modal
      </button>

      {isModalOpen && (
        <div className='fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white w-full min-h-[40%] md:min-h-[80%] h-max max-w-[60%] rounded-md shadow-md flex relative overflow-hidden'>
            <div
              className={`flex flex-col justify-center items-center w-[50%] transition-transform duration-700 ${translate ? 'transform translate-x-full' : ''}`}
            >
              {form ? (
                <form action='' className='flex flex-col justify-center items-center mx-10 my-10'>
                  <h1 className='font-bold text-4xl mb-6'>Create Account</h1>
                  <div className='flex gap-2 mb-4'>
                    <Link to='https://www.facebook.com/profile.php?id=575493372486088&_rdr' target='_blank' className='shadow-md border-2 py-2 px-4 h-8 md:h-10 rounded-lg mr-3 border-gray-100 hover:bg-gray-100 text-xl text-blue-600'><FaFacebook /></Link>
                    <Link to='https://www.instagram.com/ecs.nits/' target='_blank' className='shadow-md border-2 py-2 px-4 h-8 md:h-10 rounded-lg mr-3 border-gray-100 hover:bg-gray-100 text-xl text-pink-600'><FaInstagram /></Link>
                    <Link to='https://www.linkedin.com/company/electronics-and-communication-society-nit-silchar/mycompany/' target='_blank' className='shadow-md border-2 py-2 px-4 h-8 md:h-10 rounded-lg mr-3 border-gray-100 hover:bg-gray-100 text-xl text-blue-400'><FaLinkedin /></Link>
                  </div>
                  <span>Register to be a part of ECS</span>
                  <input type='text' placeholder='Your Name' name='Name' required className='outline-gray-300 px-4 py-2 my-2 w-full max-w-[90%] rounded-md placeholder-gray-400 bg-gray-100'></input>
                  <input type='email' placeholder='Enter your institute Email' name='email' required className='outline-gray-300 px-4 py-2 border my-2 w-full max-w-[90%] rounded-md placeholder-gray-400 bg-gray-100 text-gray-600'></input>
                  <input type='text' placeholder='Scholar ID' required name='scholarid' className='outline-gray-300 px-4 py-2 border my-2 w-full max-w-[90%] rounded-md placeholder-gray-400 bg-gray-100 text-gray-600'></input>
                  <input type='text' placeholder='Set Password' required name='password' className='outline-gray-300 px-4 py-2 border my-2 w-full max-w-[90%] rounded-md placeholder-gray-400 bg-gray-100 text-gray-600'></input>
                  <input type='password' placeholder='Re-Enter Password' name='reenterpass' required className='outline-gray-300 px-4 py-2 border my-2 w-full max-w-[90%] rounded-md placeholder-gray-400 bg-gray-100 text-gray-600'></input>
                  <button className='rounded-xl border-1 bg-indigo-600 px-4 py-2 text-white font-bold text-base gap-1 uppercase transition-transform duration-200 mt-6'>Sign Up</button>
                </form>
              ) : (
                <form action='' className='flex flex-col justify-center items-center mx-10 my-10'>
                  <h1 className='font-bold text-4xl mb-6'>Sign In</h1>
                  <div className='flex gap-2 mb-4'>
                    <Link to='https://www.facebook.com/profile.php?id=575493372486088&_rdr' target='_blank' className='shadow-md border-2 py-2 px-4 h-8 md:h-10 rounded-lg mr-3 border-gray-100 hover:bg-gray-100 text-xl text-blue-600'><FaFacebook /></Link>
                    <Link to='https://www.instagram.com/ecs.nits/' target='_blank' className='shadow-md border-2 py-2 px-4 h-8 md:h-10 rounded-lg mr-3 border-gray-100 hover:bg-gray-100 text-xl text-pink-600'><FaInstagram /></Link>
                    <Link to='https://www.linkedin.com/company/electronics-and-communication-society-nit-silchar/mycompany/' target='_blank' className='shadow-md border-2 py-2 px-4 h-8 md:h-10 rounded-lg mr-3 border-gray-100 hover:bg-gray-100 text-xl text-blue-400'><FaLinkedin /></Link>
                  </div>
                  <input type='email' placeholder='Institute Email' required className='outline-gray-300 px-4 py-2 border my-2 w-full max-w-[90%] rounded-md placeholder-gray-400 bg-gray-100 text-gray-600'></input>
                  <input type='text' placeholder='Scholar ID' required className='outline-gray-300 px-4 py-2 border my-2 w-full max-w-[90%] rounded-md placeholder-gray-400 bg-gray-100 text-gray-600'></input>
                  <input type='text' placeholder='Enter Password' required className='outline-gray-300 px-4 py-2 border my-2 w-full max-w-[90%] rounded-md placeholder-gray-400 bg-gray-100 text-gray-600'></input>
                  <button className='rounded-xl border-1 bg-indigo-600 px-4 py-2 text-white font-bold text-base gap-1 uppercase transition-transform duration-200 mt-6'>Sign In</button>
                </form>
              )}
            </div>
            <div className={`w-[50%] text-white overflow-hidden transition-transform duration-1000 ${translate ? 'transform -translate-x-full rounded-l-md bg-gradient-to-r from-blue-800 to-fuchsia-700' : 'rounded-r-md bg-gradient-to-r to-fuchsia-700 from-blue-800'}`}>
              {form ? (
                <div className={`flex flex-col justify-center items-center h-[100%] transition-transform duration-700 ${translate ? 'transform translate-x-full' : 'transform translate-x-0'}`}>
                  <h1 className='text-3xl font-bold my-4'>Welcome Back!</h1>
                  <p className='px-10 mb-6 text-center'>To keep connected with us please login with your personal info.</p>
                  <button onClick={handleSignInClick}
                    className='py-2 px-4 uppercase transition-transform duration-300 border-2 rounded-xl border-white font-bold'>Sign In</button>
                </div>) : (
                <div className={`flex flex-col justify-center items-center h-[100%] transition-transform duration-700 ${translate ? 'transform -translate-x-0' : 'transform -translate-x-full'}`}>
                  <h1 className='text-3xl font-bold my-4'>Hello!</h1>
                  <p className='px-10 mb-6 text-center'>Enter your personal details and start your journey with ECS</p>
                  <button onClick={handleSignInClick}
                    className='py-2 px-4 uppercase transition-transform duration-300 border-2 rounded-xl border-white font-bold'>Sign Up</button>
                </div>
              )}

            </div>
            <button
              onClick={handleCloseModal}
              className='absolute top-2 right-4 text-black font-bold text-2xl'>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Regi;
