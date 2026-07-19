import Card from "./Card.tsx";

import perfectstart from "../img/perfectstart.jpg";

export default function Projects() {
  return (
    <div
      className="flex justify-start items-center h-screen flex-col"
      id="projects"
    >
      <section className="py-10">
        <h1 className="md:text-4xl text-2xl font-bold text-center">
          cool projects i made!!
        </h1>
        <section className="flex md:flex-row py-5 flex-col">
          <Card
            cardLink="https://github.com/dumpiez/perfect-start"
            cardImage={perfectstart}
            cardName="Perfect Start"
            cardDescription="A perfect start screen for your browser with customizability and freedom!"
          />
          <Card
            cardLink="https://github.com/dumpiez/tachylite"
            cardName="Tachylite"
            cardDescription="A note-taking app inspired by Obsidian!"
          />
        </section>
      </section>
    </div>
  );
}
