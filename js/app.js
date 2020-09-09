'use strict';
console.log('This file is connected and ready to run');

var name = prompt('Please enter Your first name:')

var greeting;

if(name === '')
{
    greeting = '<h4 style="color: red">I am sorry, but you did not follow directions. Please refresh page and try again.</h4>';
} else
{
    greeting = '<h4> Welcome ' + name + '. Please scroll to bottom of page to review the races to select from'
}

document.write(greeting);