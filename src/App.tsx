import React from 'react';
import Partnerwithus from './components/partnerwithus/Partnerwithus';
import MenuColumn from './components/menu/MenuColumn'
import BussinessInfo from './components/Forms/BussinessInformationFroms/BussinessInfo';
import OwnerManagerDetails from './components/Forms/OwnerManagerDetailsForm/OwnerManagerDetails';

function App() {
  return (
    <div>
      <Partnerwithus/>
      <div>
        <MenuColumn/>
        <BussinessInfo/>
      </div>
    </div>
  );
}


export default App;
