#!/bin/bash

# Fast fail the script on failures.
set -e

echo "Download Google OAuth Tool"
pip --version
/usr/bin/python -m pip install --upgrade pip
echo "Updated pip version"
pip --version

pip install --user google-oauth2l
