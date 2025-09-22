import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import React, { Suspense } from 'react';
import Loader from "./components/Loader";
const NavBar = React.lazy(()=>import("./components/Navbar"))
const Footer = React.lazy(()=>import('./components/Footer'))
const FrontPage = React.lazy(() => import('./components/FrontPage'));
const Registration = React.lazy(() => import('./components/Registration'));
const Committee = React.lazy(() => import('./components/Committee'));
const Download = React.lazy(() => import('./components/Download'));
const RegistrationForm = React.lazy(() => import('./components/RegistrationForm'));
const SignInForm = React.lazy(() => import('./components/SignInForm'));
const AboutUs = React.lazy(() => import('./components/AboutUs'));
const CallForPaper = React.lazy(() => import('./components/CallForPaper'));
const PrivacyPolicy = React.lazy(()=> import("../src/components/Policy"))


function App() {
  const location = useLocation(); // Get the current location

  // Hide Navbar if the path is '/create-account'
  const hideNavbar = location.pathname === '/create-account';
  // const hideNavbar2 = location.pathname === '/login';

  return (
    <>
      <Suspense fallback={<Loader/>}>
      {!hideNavbar && <NavBar />} {/* Conditionally render Navbar */}
      {/* {!hideNavbar2 && <Navbar />} */}
      <Routes>
       <Route path="/" element={<FrontPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/call-for-paper" element={<CallForPaper/>} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/download" element={<Download />} />
        <Route path="/create-account" element={<RegistrationForm />} />
        <Route path="/login" element={<SignInForm />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/policy" element={<PrivacyPolicy/>} />
        
        <Route path="/loader" element={<Loader/>} />

        </Routes>
        <Footer />
        </Suspense>  
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

