#!/bin/bash

# Fast fail the script on failures.
set -e

# Update pip
pip --version
python --version
python3 --version
sudo apt-get install python3-pip
python -m pip install -U pip
/usr/bin/python -m pip install --upgrade pip
pip install --upgrade pip
pip3 install --upgrade pip
pip3 --version
pip --version

echo "Download Google OAuth Tool"

pip3 install --user google-oauth2l --upgrade
