import { setupWorker } from "msw/browser";

import { handlers } from "./handlers";
import { graphqlHandlers } from "./graphqlHandlers";

export const worker = setupWorker(
  ...handlers,
  ...graphqlHandlers,
);
