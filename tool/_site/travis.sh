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

# if [ "$TRAVIS_EVENT_TYPE" = "push" ] && [ "$TRAVIS_BRANCH" = "master" ]; then
#   # Deploy pushes to master to Firebase hosting.
#   echo "Deploying to Firebase."
#   npm install --global firebase-tools@3.16.0
#   firebase -P sweltering-fire-2088 --token "$FIREBASE_TOKEN" --non-interactive deploy
# fi


# if [ "$ENABLE_PR_BOT" = "true" ]; then

#     if [ "$BRANCH" != "master" ]; then
#         echo "deploying to stage environment"
#         echo $FIREBASE_FILE >> ./service_account.json
#         export FIREBASE_AUTH=`oauth2l fetch --json ./service_account.json firebase.database userinfo.email 2>&1`
#         cd tool/
#         ../../flutter/bin/cache/dart-sdk/bin/pub get
#         export PROJECT_NAME=`../../flutter/bin/cache/dart-sdk/bin/dart prdeployer.dart $BRANCH $FIREBASE_AUTH 2>&1`
#         cd ../
#         echo "Deploying to $PROJECT_NAME"
#         npm install --global firebase-tools@3.16.0
#         firebase -P "$PROJECT_NAME" --token "$FIREBASE_TOKEN_DEV" --non-interactive deploy
#     fi
# fi
