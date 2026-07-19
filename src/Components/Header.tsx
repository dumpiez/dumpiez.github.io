export default function Header() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <header className="text-center">
        <h1 className="md:text-4xl font-bold pb-4 sm:text-2xl">
          hi! i am piezzz....
        </h1>
        <p className="md:text-2xl font-medium text-balance text-center sm:text-lg">
          i am a self-taught developer{" "}
          <a
            href="#"
            className="text-blue-300 hover:text-blue-400 no-underline transition-colors"
          >
            (and artist!)
          </a>{" "}
          currently in-the-works{" "}
          <span className="text-yellow-300">
            (i say this because im still very much a beginner)
          </span>
          , mainly focusing on web development, but expect game dev stuff from
          me in the future..
        </p>
      </header>
      <nav className="text-lg pt-4">
        <a href="#projects">[ my projects ]</a>
        {" ● "}
        <a href="#aboutme">[ about me ]</a>
      </nav>
    </div>
  );
}
