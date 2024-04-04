import {Routes,Route} from "react-router-dom";
import Pages from "./pages"
import UserDetails from './pages/users/details';
import UsersForm from './pages/users/form/usersForm';
const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Pages.LoginPage/>}/>
      <Route path='/forgotpassword' element={<Pages.ForgotPasswordPage/>}/>
      <Route path='/verifyotp' element={<Pages.VerifyOtp/>}/>
      <Route path='/resetpassword' element={<Pages.ResetPasswordPage/>}/>
      <Route index path='/dashboard' element={<Pages.DashboardPage/>}/>
      <Route path='/manage-users' element={<Pages.ManageUsers/>}/>
      <Route path="/profile" element={<Pages.Profile />} />        
      <Route path="changepassword" element={<Pages.ChangePassword />} />
        <Route path="/manage-users/details" element={<UserDetails />} />
        <Route path="/manage-users/usersform" element={<UsersForm />} />
    </Routes>
  )
}

export default Routing;