import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Herosection from "./Component/Herosection";
import Enquiry from './Component/Enquiry';
import Mobile from './Component/Mobile'
import Choose from "./Component/Choose";
import Form from "./Component/Form";
import Owner from "./Component/Owner"
import News from "./Component/News";
import Placement from "./Component/Placement";
import Footer from "./Component/Footer";
import Fixedicon from "./Component/Fixedicon";
function App() {
  return (
    <>
      <div>
        <Header/>
        <Herosection/>
        <Enquiry/>
        <Mobile/>
        <Choose/>
        <Form/>
        <Owner/>
        <News/>
        <Placement/>
        <Fixedicon/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
