import { createStartHandler, defaultStreamHandler, defineHandlerCallback } from "@tanstack/react-start/server";

import { createRouter } from "@/router";

export default defineHandlerCallback((event) => {
  const startHandler = createStartHandler({
    createRouter,
  })(defaultStreamHandler);

  return startHandler(event);
});
