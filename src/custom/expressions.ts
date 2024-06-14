import { FunctionFactory } from "survey-core";

let randomValue = Math.random()

// Create a random variable once the survey is created
export function randomOnce() {
    return randomValue
}

// Create a random variable on each change of the user input
// Most likely not a very interesting expression
export function randomOnChange() {
    return Math.random()
}

FunctionFactory.Instance.register("random", randomOnce);
