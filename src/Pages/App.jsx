import PersonalInfoForm from "./Component/PersonalInfoForm";
import Container from "./Component/Container";
import Sociallinks from "./Component/SocialLinks";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import D_Dragons from '../assets/Dragons_brand_1.png';
import EmploymentHistory from "./Component/EmploymentHistory";
import { HiDownload, HiArrowLeft, HiArrowRight, HiEye } from 'react-icons/hi';
import { useState } from "react";
import Button1 from "./Component/Button1";
import generatePDF, { Resolution } from 'react-to-pdf';
import { useRef } from 'react';


function App() {
  const [isSideBarActive, setIsSideBarActive] = useState(true);
  const targetRef = useRef();

  const handleSideBarDisplay = () => {
    setIsSideBarActive(!isSideBarActive)
  }

  // Options of Download the PDF
  const optionsDownload = {
    // // default is `save`
    // method: 'open',
    // // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // // increases the image quality but also the size of the PDF, so be careful
    // // using values higher than 10 when having multiple pages generated, it
    // // might cause the page to crash or hang.
    filename: 'Resume.pdf',
    resolution: Resolution.LOW,
  
    canvas: {
      // default is 'image/jpeg' 
      qualityRatio: 1
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break, 
    // so use with caution.
    overrides: {
      // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
      pdf: {
        compress: true
      },
      // see https://html2canvas.hertzen.com/configuration for more options
      canvas: {
        useCORS: true,
        scale: 10
      }
    },
  };

  // Options of View the PDF
  const optionsView = {
    // default is `save`
    method: 'open',
    ...optionsDownload
  };

  return (
    <div className="relative scroll-smooth overflow-auto  bg-black/80">
      <Navbar />
      <main className="flex relative overflow-auto justify-end py-[2.5rem] mt-4  h-screen box-border">
        <nav className={`w-full max-w-[320px] scroll-auto scrollbar fixed left-0 ${(isSideBarActive?'-translate-x-full':'translate-x-0')} top-[3.5rem] bottom-[2.5rem] bg-primary-900/90 transition-all backdrop-blur-md z-50 flex flex-col justify-start text-primary-100`}>
        
          <PersonalInfoForm />
          <Sociallinks />
          <EmploymentHistory />
          <button className="flex items-center justify-center box-border pr-1 w-10 absolute top-12 right-0 translate-x-full aspect-square bg-primary-900/90 backdrop-blur-md  rounded-r-xl" onClick={handleSideBarDisplay}>
            {(isSideBarActive?<HiArrowRight />:<HiArrowLeft />)}
          </button>
        </nav>
        <img src={D_Dragons} alt="Dragons brand" loading="lazy" className="w-[1200px] fixed left-[calc(320px+40%)] -translate-x-1/2 " />

        {/* CV Container */}
        <Container targetRef={targetRef} />

      </main>
      <div className={`fixed z-10 ${isSideBarActive?'left-[2rem]':'left-[calc(320px+2rem)]'} transition-all bg-gray-500/20 hover:bg-gray-900  p-2 rounded-2xl bottom-[5rem] flex gap-1 flex-col`}>
          <Button1 classes="hover:!bg-primary-800 hover:!opacity-80" ClickFunc={() => generatePDF(targetRef, optionsView)} Icon={HiEye} />
          <Button1 classes="" ClickFunc={() => generatePDF(targetRef, optionsDownload)} Icon={HiDownload} />
        </div>
      <Footer />
    </div>
  )
}

export default App;
