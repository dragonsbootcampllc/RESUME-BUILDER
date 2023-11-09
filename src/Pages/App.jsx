import PersonalInfoForm from "./Component/PersonalInfoForm";
import Container from "./Component/Container";
import Sociallinks from "./Component/SocialLinks";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import D_Dragons from '../assets/Dragons_brand_1.png';
import EmploymentHistory from "./Component/EmploymentHistory";
import { HiDownload, HiZoomIn, HiZoomOut, HiEye } from 'react-icons/hi';
import { useState } from "react";
import Button1 from "./Component/Button1";
import generatePDF, { Resolution } from 'react-to-pdf';
import { useRef } from 'react';


function App() {
  const [scale, setScale] = useState(0.7);
  const targetRef = useRef();

  // Options of Download the PDF
  const optionsDownload = {
    // // default is `save`
    // method: 'open',
    // // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // // increases the image quality but also the size of the PDF, so be careful
    // // using values higher than 10 when having multiple pages generated, it
    // // might cause the page to crash or hang.
    filename: 'Resume.pdf',
    resolution: Resolution.HIGH,
    // page: {
    //   // margin is in MM, default is Margin.NONE = 0
    //   margin: Margin.SMALL,
    //   // default is 'A4'
    //   format: 'letter',
    //   // default is 'portrait'
    //   orientation: 'landscape',
    // },
    canvas: {
      // default is 'image/jpeg' for better size performance
      // mimeType: 'image/png',
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

  //zoom in function
  const handelZoomIn = () => {
    setScale((scale) => scale + 0.1)
  }
  //zoom out function
  const handelZoomOut = () => {
    if (scale > 0.2) setScale((scale) => scale - 0.1)
  }

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main className="flex relative justify-end py-[2.5rem] mt-4 overflow-hidden h-screen box-border">
        <nav className="w-[320px] fixed left-0 top-[3.5rem] bottom-[2.5rem] bg-primary-900/90 backdrop-blur-md z-50 flex flex-col justify-start overflow-y-scroll text-primary-100">
          <PersonalInfoForm />
          <Sociallinks />
          <EmploymentHistory />
        </nav>
        <img src={D_Dragons} alt="Dragons brand" loading="lazy" className="w-[1200px] fixed left-[calc(320px+40%)] -translate-x-1/2 " />

        {/* CV Container */}
        <Container scale={scale} targetRef={targetRef} />

        {/* Zoom in & Zoom out Buttons */}
        <div className="fixed z-10 right-10 bottom-[5rem] flex gap-1 flex-col">
          <Button1 classes="hover:!bg-primary-800 hover:!opacity-80"
            ClickFunc={handelZoomIn} Icon={HiZoomIn} />
          <Button1 classes="hover:!opacity-80 hover:!bg-red-600" ClickFunc={handelZoomOut} Icon={HiZoomOut} />
        </div>

        {/* Download & View Buttons */}
        <div className="fixed z-10 left-[calc(320px+2rem)] bottom-[5rem] flex gap-1 flex-col">
          <Button1 classes="hover:!bg-primary-800 hover:!opacity-80" ClickFunc={() => generatePDF(targetRef, optionsView)} Icon={HiEye} />
          <Button1 classes="" ClickFunc={() => generatePDF(targetRef, optionsDownload)} Icon={HiDownload} />
        </div>

      </main>
      <Footer />
    </div>
  )
}

export default App;
