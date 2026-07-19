import Header from "./Components/Header.tsx";
import Projects from "./Components/Projects.tsx";

export default function App() {
  return (
    <>
      <Header />
      <hr className="w-8/9 border-t-3 mx-auto border-neutral-500 my-8 rounded-full opacity-20" />
      <Projects />
    </>
  );
}
