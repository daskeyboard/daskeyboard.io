#!/bin/bash

# Fast fail the script on failures.
set -e

# Update pip
pip --version
sudo apt-get install python3-pip
alias pip=pip3
python -m pip install -U pip
pip --version

echo "Download Google OAuth Tool"

pip install --user google-oauth2l --upgrade
