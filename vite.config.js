import { defineConfig } from 'vite';

// The hosted preview reaches this server through an omgithub.com reverse proxy.
// Allow the whole domain so a new generation (new subdomain) keeps working.
const allowedHosts = ['.omgithub.com', 'live-45033675258-1.omgithub.com'];

export default defineConfig({
  server: { allowedHosts },
  preview: { allowedHosts },
});
