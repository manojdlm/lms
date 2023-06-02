import SignInComponent  from './componant/student-page/student-sign-in'
import './App.css';
import Studentsignup from './componant/student-page/student-Sign-up'
import Studentrestpassword from './componant/student-page/student-Reset-Password'
import Studententerenewpassword from './componant/student-page/student-enter-newpassword'
import Studentslider from './componant/student-page/std-menu'
import Newclass from './componant/student-page/new-class'
// import Stdmenu from './componant/student-page/std-menu'
import { Route ,Routes } from 'react-router-dom';
import Studentprofile from './componant/student-page/student-profile'
import Studetndashbord from './componant/student-page/student-dashbord'
import Studentfees from './componant/student-page/Student-feec'

function App() {
  return (
    <Routes>
      <Route path='/slider' element={<Studentslider></Studentslider> }/>
      <Route path='/' element={<SignInComponent></SignInComponent>}/>
      <Route path='/sign-up' element={<Studentsignup></Studentsignup>}/>
      <Route path='/restpassword' element={<Studentrestpassword></Studentrestpassword>}/>
      <Route path='/enterenewpassword' element={<Studententerenewpassword></Studententerenewpassword>}/>
      <Route path='/student-dashbord' element={<Studetndashbord></Studetndashbord>}/>
      <Route path='/student-profile' element= { <Studentprofile></Studentprofile>} ></Route>
      <Route path='/student-fees' element ={<Studentfees></Studentfees>}></Route>
    </Routes>
    
    // <div>
    

    //   {/* <Studentrestpassword></Studentrestpassword> */}
    //   {/* <Studententerenewpassword></Studententerenewpassword> */}
    //   {/* {/* <Studentslider></Studentslider> */}
    //   {/* <Newclass></Newclass> */}
    //   {/* <Stdmenu></Stdmenu> */}
      
    
    // </div>
   




  );
}

export default App;
