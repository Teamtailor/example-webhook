# example-webhook

This is an example code that shows how Teamtailor webhook can be processed.
Example is using node and serverless framework, but you are free to use any language and technology you like

## Installation

`yarn`

## Run dev server

1. `yarn start`
   It will start listening on http://localhost:5555/development

1. And in another window
   `yarn run ngrok`

It will create a tunnel from your localhost to https://tt-example-adapter.eu.ngrok.io

Or use something like concurrently https://www.npmjs.com/package/concurrently to run it at once

The base url will be set to `https://tt-example-adapter.eu.ngrok.io`
