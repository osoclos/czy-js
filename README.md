# Czy.js - Try-catch Replacement for JavaScript

## Introduction

Czy.js (pronounced as t͡ʃʲɨ, means "whether" in Polish) is a simple yet intuitive drop-in replacement for the try-catch block, which is notorious for its scoping and error typing issues. This library aims to fix that once and for all!

## Installation

``` bash
$ npm install czy-js
```

## Usage

``` js
import czy from "czy-js";

const { data, err } = czy(fetch("..."));

// throw the error if it exists...
if (err) throw err;

// otherwise use the data
console.log(data);

// if you prefer a success true/false rather than an error, you can do that as well!
const { success, data } = czy(fetch("..."));

// it is also possible to destructure the output as an array:
const [err, data] = czy(fetch("..."));

// if you rather destructure as data-first, this option is available too!
const [data, err] = czy.dataErr(fetch("..."));
```

## Documentation

More detailed docs will be available soon!
