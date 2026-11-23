import { useState } from "react";

import DestinationCard from "../components/DestinationCard";
import PageHeader from "../components/PageHeader";
import StatusMessage from "../components/StatusMessage";

import { useFetch } from "../hooks/useFetch";
import { getDestinations } from "../services/destinationsApi";

function Destinations() {
  const [simulateError, setSimulateError] = useState(false);

  const { data, status, error, retry } = useFetch(
    (signal) => getDestinations({ signal, simulateError }),
    [simulateError],
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <PageHeader
        eyebrow="Explora el mundo"
        title="Destinos disponibles"
        description="Selecciona un destino, descubre sus actividades y consulta las opciones de viaje."
      />

      <div className="mb-8 flex flex-wrap items-center gap-4">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={simulateError}
            onChange={(event) => setSimulateError(event.target.checked)}
            className="h-4 w-4 accent-sky-800"
          />
          Simular error del servidor
        </label>

        <button
          type="button"
          onClick={retry}
          disabled={status === "loading"}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Actualizar destinos
        </button>
      </div>

      {status === "loading" && (
        <StatusMessage
          type="loading"
          title="Cargando destinos..."
          message="Estamos consultando nuestro catálogo de viajes."
        />
      )}

      {status === "error" && (
        <StatusMessage
          type="error"
          title="No pudimos cargar los destinos"
          message={error}
          action={
            <button
              type="button"
              onClick={retry}
              className="rounded-lg bg-red-900 px-5 py-2 font-semibold text-white hover:bg-red-800"
            >
              Reintentar
            </button>
          }
        />
      )}

      {status === "success" && data?.length === 0 && (
        <StatusMessage
          type="empty"
          title="No hay destinos disponibles"
          message="Actualmente no existen destinos para mostrar."
        />
      )}

      {status === "success" && data?.length > 0 && (
        <section
          aria-label="Catálogo de destinos"
          className="grid gap-6 md:grid-cols-2"
        >
          {data.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </section>
      )}
    </main>
  );
}

export default Destinations;
