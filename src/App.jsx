// import { Routes, Route } from "react-router-dom";
// import Sidebar from "./Admin/component/Dashboard/Sidebar";
// import AdminDashboardPage from "./Admin/admin_components/adminDashboardPage";
// import AdminTripPage from "./Admin/admin_components/AdminTripDashboard";
// import AdminClientPage from "./Admin/admin_components/adminClientPage";
// import AdminDocumentPage from "./Admin/admin_components/adminDocumentPage";
// import AdminAircraftPage from "./Admin/admin_components/adminAircraftPage";
// import AdminCrewPage from "./Admin/admin_components/adminCrewPage";
// import BankManagement from "./Admin/admin_components/adminBankDetails";
// import Profile from "./common/Profile";
// import Login from "./common/Login";
// import Signup from "./common/Signup";
// import Contract from "./Admin/admin_components/adminContractPage";
// import { AuthProvider } from './contexts/AuthContext';

// function App() {
//   return (
//     <div className="flex  h-screen">
      
//       <Sidebar />
//       {/* <Profile/> */}
//       <div className="">
//         <Routes>
//           <Route path="/" element={<AdminDashboardPage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/dashboard" element={<AdminDashboardPage />} />
//           <Route path="/client" element={<AdminClientPage />} />
//           <Route path="/crew" element={<AdminCrewPage />} />
//           <Route path="/trip" element={<AdminTripPage />} />
//           <Route path="/contract" element={<Contract />} />
//           <Route path="/profile" element={<Profile />} />

//           <Route path="/document" element={<AdminDocumentPage />} />
//           <Route path="/aircraft" element={<AdminAircraftPage />} />
//           <Route path="/bank" element={<BankManagement />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;


import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Admin/component/Dashboard/Sidebar";
import AdminDashboardPage from "./Admin/admin_components/adminDashboardPage";
import AdminTripPage from "./Admin/admin_components/AdminTripDashboard";
import AdminClientPage from "./Admin/admin_components/adminClientPage";
import AdminDocumentPage from "./Admin/admin_components/adminDocumentPage";
import AdminAircraftPage from "./Admin/admin_components/adminAircraftPage";
import AdminCrewPage from "./Admin/admin_components/adminCrewPage";
import BankManagement from "./Admin/admin_components/adminBankDetails";
import Profile from "./common/Profile";
import Login from "./common/Login";
import Signup from "./common/Signup";
import Contract from "./Admin/admin_components/adminContractPage";
import { AuthProvider, useAuth } from './Context/context';

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { userRole } = useAuth();
  
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

// Layout Component
const AdminLayout = () => {
  const { userRole } = useAuth();
  
  // Don't show sidebar for non-admin routes
  if (window.location.pathname === '/login' || window.location.pathname === '/signup') {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    );
  }

  return (
    <div className="flex h-screen">
      {userRole && <Sidebar />}
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={
            <ProtectedRoute allowedRoles={['admin', 'client', 'crew']}>
              <AdminDashboardPage />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute allowedRoles={['admin', 'client', 'crew']}>
              <AdminDashboardPage />
            </ProtectedRoute>
          } />
          <Route path="/client" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminClientPage />
            </ProtectedRoute>
          } />
          <Route path="/crew" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminCrewPage />
            </ProtectedRoute>
          } />
          <Route path="/trip" element={
            <ProtectedRoute allowedRoles={['admin', 'client', 'crew']}>
              <AdminTripPage />
            </ProtectedRoute>
          } />
          <Route path="/contract" element={
            <ProtectedRoute allowedRoles={['admin', 'client', 'crew']}>
              <Contract />
            </ProtectedRoute>
          } />
          <Route path="/document" element={
            <ProtectedRoute allowedRoles={['admin', 'client', 'crew']}>
              <AdminDocumentPage />
            </ProtectedRoute>
          } />
          <Route path="/aircraft" element={
            <ProtectedRoute allowedRoles={['admin','client']}>
              <AdminAircraftPage />
            </ProtectedRoute>
          } />
          <Route path="/bank" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <BankManagement />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute allowedRoles={['admin', 'client', 'crew']}>
              <Profile />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<AdminLayout />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;