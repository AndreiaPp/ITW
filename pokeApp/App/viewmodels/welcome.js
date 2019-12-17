
function remove_hide() {
    var x = document.getElementById("video");
    if (x.style.display === "none") {
        x.style.display = "inline";
    } else {
        x.style.display = "none";
    }
    var y = document.getElementById("bt");
    if (y.style.display === "block") {
        y.style.display = "none";
    } 
    
    
};


function add_hide() {
    var x = document.getElementById("video");
    if (x.style.display === "inline") {
        x.style.display = "none";
    } else {
        x.style.display = "inline";
    }
    var y = document.getElementById("bt");
    if (y.style.display === "none") {
        y.style.display = "block";
    } 
   
};

define(['durandal/app'], function (app) {
    var i = setInterval(function () {

        clearInterval(i);
        document.getElementById("loading").style.display = "none";
        document.getElementById("conteudo").style.display = "inline";
    }, 4000);

    var page = function () {
        var self = this;
        self.displayName = 'Pokémon Life';
        self.description = 'Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings.<br/>Pokémon are raised and commanded by their owners (called “Trainers”). During their adventures, Pokémon grow, level up and become more experienced and even, on occasion, evolve into stronger Pokémon.';
        self.features = [
            
            'Pokemón Species',
            'Pokemón Colors',
            'Pokemón Types',
            'And much more!',
            
        ];
    };


    return page;
});