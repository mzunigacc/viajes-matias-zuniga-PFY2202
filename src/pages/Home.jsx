import { Link } from "react-router";

function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="rounded-2xl bg-gradient-to-br from-sky-900 to-cyan-700 px-8 py-16 text-white md:px-14 md:py-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-sky-100">
          Agencia de viajes
        </p>

        <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
          Tu próximo destino comienza aquí
        </h1>

        <p className="mt-6 max-w-xl text-lg text-sky-50">
          Explora destinos, descubre actividades y consulta vuelos
          y hoteles disponibles para planificar tu viaje.
        </p>

        <Link
          to="/destinos"
          className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-bold text-sky-900 transition hover:bg-sky-100"
        >
          Explorar destinos
        </Link>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Descubre destinos
          </h2>

          <p className="mt-3 text-slate-600">
            Consulta países y actividades populares mediante
            nuestro catálogo REST.
          </p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Planifica tu viaje
          </h2>

          <p className="mt-3 text-slate-600">
            Revisa opciones de vuelos y hoteles con precios,
            fechas y disponibilidad mediante GraphQL.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Home;
