import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="flex  h-screen">
      
      <Sidebar />
      {/* <Profile/> */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<AdminDashboardPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<AdminDashboardPage />} />
          <Route path="/client" element={<AdminClientPage />} />
          <Route path="/crew" element={<AdminCrewPage />} />
          <Route path="/trip" element={<AdminTripPage />} />
          {/* <Route path="/contract" element={<AdminTripPage />} /> */}
          <Route path="/profile" element={<Profile />} />

          <Route path="/document" element={<AdminDocumentPage />} />
          <Route path="/aircraft" element={<AdminAircraftPage />} />
          <Route path="/bank" element={<BankManagement />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
