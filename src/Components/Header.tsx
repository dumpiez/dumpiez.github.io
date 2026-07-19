export default function Header() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <header className="text-center max-w-100 md:max-w-7xl">
        <h1 className="md:text-4xl font-bold pb-4 text-2xl">
          hi! i am piezzz....
        </h1>
        <p className="md:text-2xl font-medium text-balance text-center text-md">
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
      <nav className="md:text-lg text-md pt-4">
        <a
          href="#projects"
          className="text-neutral-300 hover:text-neutral-100 transition-colors"
        >
          [ my projects ]
        </a>
        {" ● "}
        <a
          className="text-neutral-300 hover:text-neutral-100 transition-colors"
          href="#aboutme"
        >
          [ about me ]
        </a>
      </nav>
    </div>
  );
}
