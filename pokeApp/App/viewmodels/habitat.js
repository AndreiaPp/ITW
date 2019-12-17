define(['durandal/app'], function (app) {
    var vm = function () {
        var self = this;
        var baseUrl = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/Habitat?name=';
        self.displayName = 'Select a habitat';
        self.pokemons = ko.observableArray([]);
        self.habitats = ko.observableArray([]);
        console.log(self.pokemons)
        self.error = ko.observable('');
        

        getPokemoncave = function () {
            var composedUrl = baseUrl + "cave&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                (self.pokemons(data.Species))
                
            }
              
            )
            
        }
        getPokemonforest = function () {
            var composedUrl = baseUrl + "forest&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                (self.pokemons(data.Species))
            }
            )
        }
        getPokemongrassland = function () {
            var composedUrl = baseUrl + "grassland&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                (self.pokemons(data.Species))
            }
            )
        }
        getPokemonmountain = function () {
            var composedUrl = baseUrl + "mountain&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                (self.pokemons(data.Species))
            }
            )
        }
        getPokemonrare = function () {
            var composedUrl = baseUrl + "rare&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                (self.pokemons(data.Species))
            }
            )
        }
        getPokemonroughterrain = function () {
            var composedUrl = baseUrl + "rough terrain&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                (self.pokemons(data.Species))
            })
        }
        getPokemonsea = function () {
            var composedUrl = baseUrl + "sea&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                (self.pokemons(data.Species))
            })
        }
        getPokemonurban = function () {
            var composedUrl = baseUrl + "urban&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                (self.pokemons(data.Species))
            })
        }
        getPokemonwatersedge = function () {
            var composedUrl = baseUrl + "water's edge&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                (self.pokemons(data.Species))
            })
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