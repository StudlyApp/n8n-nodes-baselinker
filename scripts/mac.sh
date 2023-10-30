#!/bin/sh

rm -rf ./dist
npm run build

cd ~/.n8n/custom

rm -rf node_modules
npm i ~/web/n8n-nodes-friendgrid
n8n


