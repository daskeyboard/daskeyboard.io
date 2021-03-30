#!/bin/bash

# Fast fail the script on failures.
set -e

echo "TESTING - Update pip version"
/usr/bin/python -m pip install --upgrade pip
echo "Updated pip version"
pip --version

echo "TESTING - Install pip3"
sudo apt-get install python3-pip
pip3 --version

echo "Download Google OAuth Tool"
pip install --user google-oauth2l --upgrade
