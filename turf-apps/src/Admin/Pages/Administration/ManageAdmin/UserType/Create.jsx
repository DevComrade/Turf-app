

export default function create() {
  return (

    <main className=" flex items-center justify-center bg-gray-100 p-4">
    <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
    <form className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {[
          { id: 'floating_email', label: 'Email address', type: 'email', required: true },
          { id: 'floating_password', label: 'Password', type: 'password', required: true },
          { id: 'floating_repeat_password', label: 'Confirm password', type: 'password', required: true },
          { id: 'floating_first_name', label: 'First name', type: 'text', required: true },
          { id: 'floating_last_name', label: 'Last name', type: 'text', required: true },
          { id: 'floating_address1', label: 'Address 1', type: 'text', required: true, colSpan: 'full' },
          { id: 'floating_address2', label: 'Address 2 (optional)', type: 'text', colSpan: 'full' },
          { id: 'floating_state', label: 'State', type: 'text', required: true },
          { id: 'floating_zipcode', label: 'Zip Code', type: 'text', required: true },
          { id: 'floating_phone', label: 'Phone number (123-456-7890)', type: 'tel', pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}', required: true },
          { id: 'floating_company', label: 'Company (Ex. Google)', type: 'text', required: true },
        ].map((field, index) => (
          <div key={index} className={`relative z-0 w-full mb-5 group ${field.colSpan === 'full' ? 'col-span-full' : ''}`}>
            <input
              type={field.type}
              name={field.id}
              id={field.id}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required={field.required}
              pattern={field.pattern}
            />
            <label
              htmlFor={field.id}
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {field.label}
            </label>
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
    </div>
    </main>
  );
}
