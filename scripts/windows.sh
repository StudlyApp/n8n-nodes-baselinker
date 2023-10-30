#!/bin/sh

rm -rf ./dist
npm run build

cd ~/.n8n/custom

rm -rf node_modules
npm i ~/Desktop/Development/n8n-nodes-friendgrid
n8n
