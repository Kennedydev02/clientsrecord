import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './components/Dashboard';
import StudentForm from './components/students/StudentForm';
import StudentList from './components/students/StudentList';
import StudentDetails from './components/students/StudentDetails';
import PaymentForm from './components/payments/PaymentForm';
import PaymentList from './components/payments/PaymentList';
import AccommodationForm from './components/accommodation/AccommodationForm';
import AccommodationList from './components/accommodation/AccommodationList';
import CourseList from './components/courses/CourseList';
import CourseProgress from './components/courses/CourseProgress';
import ReportGenerator from './components/reports/ReportGenerator';
import Settings from './components/settings/Settings';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './components/HomePage';
import AboutUs from './components/pages/AboutUs';
import Testimonials from './components/pages/Testimonials';
import ContactUs from './components/pages/ContactUs';
import CaregiverTraining from './components/services/CaregiverTraining';
import NewcomerSupport from './components/services/NewcomerSupport';
import HousingAssistance from './components/services/HousingAssistance';
import DocumentationSupport from './components/services/DocumentationSupport';
import EmploymentServices from './components/services/EmploymentServices';
import EducationSupport from './components/services/EducationSupport';
import Login from './components/Login';
import ContactInfo from './components/layout/ContactInfo';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CssBaseline />
        <Routes>
          {/* Dashboard routes */}
          <Route
            path="/dashboard/*"
            element={
              <DashboardLayout>
                <Routes>
                  <Route index element={<Dashboard />} />
                  
                  {/* Student routes */}
                  <Route path="students" element={<StudentList />} />
                  <Route path="students/new" element={<StudentForm />} />
                  <Route path="students/:id" element={<StudentDetails />} />
                  <Route path="students/edit/:id" element={<StudentForm />} />
                  
                  {/* Course routes */}
                  <Route path="courses" element={<CourseList />} />
                  <Route path="courses/:id" element={<CourseProgress />} />
                  
                  {/* Payment routes */}
                  <Route path="payments" element={<PaymentList />} />
                  <Route path="payments/new" element={<PaymentForm />} />
                  <Route path="payments/edit/:id" element={<PaymentForm />} />
                  
                  {/* Accommodation routes */}
                  <Route path="accommodation" element={<AccommodationList />} />
                  <Route path="accommodation/assign" element={<AccommodationForm />} />
                  <Route path="accommodation/edit/:id" element={<AccommodationForm />} />
                  
                  {/* Reports route */}
                  <Route path="reports" element={<ReportGenerator />} />
                  
                  {/* Settings route */}
                  <Route path="settings" element={<Settings />} />
                </Routes>
              </DashboardLayout>
            }
          />

          {/* Public routes with Navbar and Footer */}
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <Box component="main" sx={{ flexGrow: 1, position: 'relative', zIndex: 0 }}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/services/caregiver-training" element={<CaregiverTraining />} />
                    <Route path="/services/newcomer-support" element={<NewcomerSupport />} />
                    <Route path="/services/housing-assistance" element={<HousingAssistance />} />
                    <Route path="/services/documentation-support" element={<DocumentationSupport />} />
                    <Route path="/services/employment-services" element={<EmploymentServices />} />
                    <Route path="/services/education-support" element={<EducationSupport />} />
                  </Routes>
                </Box>
                <Footer>
                  <ContactInfo>
                    <a href="mailto:info@hudumacenter.com">info@hudumacenter.com</a>
                    <a href="tel:206-460-9022">206-460-9022</a>
                    <address>30821 Pacific Hwy S, Federal Way, WA 98003</address>
                  </ContactInfo>
                </Footer>
              </>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
