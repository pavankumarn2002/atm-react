import './App.css';
import React from 'react';
import PropsData from './Props/PropsData';
import Api from './UseEffect/Api';
import { Routes, Route } from 'react-router-dom';
import Handling from './Events/Handling';
import NavBar from './NavBar/NavBar';
import StateHook from './UseState/StateHook';
import FormDetails from './Forms/FormDetails';
import ContextDetails from './UseContext/ContextDetails';
import ReducerDetails from './UseReducer/ReducerDetails';
import CustomDetails from './CustomHook/CustomDetails';
import FeatureProject from './NestedRouts/FeatureProject';
import NewProject from './NestedRouts/NewProject';
import NotFound from './NotFound';
import UserData from './DynamicRouts/UserData';
import UserDetails from './DynamicRouts/UserDetails';
import NestedRout from './NestedRouts/NestedRout';
import { AuthProvider } from './Login/auth';
import LogIn from './Login/LogIn';
import LogOut from './Login/LogOut';
import PrivateRout from './Login/PrivateRout';
import Transactions from './AtmProject/Transactions';
import AccountDetails from './AtmProject/AccountDetails';
import CreateAccount from './AtmProject/CreateAccount';
const LazyHandling=React.lazy(()=>import('./Events/Handling'))
const LazyReducerDetails=React.lazy(()=>import('./UseReducer/ReducerDetails'))
const App = () => {
  return (

    <AuthProvider className="">
      <NavBar />
      <div className="container component-container">
        <Routes>
          <Route path="/" element={<PrivateRout><PropsData /></PrivateRout>}></Route>
          <Route path="/handling" element={<React.Suspense fallback="Loading..."><PrivateRout><LazyHandling /></PrivateRout></React.Suspense>}></Route>
          <Route path="/stateHook" element={<PrivateRout><StateHook /></PrivateRout>}></Route>
          <Route path="/form" element={<PrivateRout><FormDetails /></PrivateRout>}></Route>
          <Route path="/useEffect" element={<PrivateRout><Api /></PrivateRout>}></Route>
          <Route path="/useContext" element={<PrivateRout><ContextDetails /></PrivateRout>}></Route>
          <Route path="/useReducer" element={<React.Suspense fallback="Loading..."><PrivateRout><LazyReducerDetails /></PrivateRout></React.Suspense>}></Route>
          <Route path="/customHook" element={<PrivateRout><CustomDetails /></PrivateRout>}></Route>
          
          <Route path="/userData" element={<PrivateRout><UserData/></PrivateRout>}></Route>
          <Route path="/userData/:userId" element={<UserDetails />}></Route>
          
          
          <Route path="/nestedRouting" element={<PrivateRout><NestedRout /></PrivateRout>}>
            <Route index element={<FeatureProject />}></Route>
            <Route path="featureProject" element={<FeatureProject />}></Route>
            <Route path="newProject" element={<NewProject />}></Route>
          </Route>
          <Route path="/atmProject" element={<PrivateRout><Transactions /></PrivateRout>}></Route>
          <Route path="/atmProject/:id" element={<PrivateRout><AccountDetails /></PrivateRout>}></Route>
          <Route path="/createAccount" element={<PrivateRout><CreateAccount /></PrivateRout>}></Route>

          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/logout" element={<LogOut />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}
export default App;
