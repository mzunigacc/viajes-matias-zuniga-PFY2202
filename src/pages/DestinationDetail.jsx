import { Link, useParams } from "react-router";

import PageHeader from "../components/PageHeader";
import StatusMessage from "../components/StatusMessage";

function DestinationDetail() {
  const { destinationId } = useParams();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <Link
        to="/destinos"
        className="text-sm font-semibold text-sky-800 hover:underline"
      >
        Volver a destinos
      </Link>

      <div className="mt-8">
        <PageHeader
          eyebrow="Planificación de viaje"
          title="Explorar vuelos y hoteles"
          description={`Destino seleccionado: ${destinationId}`}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section aria-label="Opciones de vuelo">
          <StatusMessage
            type="empty"
            title="Vuelos disponibles"
            message="Las alternativas de vuelo se consultarán mediante GraphQL."
          />
        </section>

        <section aria-label="Opciones de alojamiento">
          <StatusMessage
            type="empty"
            title="Hoteles disponibles"
            message="Las alternativas de alojamiento se consultarán mediante GraphQL."
          />
        </section>
      </div>
    </main>
  );
}

export default DestinationDetail;
