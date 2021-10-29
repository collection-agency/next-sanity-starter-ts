1. `cd studio && yarn && sanity init` to create sanity database and install deps
2. update `project.name` in `studio/sanity.json`
3. add staging database to `development.api` settings in `studio/sanity.json`
4. update initial `siteTitle` and `siteUrl` values in `studio/schemas/documents/config.js`
5. `cd ../web` and create `.env.development.local` with api values and project name from `studio/sanity.json`
6. `yarn` to install deps
