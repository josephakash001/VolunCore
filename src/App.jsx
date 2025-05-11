import { useState } from 'react'
// import reactLogo from './react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Pages/LoginForm";
import SignUpForm from "./Pages/SignUpForm";
import LoginNavbar from './Components/VolunLoginNavBar';
import MainLayout from './Components/MainLayout';
import Home from './Pages/home';
import Landing from './Pages/LandingPage';
import ActivitiesList from './Pages/ActivitiesList';
import ActivitiesDetail from './Pages/ActivitiesDetail';
import OrganizationList from "./Pages/OrganizationList";
import VolunteerDashboard from './Pages/VolunDashboard';
import VolunMessagePage from './Pages/VolunMessagePage';
import VolunNotificationPage from './Pages/VolunNotification';
import VolunReviewPage from './Pages/VolunReviewPage';
import VolunSettingsPage from './Pages/VolunSettingsPage';
import VolunProfile from './Pages/VolunProfile';
import OrganizationDashboard from './Pages/OrgDashboard';
import ManageActivities from './Pages/OrgManageActivity';
import ManageVolunteers from './Pages/OrgVolunteers';
import OrgMessagePage from './Pages/OrgMessagePage';
import OrgNotificationPage from './Pages/OrgNotification';
import OrgFeedbackPage from './Pages/OrgFeedbackPage';
import OrgSettingsPage from './Pages/OrgSettingsPage';
import OrgActivityForm from './Pages/OrgActivityForm';
import { useEffect } from "react";
import ActivityView from './Pages/OrgActivityView';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import ResetPasswordPage from './Pages/ResetPasswordPage';





const App = () =>{
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
  
    <Router>
      <Routes>
     
      <Route path="/landing" element={<Landing />} />
      <Route path="/" element={<Home />} />
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/activities" element={<ActivitiesList/>} />
        <Route path="/activities/:id" element={<ActivitiesDetail />} />
        <Route path="/organizations" element={<OrganizationList />} />
        <Route path="/volundashboard" element={<VolunteerDashboard />} />
        <Route path="/volunmessage" element={<VolunMessagePage/>}/>
        <Route path="/volunnotification" element={<VolunNotificationPage/>}/>
        <Route path="/volunfeedback" element={<VolunReviewPage/>}/>
        <Route path="/volunsettings" element={<VolunSettingsPage/>}/>
        <Route path="/volunprofile" element={<VolunProfile/>}/>
        <Route path="/orgdashboard" element={<OrganizationDashboard/>}/>
        <Route path="/manageactivities" element={<ManageActivities/>}/>
        <Route path="/managevolunteers" element={<ManageVolunteers/>}/>
        <Route path="/orgmessage" element={<OrgMessagePage/>}/>
        <Route path="/manageactivities/orgactivityform" element={<OrgActivityForm/>}/>
        <Route path="/orgnotification" element={<OrgNotificationPage/>}/>
        <Route path="/orgfeedback" element={<OrgFeedbackPage/>}/>
        <Route path="/orgsetting" element={<OrgSettingsPage/>}/>
        <Route path="/orgactivity/:id" element={<ActivityView/>}/>




      </Routes>
 
    </Router>

  );
}

export default App
