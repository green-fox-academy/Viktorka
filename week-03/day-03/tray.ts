import Cookie from './Cookie';

class Tray {
    cookies: Cookie[] = [];
    bakeThemAll() {
        this.cookies.forEach(function (cookie) {
            cookie.bakeMe();
        })
    }

    bakeThemAllAgain() {
        this.cookies.forEach(cookie => {
            cookie.bakeMe();
        })
    }

    bakeThemAllWithAFor() {
        for (let i: number = 0; i < this.cookies.length; i++) {
            this.cookies[i].bakeMe();
        }
    }

    constrictor() {
    }
}

let myFirstTray: Tray = new Tray();
let myFirstCookie: Cookie = new Cookie("elephant", false, "vanila");
let mySecondCookie: Cookie = new Cookie("spider", true, "strawberry");
myFirstTray.cookies.push(myFirstCookie, mySecondCookie);
console.log(myFirstTray)
myFirstTray.bakeThemAll
console.log(myFirstCookie instanceof Cookie);