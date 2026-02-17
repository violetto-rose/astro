import { bootstrap, runMigrations } from '@vendure/core';
import { config } from './vendure-config';

const shouldSynchronize = Boolean(config.dbConnectionOptions.synchronize);
const startPromise = shouldSynchronize
    ? bootstrap(config)
    : runMigrations(config).then(() => bootstrap(config));

startPromise.catch(err => {
    console.log(err);
});
