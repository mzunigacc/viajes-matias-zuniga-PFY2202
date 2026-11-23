function AvailabilityBadge({ available }) {
  return (
    <span
      className={[
        "inline-flex rounded-full px-3 py-1 text-xs font-bold",
        available
          ? "bg-emerald-100 text-emerald-800"
          : "bg-amber-100 text-amber-800",
      ].join(" ")}
    >
      {available ? "Disponible" : "Sin disponibilidad"}
    </span>
  );
}

export default AvailabilityBadge;
