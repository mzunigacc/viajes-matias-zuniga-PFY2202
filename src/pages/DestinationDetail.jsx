import { Link, useParams } from "react-router";

import PageHeader from "../components/PageHeader";
import StatusMessage from "../components/StatusMessage";
import TravelOptions from "../components/TravelOptions";

import { useFetch } from "../hooks/useFetch";
import { getDestinationById } from "../services/destinationsApi";

function DestinationDetail() {
  const { destinationId } = useParams();

  const { data: destination, status, error, retry } = useFetch(
    (signal) => getDestinationById(destinationId, { signal }),
    [destinationId],
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <Link
        to="/destinos"
        className="text-sm font-semibold text-sky-800 hover:underline"
      >
        Volver a destinos
      </Link>

      <div className="mt-8">
        {status === "loading" && (
          <StatusMessage
            type="loading"
            title="Cargando destino..."
            message="Consultando la información del destino seleccionado."
          />
        )}

        {status === "error" && (
          <StatusMessage
            type="error"
            title="No pudimos obtener el destino"
            message={error}
            action={
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={retry}
                  className="rounded-lg bg-red-900 px-5 py-2 font-semibold text-white hover:bg-red-800"
                >
                  Reintentar
                </button>

                <Link
                  to="/destinos"
                  className="rounded-lg border border-red-300 px-5 py-2 font-semibold"
                >
                  Ver destinos
                </Link>
              </div>
            }
          />
        )}

        {status === "success" && destination && (
          <>
            <PageHeader
              eyebrow={`${destination.region} · ${destination.country}`}
              title={destination.name}
              description={destination.description}
            />

            <section className="mb-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                Actividades populares
              </h2>

              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {destination.activities.map((activity) => (
                  <li
                    key={activity}
                    className="rounded-lg bg-sky-50 px-4 py-3 text-sm text-sky-900"
                  >
                    {activity}
                  </li>
                ))}
              </ul>
            </section>

            <TravelOptions destinationId={destinationId} />
          </>
        )}
      </div>
    </main>
  );
}

export default DestinationDetail;
