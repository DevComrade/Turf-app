import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Repository } from '../../../../Repositories/Repository';
import Loading from '../../../../Components/Loading';

// Update validation schema field to match form field names
const UserSchema = Yup.object().shape({
  user_name: Yup.string().required('User Name Required'),
  email_id: Yup.string().email('Invalid email').required('Email Required'),
  mobile_number: Yup.string().required('Mobile Number Required'),
  state_name: Yup.string().required('state Name Required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password Required'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation required'),
});

function CreateUser() {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    email_id: '',
    mobile_number: '',
    state_name: '',
    password: '',
    password_confirmation: '',
    description: '',
    status: 'active',
  });

  // Function to handle form submission
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      setLoading(true);
      const response = await Repository.insertUser(values);
      alert(response.message || 'User created successfully!');
      navigate('/admin/administration/user-creation');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        setApiError(error.message || 'An error occurred while creating the user.');
      }
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  // Function to handle form input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (loading) {
    return <Loading />; // Show loading spinner while fetching data
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create User Creation</h2>
      {apiError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {apiError}</span>
        </div>
      )}
      <Formik
        initialValues={formData}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* User Name Input */}
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_name">
                  User Name
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="user_name"
                  placeholder="User Name"
                  onChange={(e) => {
                    handleInputChange(e);
                    setFieldValue('user_name', e.target.value);
                  }}
                />
                <ErrorMessage name="user_name" component="div" className="text-red-500 text-xs italic" />
              </div>

              {/* Email Input */}
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email_id">
                  Email
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email_id"
                  placeholder="Email"
                  onChange={(e) => {
                    handleInputChange(e);
                    setFieldValue('email_id', e.target.value);
                  }}
                />
                <ErrorMessage name="email_id" component="div" className="text-red-500 text-xs italic" />
              </div>
            </div>

            {/* Mobile Number Input */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile_number">
                  Mobile Number
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="mobile_number"
                  placeholder="Mobile Number"
                  onChange={(e) => {
                    handleInputChange(e);
                    setFieldValue('mobile_number', e.target.value);
                  }}
                />
                <ErrorMessage name="mobile_number" component="div" className="text-red-500 text-xs italic" />
              </div>

              {/* State Name Input */}
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state_name">
                  State Name
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="state_name"
                  placeholder="State Name"
                  onChange={(e) => {
                    handleInputChange(e);
                    setFieldValue('state_name', e.target.value);
                  }}
                />
                <ErrorMessage name="state_name" component="div" className="text-red-500 text-xs italic" />
              </div>
            </div>

            {/* Password and Confirm Password Inputs */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => {
                    handleInputChange(e);
                    setFieldValue('password', e.target.value);
                  }}
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password_confirmation">
                  Confirm Password
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="password_confirmation"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    handleInputChange(e);
                    setFieldValue('password_confirmation', e.target.value);
                  }}
                />
                <ErrorMessage name="password_confirmation" component="div" className="text-red-500 text-xs italic" />
              </div>
            </div>

            {/* Description Input */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  as="textarea"
                  name="description"
                  placeholder="Description"
                  onChange={(e) => {
                    handleInputChange(e);
                    setFieldValue('description', e.target.value);
                  }}
                />
                <ErrorMessage name="description" component="div" className="text-red-500 text-xs italic" />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                  Status
                </label>
                <Field
                  as="select"
                  name="status"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => {
                    handleInputChange(e);
                    setFieldValue('status', e.target.value);
                  }}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </Field>
                <ErrorMessage name="status" component="div" className="text-red-500 text-xs italic" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate('/admin/administration/user-creation')}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Back
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isSubmitting}
              >
                Create
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateUser;
