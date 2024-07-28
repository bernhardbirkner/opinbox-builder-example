import { FunctionFactory } from "opinbox-builder";

let randomValue = Math.random()

// Create a random variable once the survey is created
export function randomOnce() {
    return randomValue
}

export function parseTic() {
    const search = new URLSearchParams(window.location.search)
    return search.get("tic")
}

// Create a random variable on each change of the user input
// Most likely not a very interesting expression
export function randomOnChange() {
    return Math.random()
}

FunctionFactory.Instance.register("random", randomOnce);
FunctionFactory.Instance.register("tic", parseTic);
console.log("Registering random()")
