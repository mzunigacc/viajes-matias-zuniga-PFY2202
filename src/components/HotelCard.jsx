import AvailabilityBadge from "./AvailabilityBadge";

import { formatDate, formatPrice } from "../utils/formatters";

function HotelCard({ hotel }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-slate-900">
          {hotel.name}
        </h3>

        <AvailabilityBadge available={hotel.available} />
      </div>

      <p className="mt-3 text-sm text-slate-600">
        {hotel.location}
      </p>

      <div className="mt-4 space-y-2 text-sm text-slate-600">
        <p>Ingreso: {formatDate(hotel.checkIn)}</p>
        <p>Salida: {formatDate(hotel.checkOut)}</p>
      </div>

      <div className="mt-5 border-t border-slate-100 pt-4">
        <p className="text-xs text-slate-500">
          Precio referencial por noche
        </p>

        <p className="mt-1 text-2xl font-bold text-sky-900">
          {formatPrice(hotel.pricePerNight)}
        </p>
      </div>
    </article>
  );
}

export default HotelCard;
