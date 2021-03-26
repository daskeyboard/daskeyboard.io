#!/bin/bash

# Fast fail the script on failures.
set -e

echo "PIP"
pip3 --version
pip3 install --upgrade pip
pip3 --version
pip --version

echo "Download Google OAuth Tool"

pip3 install --user google-oauth2l --upgrade
