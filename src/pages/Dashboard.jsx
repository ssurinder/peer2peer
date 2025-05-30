



import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const Dashboard = () => {  
  const navigate = useNavigate();  
  const handleLogout = async () => {
    console.log('clicked')

    localStorage.removeItem('auth_token'); 
    localStorage.removeItem('isAuthenticated'); 
    toast.success('Logged out successfully!');
    setTimeout(() => {
      navigate("/login");
    }, 2000);
    
  } 
  return (<div>
    <ToastContainer position="top-right" autoClose={3000} />
              <button onClick={handleLogout} type="button">LOGOUT</button>
              <h2>Protected Dashboard Page</h2>
          </div>);
}
  



  export default Dashboard;