/**
 * service worker for chameleon.
 */

// @ts-nocheck

import { precacheAndRoute, matchPrecache } from 'workbox-precaching';
import { setCatchHandler, registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

// Manifest
precacheAndRoute(self.__WB_MANIFEST);

// Offline page handling
setCatchHandler(async ({ event }) => {
  if (event.request.destination === 'document') {
    return matchPrecache('/offline.html');
  }
});

// Cache Google Fonts
registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
registerRoute(
  ({ url }) => url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);

console.debug('Service worker working.');
