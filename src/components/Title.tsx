export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-center">
      {children}
    </h1>
  );
}
