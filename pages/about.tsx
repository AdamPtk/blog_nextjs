import React from 'react';
import { useForm } from 'react-hook-form';
import Layout from 'components/Layout';
import Head from 'next/head';

export default function About() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-sm bg-white rounded shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Create your account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: true })}
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="surname" className="block text-gray-700 font-semibold mb-2">
                Surname
              </label>
              <input
                type="text"
                id="surname"
                {...register('surname', { required: true })}
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.surname && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Please enter a valid email address</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register('password', { required: true, minLength: 6 })}
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  Password must be at least 6 characters long
                </span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register('confirmPassword', {
                  required: true,
                  validate: (value) => value === watch('password')
                })}
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">Passwords do not match</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="birthdate" className="block text-gray-700 font-semibold mb-2">
                Birth Date
              </label>
              <input
                type="date"
                id="birthdate"
                {...register('birthdate', { required: true })}
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.birthdate && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                {...register('phoneNumber', { required: true, pattern: /^\d{10}$/ })}
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.phoneNumber && (
                <span className="text-red-500 text-sm">Please enter a 10-digit phone number</span>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
