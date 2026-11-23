import { useState } from "react";
import { useQuery } from "@apollo/client/react";

import FlightCard from "./FlightCard";
import HotelCard from "./HotelCard";
import StatusMessage from "./StatusMessage";

import { GET_TRAVEL_OPTIONS } from "../graphql/queries";

function TravelOptions({ destinationId }) {
  const [simulateError, setSimulateError] = useState(false);

  const { data, loading, error, refetch } = useQuery(
    GET_TRAVEL_OPTIONS,
    {
      variables: {
        destinationId,
        simulateError,
      },
      fetchPolicy: "network-only",
      notifyOnNetworkStatusChange: true,
    },
  );

  const options = data?.travelOptions;

  return (
    <section aria-label="Opciones de viaje">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Opciones para tu viaje
        </h2>

        <p className="mt-2 text-slate-600">
          Vuelos y alojamientos consultados mediante GraphQL.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-4">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={simulateError}
            onChange={(event) =>
              setSimulateError(event.target.checked)
            }
            className="h-4 w-4 accent-sky-800"
          />
          Simular error GraphQL
        </label>

        <button
          type="button"
          onClick={() => refetch()}
          disabled={loading}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Actualizar opciones
        </button>
      </div>

      {loading && (
        <StatusMessage
          type="loading"
          title="Consultando vuelos y hoteles..."
          message="Estamos obteniendo las opciones disponibles para este destino."
        />
      )}

      {!loading && error && (
        <StatusMessage
          type="error"
          title="No pudimos consultar las opciones de viaje"
          message={error.message}
          action={
            <button
              type="button"
              onClick={() => refetch()}
              className="rounded-lg bg-red-900 px-5 py-2 font-semibold text-white hover:bg-red-800"
            >
              Reintentar consulta
            </button>
          }
        />
      )}

      {!loading && !error && !options && (
        <StatusMessage
          type="empty"
          title="Sin opciones de viaje"
          message="No encontramos información de vuelos u hoteles para este destino."
        />
      )}

      {!loading && !error && options && (
        <div className="grid gap-8 lg:grid-cols-2">
          <section aria-label="Vuelos disponibles">
            <h3 className="mb-4 text-xl font-bold text-slate-900">
              Vuelos
            </h3>

            {options.flights.length === 0 ? (
              <StatusMessage
                type="empty"
                title="Sin vuelos"
                message="No existen vuelos registrados para este destino."
              />
            ) : (
              <div className="space-y-4">
                {options.flights.map((flight) => (
                  <FlightCard key={flight.id} flight={flight} />
                ))}
              </div>
            )}
          </section>

          <section aria-label="Hoteles disponibles">
            <h3 className="mb-4 text-xl font-bold text-slate-900">
              Hoteles
            </h3>

            {options.hotels.length === 0 ? (
              <StatusMessage
                type="empty"
                title="Sin hoteles"
                message="No existen hoteles registrados para este destino."
              />
            ) : (
              <div className="space-y-4">
                {options.hotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </section>
  );
}

export default TravelOptions;
