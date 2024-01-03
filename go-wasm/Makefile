build-wasm:	set-wasm-os
	go build -ldflags="-s -w -X main.BuildDate=$(date -u +%Y-%m-%d__T%H:%M--UTC)" -o ./fat-go-timeparse-interactive.wasm .
	wasm-opt --enable-bulk-memory -Oz -o ./go-timeparse-interactive.wasm ./fat-go-timeparse-interactive.wasm

set-wasm-os:
	go env -w GOOS=js  GOARCH=wasm