'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!
let replaceBot = /bots/gi; //text,object, whatever TO BE REPLACED
let url: string = 'https//www.reddit.com/r/nevertellmethebots';

let newUrl =url.replace("bots"/*or use replaceBot*/, "odds");

let crutialComponent:string = ("/")

let newNewUrl = newUrl.concat(crutialComponent)


//url.replace("odds","odds")


url = newNewUrl



console.log(url);