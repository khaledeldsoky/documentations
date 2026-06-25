#!/bin/bash
# Serve the documentation site locally
# Usage: ./serve.sh [port]
PORT=${1:-8080}
echo "Serving at http://localhost:$PORT"
python3 -m http.server "$PORT"
