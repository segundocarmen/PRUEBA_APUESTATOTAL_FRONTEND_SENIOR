import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'shell',
            filename: 'remoteEntry.js',
            exposes: {
                './storeHistory': './src/store/history',
                './storeActual': './src/store/actual-pokemon'
            },
            remotes: {
                PokemonDetailMF: 'http://localhost:3001/assets/remoteEntry.js',
                PokemonHistoryMF: 'http://localhost:3002/assets/remoteEntry.js'
            },
            shared: ['react', 'react-dom']
        }),
        VitePWA({
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'google-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    },
                    {
                        urlPattern:
                            /^https:\/\/raw\.githubusercontent\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'image-cache',
                            expiration: {
                                maxEntries: 120,
                                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    },
                    {
                        urlPattern: /^https:\/\/pokeapi\.co\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'api-cache',
                            expiration: {
                                maxEntries: 50,
                                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    }
                ]
            }
        })
    ],
    server: {
        host: 'localhost',
        port: 3000,
        cors: true
    },
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false
    }
});
