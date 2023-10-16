// import PersonalInfoForm from './Pages/Component/PersonalInfoForm';
// import SocialLinks from './Pages/Component/SocialLinks';
// import EmploymentHistory from './Pages/Component/EmploymentHistory';
// import CVTemplate from './Pages/Component/CVTemplate';
// import Container from './Pages/Component/Container';
import { useEffect } from "react";
import styles from "./App.module.css";

function App() {

  var input = 
  [
    'ahmed',
    "Ali",
    "hoss",
    "etc..."
  ]
  useEffect(() => {
    for (let index = 0; index < 4; index++) {
      window.localStorage.setItem(`input[${index}]`, input[index]);
      console.log(window.localStorage.getItem(`input[${index}]`));
    }
  }, []);


  return (
    <>
      {/* <PersonalInfoForm /> */}
      {/* <SocialLinks /> */}
      {/* <EmploymentHistory /> */}
      {/* <CVTemplate /> */}
      {/* <Container /> */}
      <h1 className={`${styles.s} ${styles.h}`}>Test</h1>
    </>
  )
}

export default App;
