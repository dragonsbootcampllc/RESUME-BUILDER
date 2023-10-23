import PersonalInfoForm from "./Component/PersonalInfoForm";
// import CVTemplate from "./Component/CVTemplate";
import Container from "./Component/Container";

function App() {

  return (
    <main className="flex relative justify-end">
      <nav className="w-[320px] fixed left-0 top-0 bg-white min-h-screen z-50">
        <PersonalInfoForm />
      </nav>
      {/* className=" flex justify-center items-center bg-gray-400" */}
      <Container />
    </main>
  )
}

export default App;
