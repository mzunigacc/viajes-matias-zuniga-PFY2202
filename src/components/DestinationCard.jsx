import { Link } from "react-router";

function DestinationCard({ destination }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <p className="text-sm font-bold uppercase tracking-wider text-sky-700">
        {destination.region}
      </p>

      <h2 className="mt-2 text-2xl font-bold text-slate-900">
        {destination.name}
      </h2>

      <p className="mt-1 font-medium text-slate-500">
        {destination.country}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        {destination.description}
      </p>

      <h3 className="mt-6 font-semibold text-slate-900">
        Actividades populares
      </h3>

      <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-600">
        {destination.activities.map((activity) => (
          <li key={activity}>{activity}</li>
        ))}
      </ul>

      <Link
        to={`/destinos/${destination.id}`}
        className="mt-6 block rounded-lg bg-sky-900 px-5 py-3 text-center font-semibold text-white transition hover:bg-sky-800"
      >
        Ver vuelos y hoteles
      </Link>
    </article>
  );
}

export default DestinationCard;
