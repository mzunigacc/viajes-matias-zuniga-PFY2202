import AvailabilityBadge from "./AvailabilityBadge";

import { formatDate, formatPrice } from "../utils/formatters";

function FlightCard({ flight }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-slate-900">
          {flight.airline}
        </h3>

        <AvailabilityBadge available={flight.available} />
      </div>

      <p className="mt-4 text-sm text-slate-600">
        {flight.origin} → {flight.destination}
      </p>

      <p className="mt-2 text-sm text-slate-600">
        Salida: {formatDate(flight.departureDate)}
      </p>

      <div className="mt-5 border-t border-slate-100 pt-4">
        <p className="text-xs text-slate-500">
          Precio referencial del vuelo
        </p>

        <p className="mt-1 text-2xl font-bold text-sky-900">
          {formatPrice(flight.price)}
        </p>
      </div>
    </article>
  );
}

export default FlightCard;
