export default function About() {
  return (
    <div
      className="flex justify-center items-center h-screen flex-col"
      id="aboutme"
    >
      <h1 className="text-2xl md:text-4xl font-bold mt-10">about me :o</h1>
      <section className="text-center text-pretty max-w-100 md:max-w-5xl">
        <p className="text-lg md:text-2xl mt-5">
          hi! i am{" "}
          <a href="https://github.com/dumpiez/" className="text-blue-300">
            dumpiez
          </a>
          , known as <span className="text-yellow-400">piez</span> or{" "}
          <span className="text-purple-500">plenary</span>!
        </p>
        <p className="text-lg md:text-2xl">
          i am a self taught <span className="text-green-500">developer</span>{" "}
          and <span className="text-green-500">artist</span>, and currently a
          student in Indonesia!
        </p>
        <p className="text-lg md:text-2xl">
          i started out coding from a random wave of boredom in 2018 which led
          me to
          {/* </p> */}
          {/* <p className="text-lg md:text-2xl"> */} download a "learn how to
          code" app, and from there i started my programming journey :p
        </p>
        <p className="text-lg md:text-2xl">
          i am currently learning <span className="text-blue-600">react</span>{" "}
          and <span className="text-blue-600">electron</span>, to develop{" "}
          <a
            href="https://github.com/dumpiez/tachylite"
            className="text-blue-400"
          >
            tachylite!
          </a>
        </p>
        <p className="text-lg md:text-2xl">
          i like linux, hardware and music!!
        </p>
      </section>
    </div>
  );
}
