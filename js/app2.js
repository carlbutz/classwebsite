'use strict';
var race = 'none';
window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight && (race === 'none' || race === '' || race == null)) {
        // alert("you're at the bottom of the page");

        if(name != '')
        {
            race = prompt('Which race would you like to select?');
            if(race !='' && race != null)
            {
                confirm('You selected ' + race);
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
