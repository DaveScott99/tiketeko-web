import { Card } from "../../components/card";

export function Home() {
  return (
    <article>
      <h2 className="text-2xl font-bold text-slate-950">Tickets</h2>
      <div
        style={{
          display: "grid",
          gridGap: "30px",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </article>
  );
}
