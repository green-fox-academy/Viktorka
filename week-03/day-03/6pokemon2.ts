
import { Pokemon } from './6Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g.
// water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

console.log('I choose you, ');

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}

// console.log(pokemonOfAsh[3])

for (let i: number = 0; i < pokemonOfAsh.length; i++) {
    pokemonOfAsh[i].isEffectiveAgainst(wildPokemon);         // type az pokemon object
    if (pokemonOfAsh[i].isEffectiveAgainst(wildPokemon) === true) {
        console.log(pokemonOfAsh[i].name)
    }
} 

