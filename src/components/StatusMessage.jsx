const styles = {
  loading: "border-sky-200 bg-sky-50 text-sky-900",
  error: "border-red-200 bg-red-50 text-red-900",
  empty: "border-slate-200 bg-white text-slate-700",
};

function StatusMessage({
  type = "empty",
  title,
  message,
  action,
}) {
  return (
    <section
      role={type === "error" ? "alert" : "status"}
      aria-live={type === "error" ? "assertive" : "polite"}
      className={`rounded-xl border p-6 ${styles[type] ?? styles.empty}`}
    >
      <h2 className="font-bold">{title}</h2>

      {message && (
        <p className="mt-2 text-sm">{message}</p>
      )}

      {action && (
        <div className="mt-5">{action}</div>
      )}
    </section>
  );
}

export default StatusMessage;
