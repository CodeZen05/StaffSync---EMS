import { Toaster} from "react-hot-toast"
import { Routes, Route, Navigate} from "react-router-dom"
import LoginLand from "./page/LoginLand"
import Layout from "./page/Layout";
import Dashboard from "./page/Dashboard"
import Empolyee from "./page/Empolyee"
import Attendance from "./page/Attendance"
import PaySlips from "./page/PaySlips"
import Leave from "./page/Leave"
import Settings from "./page/Settings"
import Loginform from "./components/Loginform";



const App = () => {
  return(
   <>
   <Toaster />
      <Routes>
    
        <Route path="/login" element={<LoginLand />} />
        <Route path="/login/admin" element={
          <Loginform role="admin" title="Admin Portal" subtitle="Sign in to manage the Organization" />
        } />
        <Route path="/login/employees" element={
          <Loginform role="employees" title="Employee Portal" subtitle="Sign in to access your account" />
        } />


      <Route element={<Layout/>}>
         <Route path="/dashboard" element={<Dashboard />}/> 
          <Route path="/employee" element={<Empolyee />}/>  
          <Route path="/attendance" element={<Attendance />}/>  
          <Route path="/leave" element={<Leave />}/>  
          <Route path="/payslips" element={<PaySlips />}/>   
          <Route path="/settings" element={<Settings />}/>   
      </Route>
      <Route  path="/print/payslips/:id" element={<printpaySlips/>} />
       <Route path="*" element={<Navigate to="/dashboard" replace/>}/>   
    </Routes>
   </>
  )
}
export default App
