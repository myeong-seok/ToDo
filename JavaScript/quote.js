"use strict";

const quotes = [
    {
        quote : "Python’s a drop-in replacement for BASIC in the sense that Optimus Prime is a drop-in replacement for a truck"
    },
    {
        quote : "Lisp isn’t a language, it’s a building material"
    },
    {
        quote : "Walking on water and developing software from a specification are easy if both are frozen."
    },
    {
        quote : "They don’t make bugs like Bunny anymore."
    },
    {
        quote : "A programming language is low level when its programs require attention to the irrelevant."
    },
    {
        quote : "A C program is like a fast dance on a newly waxed dance floor by people carrying razors."
    },
    {
        quote : "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job."
    },
    {
        quote : "I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing."
    },
    {
        quote : "Talk is cheap. Show me the code."
    },
    {
        quote : "Good design adds value faster than it adds cost."
    },
]

const quote = document.querySelector("#quote");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;