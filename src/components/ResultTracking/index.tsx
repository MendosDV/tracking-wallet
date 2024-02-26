export default function ResultTracking() {
  let lapins = [];

  for (let number = 0; number < 10; number++) {
    lapins.push(
      <div key={number}>
        <p className="text-3xl text-white">lapin</p>
      </div>
    );
  }

  return (
    <div>
      {lapins}
    </div>
  );
}
