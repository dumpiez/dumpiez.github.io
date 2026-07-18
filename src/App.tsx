export default function App() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold pb-4">hi! i am piezzz....</h1>
      <p className="text-2xl font-medium text-balance text-center">
        i am a self-taught developer{" "}
        <a
          href="#"
          className="text-blue-300 hover:text-blue-400 no-underline transition-colors"
        >
          (and artist!)
        </a>{" "}
        currently in-the-works{" "}
        <span className="text-yellow-400">
          (i say this because im still very much a beginner)
        </span>
        , mainly focusing on web development, but expect game dev stuff from me
        in the future..
      </p>
    </div>
  );
}
