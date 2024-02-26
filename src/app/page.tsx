import Title from "../components/Title";
import InputAddress from "../components/InputAddress";

export default function Home() {
  const title = 'Crypto Tracking and Investigation Platform';
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-transparent">
      <video
        src="/video.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        autoPlay
        muted
        loop
        typeof="video/mp4"
      >
      </video>
      <div className="z-10 w-full h-screen flex flex-col items-center justify-center gap-10">
        <div className="max-w-lg xl:max-w-2xl mx-auto">
          <Title>
            {title}
          </Title>
        </div>
        <InputAddress />
      </div>
    </main>
  );
}
