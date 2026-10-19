# example-webhook

This is an example code that shows how Teamtailor webhook can be processed.
Example is using node and serverless framework, but you are free to use any language and technology you like

## Installation

Use Node.js 22 and Yarn Classic (1.x) for local development.
`serverless-offline` 13.8.2 requires Serverless Framework 3.x (provided separately
on your PATH, as the `sls` command). The start script disables Node 22's
experimental `require(ESM)` support so Framework 3 can load the plugin with
its dynamic import fallback. The start script sets `LOCAL_NODE_RUNTIME=nodejs20.x`
for the emulator, which supports the Node 20 runtime label and executes on
the local Node 22 process. It no longer supports Node 12. The configuration defaults
to the original deployed runtime when this variable is absent.

`yarn`

## Run dev server

1. `yarn start`
   It will start listening on http://localhost:5555/development

1. And in another window
   `yarn run ngrok`

It will create a tunnel from your localhost to https://tt-example-adapter.eu.ngrok.io

Or use something like concurrently https://www.npmjs.com/package/concurrently to run it at once

The base url will be set to `https://tt-example-adapter.eu.ngrok.io/development`
