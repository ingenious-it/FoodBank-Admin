import './App.css';
import React from 'react';
import { Route,Routes, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from './Login';
import PRoutes from './PackingSection/PRoutes';
import DRoutes from './DeliverySection/DRoutes';
import ARoutes from './AdminSection/ARoutes';
import WRoutes from './warehouse/WRoutes';
import Dashboard from './AdminSection/AdminDashBoard';
import UserCreation from './AdminSection/userCreation';
import VictimDetails from './AdminSection/VictimDetails';
import DataSupplierDetails from './AdminSection/DataSupplierDetails';
import DeliveryPerson from './AdminSection/DeliverypersonDetails';
import ANavBar from './AdminSection/AdminSideNavigation';
import PNavBar from './PackingSection/PackingSideNavigation';



function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      
      <Routes>
      <Route path='/' element={<AdminLogin/>}/>
      </Routes>
      <PRoutes/>
      <DRoutes/>
      <ARoutes/>
      <WRoutes/>



 
      
        
       
      </BrowserRouter>
      
     
    
    </React.Fragment>
  );
}

export default App;
