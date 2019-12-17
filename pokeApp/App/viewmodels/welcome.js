
function remove_hide() {
    $("#video").removeClass("hide");
    $("#bt").addClass("hide")
};


function add_hide() {
    $("#video").addClass("hide");
    $("#bt").removeClass("hide")
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
            'Pokemóns',
            'Pokemón Species',
            'Pokemón Types',
            'Egg Groups',
        ];
    };


    return page;
});