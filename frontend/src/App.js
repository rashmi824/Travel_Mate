
import './App.css';
import Homehm from './components/Homehm';
import Bookingform from './components/Bookingform';
import Admin from './components/Admin';
import ViewBooking from './components/ViewBooking';
import Hotel from './components/Hotel';
import ViewHotel from './components/ViewHotel';
import UpdateHotel from './components/UpdateHotel';
import ListProperty from "./components/ListProperty";
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import '../src/css/style.css';
import '../src/css/formstyle.css';
import '../src/css/admin.css';

//real codeTravel mate

function App() {
  return (

    <BrowserRouter>
    <div>
     

   <Routes>
   <Route path="/home" element={<Homehm/>}/>
   <Route path="/book/:accomId" element={<Bookingform/>}/>
   <Route path="/admin" element={<Admin/>}/>
   <Route path="/viewBookAdmin" element={<ViewBooking/>}/>
   <Route path="/hotel" element={<Hotel/>}/>
   <Route path="/viewHotel" element={<ViewHotel/>}/>
   <Route path="/updateHotel/:id" element={<UpdateHotel/>}/>
   <Route path="/properties" element={<ListProperty />} />
  
   </Routes>
    </div>
    </BrowserRouter> 
   
  );
}

export default App;
