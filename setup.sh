#!/bin/sh

LOGFILE="setup.log"

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOGFILE"
}

log "Cloning the repository..."

if git clone https://github.com/anmol-fzr/epik-demo-app; then
    log "Repository cloned successfully."
else
    log "Error: Failed to clone the repository."
    exit 1
fi

cd epik-demo-app || { log "Error: Failed to change directory to epik-demo-app"; exit 1; }

log "Installing npm packages..."
if npm install; then
    log "Npm packages installed successfully."
else
    log "Error: Failed to install npm packages."
    exit 1
fi

log "Running the Project ..."
if npm run dev; then
    log "Project is running."
else
    log "Error: Failed to run the Project."
    log "Go Back to https://github.com/anmol-fzr/epik-demo-app"
    exit 1
fi
