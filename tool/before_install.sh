#!/bin/bash

# Fast fail the script on failures.
set -e

echo "PIP"
pip3 --version
pip install --upgrade pip
pip --version
pip3 install --upgrade pip
pip3 --version

echo "Download Google OAuth Tool"

pip install --user google-oauth2l --upgrade
