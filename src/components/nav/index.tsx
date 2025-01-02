import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <Link className="text-center rounded font-semibold text-xl" to="/">
        TikeTeko
      </Link>
    </nav>
  );
}
