'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';  // \n breaks line
todoText=todoText.concat(" - Download games\n    -Diablo");
todoText=["My todo \n",todoText].join(""); //join "My todo" and buymilk/downloadgames/diablo structure together in line





console.log(todoText);