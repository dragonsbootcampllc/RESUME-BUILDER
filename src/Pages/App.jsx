import PersonalInfoForm from "./Component/PersonalInfoForm";
import Container from "./Component/Container";
import Sociallinks from "./Component/SocialLinks";
import EmploymentHistory from "./Component/EmploymentHistory";

function App() {

  return (
    <main className="flex relative justify-end">
      <nav className="w-[320px] fixed left-0 top-0 bg-white h-screen z-50 flex flex-col justify-start overflow-y-scroll">
        <PersonalInfoForm />
        <Sociallinks />
        <EmploymentHistory />
      </nav>
      {/* className=" flex justify-center items-center bg-gray-400" */}
      <Container />
    </main>
  )
}

export default App;
