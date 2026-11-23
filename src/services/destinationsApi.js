const API_URL = `${import.meta.env.BASE_URL}api/destinations`;

async function requestJson(url, { signal } = {}) {
  const response = await fetch(url, { signal });

  if (!response.ok) {
    let message = "No fue posible completar la solicitud.";

    try {
      const errorData = await response.json();
      message = errorData.message || message;
    } catch {
      // Mantener el mensaje general.
    }

    throw new Error(message);
  }

  return response.json();
}

export function getDestinations({ signal, simulateError = false } = {}) {
  const url = simulateError
    ? `${API_URL}?error=true`
    : API_URL;

  return requestJson(url, { signal });
}

export function getDestinationById(destinationId, { signal } = {}) {
  return requestJson(
    `${API_URL}/${encodeURIComponent(destinationId)}`,
    { signal },
  );
}
