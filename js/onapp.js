'use strict';
// from app.js
console.log('This file is connected and ready to run');

var name = prompt('Please enter Your first name:')

var greeting;

if(name != '' && name != null)
{
    greeting = '<h4> Welcome ' + name + '. Please scroll to bottom of page to review the races to select from';
} else
{
    greeting = '<h4 style="color: red">I am sorry, but you did not follow directions. Please refresh page and try again.</h4>';
}

// document.write(greeting);
document.getElementById('name-placeholder').innerHTML = greeting;

//from app2.js
var race = 'none';
window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight && (race === 'none' || race === '' || race == null)) {
        // alert("you're at the bottom of the page");

        if(name != '')
        {
            race = prompt('Which race would you like to select?');
            if(race !='' && race != null)
            {
                var msg = checkRace(race);
                confirm(msg);
            } else
            {
                confirm('You did not select a race. Please try again.');
            }
            
        } else
        {
            // document.write('I am sorry, but you did not follow directions. Please refresh page and try again.');
            document.getElementById('scroll-placeholder').textContent = 'I am sorry, but you did not follow directions. Please refresh page and try again.'
        }
    };
};

var diceHolder = rollDice();
document.getElementById('dragonborn-placeholder').textContent = 'STR> ' + diceHolder[0] + '; DEX> ' + diceHolder[1] + 'CON> ' + diceHolder[2] + 'INT> ' + diceHolder[3] + 'WIS> ' + diceHolder[4] + 'CHA> ' + diceHolder[5] ;

function checkRace(race)
{
    var newRace = race.toLowerCase();
    if(newRace != 'dragonborn' && newRace != 'dwarf' && newRace != 'elf' && newRace != 'gnome' && newRace != 'halfling' && newRace != 'half-elf' && newRace != 'half elf' && newRace != 'halfelf' && newRace != 'half-orc' && newRace != 'half orc' && newRace != 'halforc' && newRace != 'human' && newRace != 'tiefling')
    {
        var newMsg = 'You did not select a valid race. Please refresh the page and try again.';
    } else
    {
        var selectedRace = cleanRace(race)[0];
        var selectedStat = cleanRace(race)[1];
        var dice = rollDice();
        if(selectedStat === 'STR'){
            var str = 'STR: ' + (dice[0] + 2);
        } else
        {
            var str = 'STR: ' + dice[0];
        }
        if(selectedStat === 'DEX'){
            var dex = '; DEX: ' + (dice[1] + 2);
        } else
        {
            var dex = '; DEX: ' + dice[1];
        }
        if(selectedStat === 'CON'){
            var con = '; CON: ' + (dice[2] + 2);
        } else
        {
            var con = '; CON: ' + dice[2];
        }
        if(selectedStat === 'INT'){
            var int = '; INT: ' + (dice[3] + 2);
        } else
        {
            var int = '; INT: ' + dice[3];
        }
        if(selectedStat === 'WIS'){
            var wis = '; WIS: ' + (dice[4] + 2);
        } else
        {
            var wis = '; WIS: ' + dice[4];
        }
        if(selectedStat === 'CHA'){
            var cha = '; CHA: ' + (dice[5] + 2);
        } else
        {
            var cha = '; CHA: ' + dice[5];
        }
        var newMsg = 'You selected ' + selectedRace;
        newMsg = newMsg + ' Your stats are: \n' + str + dex + con + int + wis + cha;
    }
    return newMsg;
}

function cleanRace(race)
{
    var newRace = race.toLowerCase();
    if(newRace === 'dragonborn')
    {
        var clnRace = ['Dragonborn', 'STR'];
    } else if(newRace === 'dwarf')
    {
        var clnRace = ['Dwarf', 'CON'];
    }else if(newRace === 'elf')
    {
        var clnRace = ['Elf', 'DEX'];
    } else if(newRace === 'gnome')
    {
        var clnRace = ['Gnome', 'INT'];
    } else if (newRace === 'halfling')
    {
        var clnRace = ['Halfling', 'DEX'];
    } else if(newRace === 'half-elf' || newRace === 'half elf' || newRace === 'halfelf')
    {
        var clnRace = ['Half-Elf', 'CHA'];

    } else if (newRace === 'half-orc' || newRace === 'half orc' || newRace === 'halforc')
    {
        var clnRace = ['Half-Orc', 'CON'];
    } else if (newRace === 'human')
    {
        var clnRace = ['Human', 'CHA'];
    } else if (newRace === 'tiefling')
    {
        var clnRace = ['Tiefling', 'INT'];
    } else
    {};
    return clnRace;

};

function rollDice()
{
    var str = Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6)
    var dex = Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6)
    var con = Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6)
    var int = Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6)
    var wis = Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6)
    var cha = Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6)
    var diceRoll = [str, dex, con, int, wis, cha];
    return diceRoll
}
