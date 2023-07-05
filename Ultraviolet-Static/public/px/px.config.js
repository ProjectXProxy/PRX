// This file overwrites the stock px config.js

self.__uv$config = {
  prefix: "/px/service/",
  bare: "/bare/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/px/px.handler.js",
  client: "/px/px.client.js",
  bundle: "/px/px.bundle.js",
  config: "/px/px.config.js",
  sw: "/px/px.sw.js",
};
