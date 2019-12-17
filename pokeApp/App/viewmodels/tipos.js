define(['durandal/app'], function (app) {
    var vm = function () {
        var self = this;
        var baseUrl = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/Pokemons/Type?name=';
        self.displayName = 'Select a type';
        self.pokemons = ko.observableArray([]);
        console.log(self.pokemons)
        self.error = ko.observable('');
        

        getPokemonbug = function () {
            var composedUrl = baseUrl + "bug&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data.Pokemon)
                console.log(self.pokemons)
            });
           ;}
        getPokemondark = function () {
            var composedUrl = baseUrl + "dark&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data.Pokemon)
            });
        }
        getPokemondragon = function () {
            var composedUrl = baseUrl + "dragon&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data.Pokemon)
            });
        }
        getPokemonelectric = function () {
            var composedUrl = baseUrl + "electric&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data.Pokemon)
            });
        }
        getPokemonfairy = function () {
            var composedUrl = baseUrl + "fairy&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data.Pokemon)
            });
        }
        getPokemonfighting = function () {
            var composedUrl = baseUrl + "fighting&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data.Pokemon)
            });
        }
        getPokemonfire = function () {
            var composedUrl = baseUrl + "fire&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data.Pokemon)
            });
        }
        getPokemonflying = function () {
            var composedUrl = baseUrl + "flying&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data.Pokemon)
            });
        }
        getPokemonghost = function () {
            var composedUrl = baseUrl + "ghost&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data.Pokemon)
            });
        }
        getPokemongrass = function () {
            var composedUrl = baseUrl + "grass&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data.Pokemon)
            });
        }
        getPokemonground = function () {
            var composedUrl = baseUrl + "ground&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data.Pokemon)
            });
        }
        getPokemonice = function () {
            var composedUrl = baseUrl + "ice&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data.Pokemon)
            });
        }
        getPokemonnormal = function () {
            var composedUrl = baseUrl + "normal&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data.Pokemon)
            });
        }
        getPokemonpoison = function () {
            var composedUrl = baseUrl + "poison&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data.Pokemon)
            });
        }
        getPokemonpsych = function () {
            var composedUrl = baseUrl + "psychic&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data.Pokemon)
            });
        }
        getPokemonrock = function () {
            var composedUrl = baseUrl + "rock&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data.Pokemon)
            });


        }
        getPokemonsteel = function () {
            var composedUrl = baseUrl + "steel&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data.Pokemon)
            });
        }
        getPokemonwater = function () {
            var composedUrl = baseUrl + "water&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data.Pokemon)
            });
        }



        function ajaxHelper(uri, method, data) {
            self.error('There is nothing here');
            return $.ajax({
                type: method,
                url: uri,
                dataType: 'json',
                contentType: 'application/json',
                data: data ? JSON.stringify(data) : null,
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("AJAX Call[" + uri + "] Fail...");
                    self.error(errorThrown);
                }
            });
        }

    };
    return vm;
});