# Czy.js - Try-catch Replacement for JavaScript

## Introduction

Czy.js (pronounced as t͡ʃʲɨ, means "whether" in Polish) is a simple yet intuitive drop-in replacement for the try-catch block, which is notorious for its scoping and error typing issues. This library aims to fix that once and for all!

## Installation

``` bash
$ npm install czy-js
```

## Usage

``` js
import czy, { settings } from "czy-js";

const { data, err } = czy(fetch("..."));

// throw the error if it exists...
if (err) throw new Error("There is an error!");

// otherwise use the data
console.log(data);

// it is also possible to destructure the output as an array:
const [err, data] = czy(fetch("..."));
```

## Documentation

More detailed docs will be available soon!
