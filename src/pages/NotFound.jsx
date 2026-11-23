import { Link } from "react-router";

import PageHeader from "../components/PageHeader";

function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 text-center">
      <PageHeader
        eyebrow="Error 404"
        title="Página no encontrada"
        description="La dirección solicitada no existe en nuestra agencia de viajes."
      />

      <Link
        to="/"
        className="inline-block rounded-lg bg-sky-900 px-6 py-3 font-semibold text-white hover:bg-sky-800"
      >
        Volver al inicio
      </Link>
    </main>
  );
}

export default NotFound;
