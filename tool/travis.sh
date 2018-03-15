#!/bin/bash

# Fast fail the script on failures.
set -e

echo "Install jekyll."
gem install bundler
bundle install

echo "Building site."
bundle exec jekyll build

echo "Validating all links."
rake checklinks

echo "Validating Read Me."
rake proof_readme

echo "Tests passed"

folder="./docs"
if [ ! -d "$folder" ]
then 
  echo "Creating '$folder'"
  mkdir $folder
fi

echo "Copy staging into docs to deploy the website"
cp -r ./staging/* ./docs/
git add .
git commit -m 'Deploy the website'
git remote rm origin
git remote add origin https://github.com/DasKeyboard/q-website.git
git push origin master