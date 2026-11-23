import { NavLink } from "react-router";

const getLinkClass = ({ isActive }) =>
  [
    "rounded-lg px-4 py-2 text-sm font-semibold transition",
    isActive
      ? "bg-sky-100 text-sky-900"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  ].join(" ");

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-tight text-sky-900"
        >
          Rutas del Mundo
        </NavLink>

        <nav aria-label="Navegación principal" className="flex gap-2">
          <NavLink to="/" end className={getLinkClass}>
            Inicio
          </NavLink>

          <NavLink to="/destinos" className={getLinkClass}>
            Destinos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
