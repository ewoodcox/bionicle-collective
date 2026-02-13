# Start local server on port 8080 (no Node.js required)
$port = 9229
$root = $PSScriptRoot
Write-Host "Serving at http://localhost:$port" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop" -ForegroundColor Gray
Set-Location $root
python -m http.server $port
