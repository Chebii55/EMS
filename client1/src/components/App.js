import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import SignUp from "./Signup";
import UserProfile from "./UserProfile";
import DashboardPersonalInfo from "./DashboardPersonalInfo";
import Layout from "./Layout";
import EditProfile from "./EditProfile";
import Payroll from "./Payroll";


function App() {
  return (
    <div className="App"> 
      <Router> 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Layout />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/payroll" element={<Payroll />} />
        </Routes>
      </Router>
    </div> 
  );
}

export default App;