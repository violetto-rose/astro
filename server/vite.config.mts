import { vendureDashboardPlugin } from '@vendure/dashboard/vite';
import { join, resolve } from 'path';
import { pathToFileURL } from 'url';
import { defineConfig } from 'vite';

const apiHost = process.env.DASHBOARD_API_HOST ?? 'localhost';
const apiPort = Number(process.env.DASHBOARD_API_PORT ?? process.env.PORT ?? 3000);
const dashboardDevPort = Number(process.env.DASHBOARD_DEV_PORT ?? 5173);
const apiTarget = `http://${apiHost}:${apiPort}`;

export default defineConfig({
    base: '/dashboard',
    server: {
        host: 'localhost',
        port: dashboardDevPort,
        strictPort: true,
        proxy: {
            '/admin-api': {
                target: apiTarget,
                changeOrigin: true,
            },
            '/shop-api': {
                target: apiTarget,
                changeOrigin: true,
            },
            '/assets': {
                target: apiTarget,
                changeOrigin: true,
            },
            '/mailbox': {
                target: apiTarget,
                changeOrigin: true,
            },
        },
    },
    build: {
        outDir: join(__dirname, 'dist/dashboard'),
    },
    plugins: [
        vendureDashboardPlugin({
            // The vendureDashboardPlugin will scan your configuration in order
            // to find any plugins which have dashboard extensions, as well as
            // to introspect the GraphQL schema based on any API extensions
            // and custom fields that are configured.
            vendureConfigPath: pathToFileURL('./src/vendure-config.ts'),
            // Points to the location of your Vendure server.
            api: { host: 'auto', port: 'auto' },
            // When you start the Vite server, your Admin API schema will
            // be introspected and the types will be generated in this location.
            // These types can be used in your dashboard extensions to provide
            // type safety when writing queries and mutations.
            gqlOutputPath: './src/gql',
        }),
    ],
    resolve: {
        alias: {
            // This allows all plugins to reference a shared set of
            // GraphQL types.
            '@/gql': resolve(__dirname, './src/gql/graphql.ts'),
        },
    },
});
