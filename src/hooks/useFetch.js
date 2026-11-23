import { useCallback, useEffect, useState } from "react";

export function useFetch(request, dependencies = []) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  const retry = useCallback(() => {
    setAttempt((current) => current + 1);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort("timeout");
    }, 8000);

    setData(null);
    setStatus("loading");
    setError(null);

    async function load() {
      try {
        const result = await request(controller.signal);

        if (!controller.signal.aborted) {
          setData(result);
          setStatus("success");
        }
      } catch (err) {
        if (controller.signal.aborted) {
          if (controller.signal.reason === "timeout") {
            setError("La solicitud tardó demasiado. Inténtalo nuevamente.");
            setStatus("error");
          }
          return;
        }

        setError(err.message || "Ocurrió un error inesperado.");
        setStatus("error");
      } finally {
        clearTimeout(timeout);
      }
    }

    load();

    return () => {
      controller.abort("cleanup");
      clearTimeout(timeout);
    };
    // Los valores de dependencies determinan cuándo repetir la solicitud.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies, attempt]);

  return { data, status, error, retry };
}
