export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-stroke py-2"
    aria-label="Title"
    >
      {children}
    </h1>
  );
}
