import Card from "./Card.tsx";

export default function Projects() {
  return (
    <div className="flex justify-start items-center h-screen flex-col">
      <section className="py-10">
        <h1 className="md:text-4xl sm:text-2xl font-bold text-center">
          cool projects i made!!
        </h1>
        <section className="flex flex-row py-10">
          <Card
            cardLink="https://github.com/dumpiez/perfect-start"
            cardImage="/img/perfectstart.jpg"
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
