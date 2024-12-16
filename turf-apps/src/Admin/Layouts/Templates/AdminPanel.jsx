
import Home from "./Home";
import Footer from "./Footer";


// eslint-disable-next-line react/prop-types
const AdminPanel = ({ pages }) => {
  return (
    <>
      <Home />
      <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          {pages}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminPanel;
