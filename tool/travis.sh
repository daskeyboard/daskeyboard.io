#!/bin/bash

# Fast fail the script on failures.
set -e

echo "Installing jekyll..."
gem install bundler
bundle install

echo "Building site from $0..."
bundle exec jekyll build

#echo "Validating all links..."
#rake checklinks --trace 

# echo "Validating Read Me."
# rake proof_readme


echo "Tests passed"
