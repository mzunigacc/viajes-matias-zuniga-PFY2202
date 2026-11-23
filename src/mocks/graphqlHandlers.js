import { HttpResponse } from "msw/http";
import { graphql } from "msw/graphql";
import { delay } from "msw/utils/delay";

import { travelData } from "./travelData";

const endpoint = `${window.location.origin}${import.meta.env.BASE_URL}graphql`;

const api = graphql.link(endpoint);

export const graphqlHandlers = [
  api.query("GetTravelOptions", async ({ variables }) => {
    await delay(600);

    const { destinationId, simulateError } = variables;

    if (simulateError) {
      return HttpResponse.json(
        { errors: [{ message: "Error simulado del servidor GraphQL." }] },
        { status: 500 },
      );
    }

    const options = travelData[destinationId];

    if (!options) {
      return HttpResponse.json({
        data: { travelOptions: null },
        errors: [{ message: "No existen opciones para este destino." }],
      });
    }

    return HttpResponse.json({
      data: {
        travelOptions: {
          id: destinationId,
          flights: options.flights,
          hotels: options.hotels,
        },
      },
    });
  }),
];
