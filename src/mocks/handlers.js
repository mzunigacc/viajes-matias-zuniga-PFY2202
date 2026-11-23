import { http, HttpResponse } from "msw/http";
import { delay } from "msw/utils/delay";

import { destinations } from "./destinationsData";

const apiBase = `${window.location.origin}${import.meta.env.BASE_URL}api`;

export const handlers = [
  http.get(`${apiBase}/destinations`, async ({ request }) => {
    await delay(500);

    const url = new URL(request.url);

    if (url.searchParams.get("error") === "true") {
      return HttpResponse.json(
        { message: "No fue posible obtener los destinos." },
        { status: 500 },
      );
    }

    return HttpResponse.json(destinations);
  }),

  http.get(`${apiBase}/destinations/:destinationId`, async ({ params }) => {
    await delay(350);

    const destination = destinations.find(
      (item) => item.id === params.destinationId,
    );

    if (!destination) {
      return HttpResponse.json(
        { message: "El destino solicitado no existe." },
        { status: 404 },
      );
    }

    return HttpResponse.json(destination);
  }),
];
