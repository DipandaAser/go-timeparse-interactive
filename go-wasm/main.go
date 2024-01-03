package main

import (
	"syscall/js"
	"time"
)

var BuildDate string // Variable to store build date on compile time do not change this line

func main() {
	defer func() {
		if err := recover(); err != nil {
			println(" Recovered. Error:\n", err)
			println(" Restarting")
			run()
		}
	}()
	run()
}

func run() {
	println(printVersion())
	js.Global().Set("WasmGoCurrentTimeFormat", currentTimeFormat())
	<-make(chan bool)
}

func printVersion() string {
	return "go-timeparse-interactive BuildDate(" + BuildDate + ")"
}

func currentTimeFormat() js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) any {

		data := args

		// Promise handler
		return CreatePromise(func(resolve js.Value, reject js.Value) {
			defer recoverPanic(reject)
			if len(data) == 0 {
				reject.Invoke("No format provided")
				return
			}

			if data[0].Type() != js.TypeString {
				reject.Invoke("The format arg must be a string")
				return
			}

			// Execute the function
			res := time.Now().Format(data[0].String())

			// Resolve the promise
			resolve.Invoke(res)
		})
	})
}

// CreatePromise is a function that create a promise.
// The function take a function as parameter and return a promise.
func CreatePromise(f func(js.Value, js.Value)) js.Value {

	// Promise handler
	handler := js.FuncOf(func(this js.Value, args []js.Value) any {

		// Resolve the promise
		resolve := args[0]

		// Reject the promise
		reject := args[1]

		// run the code as goroutine
		go f(resolve, reject)

		return nil
	})

	// Return the promise
	return js.Global().Get("Promise").New(handler)
}

var recoverPanic = func(reject js.Value) {
	if err := recover(); err != nil {
		println(" Recovered. Error:\n", err)
		println(" Restarting")
		var errorString string
		if err, isError := err.(error); isError {
			errorString = err.Error()
		} else {
			errorString = "ERROR"
		}
		reject.Invoke(errorString)
	}
}
