#!/bin/bash

# Fast fail the script on failures.
set -e

echo "Download Google OAuth Tool"

pip install --user google-oauth2l --upgrade
