#!/bin/bash

rm -rf _site
git clone -b deployed `git config remote.origin.url` _site
jekyll build
cd _site
git add .
git commit -m "Deploying..."
git push