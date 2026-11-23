import PageHeader from "../components/PageHeader";
import StatusMessage from "../components/StatusMessage";

function Destinations() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <PageHeader
        eyebrow="Explora el mundo"
        title="Destinos disponibles"
        description="Conoce países y actividades populares antes de seleccionar tu próximo viaje."
      />

      <StatusMessage
        type="empty"
        title="Catálogo de destinos"
        message="En el siguiente bloque conectaremos esta sección a una API REST simulada."
      />
    </main>
  );
}

export default Destinations;
