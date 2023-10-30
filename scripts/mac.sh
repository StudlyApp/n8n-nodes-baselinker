#!/bin/sh

rm -rf ./dist
npm run build

cd ~/.n8n/custom
npm i
