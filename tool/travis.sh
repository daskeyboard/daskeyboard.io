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

# echo "Validating Read Me."
# rake proof_readme


echo "Tests passed"
