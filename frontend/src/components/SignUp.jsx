import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import TextInput from './TextInput'
import CustomButton from "./CustomButton";

const SignUp = ({open, setOpen}) => {

    const dispatch = useDispatch()
    const location = useLocation()

    const [isRegister, setIsRegister] = useState(false)
    const [accountType, setAccountType] = useState("seeker")

    const [errMsg, setErrMsg] = useState("");

    const {
        register,
        handleSubmit,
        getValues,
        watch,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    let from = location.state?.from?.pathname || "/";

    const closeModel = () => setOpen(false);

    const onSubmit = () => {};


  return (
    <div>
        <Transition appear show={open || false}>
            <Dialog as='div' className='relative z-10' onClose={closeModel}>
                
                <Transition.Child as={Fragment} 
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    >
                        <div className="fixed inset-0 bg-lightWhite-100 bg-opacity-25" />
                    </Transition.Child>
                
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">

                        <Transition.Child as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='flex flex-col items-center w-full max-w-md transform overflow-hidden 
                            rounded-2xl bg-bdDarkGray p-6 text-left align-middle shadow-xl transition-all'>
                                
                                {/* heading */}
                                <Dialog.Title as='h3'
                                className='text-xl pb-8 font-semibold lwading-6 text-lightWhite-100'
                                >
                                    {isRegister ? 'Create an account' : "Account sign in"}
                                </Dialog.Title>

                                <div className="w-full flex items-center gap-2 justify-center py-8">
                                    {/* set button to user */}
                                    <button 
                                    className={`flex justify-center w-full px-12 py-2 rounded text-sm outline-none 
                                        ${
                                            accountType === 'seeker' ? 'bg-brightBlue-100 text-lightWhite-100' 
                                            : 'bg-lightWhite-100 text-bdDarkGray'
                                        }`}
                                        onClick={() => setAccountType('seeker')}
                                    >
                                        User account
                                    </button>
                                    {/* set button to company */}
                                    <button 
                                    className={`flex justify-center w-full px-12 py-2 rounded text-sm outline-none 
                                        ${
                                            accountType !== 'seeker' ? 'bg-brightBlue-100 text-lightWhite-100' 
                                            : 'bg-lightWhite-100 text-bdDarkGray'
                                        }`}
                                        onClick={() => setAccountType('company')}
                                    >
                                        Company account
                                    </button>
                                </div>

                                <form className='w-full flex flex-col gap-5' onSubmit={handleSubmit (onSubmit)}>
                                    <TextInput name='email' label='Email' address placeholder='email@example.com' type='email'
                                    register={register("email", {
                                        required: "Email address is required!",
                                    })} 
                                    error={errors.email ? errors.email.message : ""}
                                    />

                                    {isRegister && (
                                        <div className='w-full flex gap-1 md:gap-2'>
                                            <div
                                            className={`${
                                                accountType === "seeker" ? "w-1/2" : "w-full"
                                            }`}
                                            >
                                            <TextInput
                                                name={accountType === "seeker" ? "firstName" : "name"}
                                                label={accountType === "seeker" ? "First Name" : "Company Name"}
                                                placeholder={accountType === "seeker" ? "eg. James" : "Comapy name"}
                                                type='text'
                                                register={register(accountType === "seeker" ? "firstName" : "name",
                                                {
                                                    required:
                                                    accountType === "seeker"
                                                        ? "First Name is required"
                                                        : "Company Name is required",
                                                }
                                                )}
                                                error={accountType === "seeker" ? errors.firstName ? errors.firstName?.message : "" 
                                                    : errors.name ? errors.name?.message : ""}
                                            />
                                            </div>

                                            {accountType === "seeker" && isRegister && (
                                            <div className='w-1/2'>
                                                <TextInput
                                                    name='lastName'
                                                    label='Last Name'
                                                    placeholder='Wagonner'
                                                    type='text'
                                                    register={register("lastName", {
                                                        required: "Last Name is required",
                                                    })}
                                                error={errors.lastName ? errors.lastName?.message : ""}
                                                />
                                            </div>
                                            )}
                                        </div>
                                    )}

                                    <div className='w-full flex gap-1 md:gap-2'>
                                        <div className={`${isRegister ? "w-1/2" : "w-full"}`}>
                                            <TextInput
                                                name='password'
                                                label='Password'
                                                placeholder='Password'
                                                type='password'
                                                register={register("password", {
                                                    required: "Password is required!",
                                                })}
                                                error={errors.password ? errors.password?.message : ""}
                                            />
                                        </div>

                                        {isRegister && (
                                            <div className='w-1/2'>
                                                <TextInput
                                                    label='Confirm Password'
                                                    placeholder='Password'
                                                    type='password'
                                                    register={register("cPassword", {
                                                        validate: (value) => {const { password } = getValues();

                                                            if (password != value) {
                                                                return "Passwords do no match";
                                                            }
                                                        },
                                                    })}
                                                    error={errors.cPassword && errors.cPassword.type === "validate" ? errors.cPassword?.message : ""}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {errMsg && (
                                        <span role='alert' className='text-sm text-red-500 mt-0.5'>
                                            {errMsg}
                                        </span>
                                    )}

                                    <div className='mt-2'>
                                        <CustomButton
                                            type='submit'
                                            containerStyles={`inline-flex justify-center rounded-md bg-brightBlue-100 px-8 py-2 text-sm font-medium text-white outline-none hover:bg-brightBlue-300`}
                                            title={isRegister ? "Create Account" : "Login Account"}
                                        />
                                    </div>
                                </form>

                                <div className='mt-4'>
                                    <p className='text-sm text-gray-700'>
                                    {isRegister ? "Already has an account?" : "Do not have an account"}

                                    <span
                                        className='text-sm text-blue-600 ml-2 hover:text-blue-700 hover:font-semibold cursor-pointer'
                                        onClick={() => setIsRegister((prev) => !prev)}
                                    >
                                        {isRegister ? "Login" : "Create Account"}
                                    </span>
                                    </p>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>

                    </div>
                </div>

            </Dialog>
        </Transition>
    </div>
  )
}

export default SignUp