import React from 'react';
import {RegisterForm} from "@/app/(public)/register/components/register-form";
import background from "@/assets/background.jpg";

const RegisterPage = () => {
    return (
        <div
            className="flex min-h-svh flex-col items-center justify-center bg-black p-6 md:p-10">
            <div className='fixed blur-md opacity-70 w-full h-full'>
                <img src={background.src} alt="background"
                     className='w-full h-full object-cover'/>
            </div>
            <div className="w-full max-w-sm md:max-w-3xl">
                <RegisterForm/>
            </div>
        </div>
    );
};

export default RegisterPage;
