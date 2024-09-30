import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Home';
import Register from './Components/Register';
import FeedbackForm from './Components/Feedback';
import ContactUs from './Components/contact';
import Login from './Components/Login';
import Footer from './Components/Footer';
import ALogin from './Components/Admin/Alogin';
import ADashboard from './Components/Admin/Admin';
import AboutUs from './Components/About';
import AddScenario from './Components/AddScenario';
import DeleteScenario from './Components/DeleteScenario';
import UpdateScenario from './Components/UpdateScenario';
import ManageUserPage from './Components/ManageUserPage';
import VideoDecison from './Components/videoplayer';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Feedback" element={<FeedbackForm/>} />
          <Route path="/Contactus" element={<ContactUs/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Footer" element={<Footer/>} />
          <Route path="/ALogin" element={<ALogin/>} />
          <Route path="/ADashboard" element={<ADashboard/>} />
          <Route path="/About" element={<AboutUs/>} />
          <Route path="/AddScenario" element={<AddScenario/>} />
          <Route path="/DeleteScenario" element={<DeleteScenario/>} />
          <Route path="/UpdateScenario" element={<UpdateScenario/>} />
          <Route path="/ManageUserPage" element={<ManageUserPage/>} />
          <Route path="/v1" element={<VideoDecison/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
