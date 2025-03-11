import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Repository } from '../../../../Repositories/Repository';
import Loading from '../../../../Components/Loading';

const UserSchema = Yup.object().shape({
  user_name: Yup.string().required('User Name Required'),
  email_id: Yup.string().email('Invalid email').required('Email Required'),
  mobile_number: Yup.string().required('Mobile Number Required'),
  state_name: Yup.string().required('State Name Required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password Required'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation required'),
});

function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    user_id: id,
    user_name: '',
    email_id: '',
    mobile_number: '',
    state_name: '',
    password: '',
    password_confirmation: '',
    description: '',
    status: 'active',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await Repository.editUser({ user_id: id });
        const user = response.user_creation_edit[0];
        setFormData({
          user_id: user.user_id,
          user_name: user.user_name,
          email_id: user.email_id,
          mobile_number: user.mobile_number,
          state_name: user.state_name,
          password: '',
          password_confirmation: '',
          description: user.description,
          status: user.status,
        });
      } catch (error) {
        setApiError(error.message || 'Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      setLoading(true);
      const response = await Repository.updateUser(values);
      alert(response.message);
      navigate('/admin/administration/user-creation');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        setApiError(error.message || 'An error occurred while updating the user.');
      }
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Edit User Creation</h2>
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
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="hidden"
              name="user_id"
              placeholder="User Id"
            />

            {/* User Type & Email (Row 1) */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_name">
                  User Name
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="user_name"
                  placeholder="User Name"
                />
                <ErrorMessage name="user_name" component="div" className="text-red-500 text-xs italic" />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email_id">
                  Email
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email_id"
                  placeholder="Email"
                />
                <ErrorMessage name="email_id" component="div" className="text-red-500 text-xs italic" />
              </div>
            </div>

            {/* Mobile Number & User Name (Row 2) */}
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
                />
                <ErrorMessage name="mobile_number" component="div" className="text-red-500 text-xs italic" />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state_name">
                  State Name
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="state_name"
                  placeholder="State Name"
                />
                <ErrorMessage name="state_name" component="div" className="text-red-500 text-xs italic" />
              </div>
            </div>

            {/* Password & Confirm Password (Row 3) */}
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
                />
                <ErrorMessage name="password_confirmation" component="div" className="text-red-500 text-xs italic" />
              </div>
            </div>

            {/* Description & Status (Row 4) */}
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
                {isSubmitting ? 'Updating...' : 'Update'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EditUser;
