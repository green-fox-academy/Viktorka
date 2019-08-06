'use strict';
import Cookie from './Cookie';

class Tray {
    private cookies: Cookie[] = [];
    bakeThemAll():void {
        this.cookies.forEach(function (cookie) {
            cookie.bakeMe();
        })
    }

    bakeThemAllAgain():void {
        this.cookies.forEach(cookie => {
            cookie.bakeMe();
        })
    }

    bakeThemAllWithAFor():void {
        for (let i: number = 0; i < this.cookies.length; i++) {
            this.cookies[i].bakeMe();
        }
    }

    putOnTray(cookie: Cookie):void {
        this.cookies.push(cookie);
    }
}

let myFirstTray: Tray = new Tray();
let myFirstCookie: Cookie = new Cookie("elephant", false, "vanila");
let mySecondCookie: Cookie = new Cookie("spider", true, "strawberry");
// myFirstTray.cookies.push(myFirstCookie, mySecondCookie); if cookies are not private
myFirstTray.putOnTray(myFirstCookie); //put cookie on tray if cookie is private
console.log(myFirstTray)
myFirstTray.bakeThemAll
console.log(myFirstCookie instanceof Cookie);