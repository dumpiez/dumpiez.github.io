import Header from "./Components/Header.tsx";
import Projects from "./Components/Projects.tsx";
import About from "./Components/About.tsx";

function Divider() {
  return (
    <hr className="w-8/9 border-t-3 mx-auto border-neutral-500 my-8 rounded-full opacity-20" />
  );
}

export default function App() {
  return (
    <>
      <Header />
      {/* <hr className="w-8/9 border-t-3 mx-auto border-neutral-500 my-8 rounded-full opacity-20" /> */}
      <Divider />
      <Projects />
      <Divider />
      <About />
    </>
  );
}
