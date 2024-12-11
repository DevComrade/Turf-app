
 import Home from "./Home";
 import Footer from "./Footer";


// eslint-disable-next-line react/prop-types
const AdminPanel = ({pages}) => {
  return (
    <>
    
     <Home/>
     {pages}
    <Footer/> 
 
  
    

    </>
  );
};

export default AdminPanel;
