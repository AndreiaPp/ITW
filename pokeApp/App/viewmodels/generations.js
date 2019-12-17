define(['durandal/app'], function (app) {
    var vm = function () {
        var self = this;
        var baseUrl = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByGeneration?name=generation-';
        self.displayName = 'Select a generation';
        self.pokemons = ko.observableArray([]);
        console.log(self.pokemons)
        self.error = ko.observable('');
       

        getPokemonI = function () {
            var composedUrl = baseUrl + "i&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                (self.pokemons(data))
            }
            )
        }
        getPokemonII = function () {
            var composedUrl = baseUrl + "ii&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                (self.pokemons(data))
            }
            )
        }
        getPokemonIII = function () {
            var composedUrl = baseUrl + "iii&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                (self.pokemons(data))
            }
            )
        }
        getPokemonIV = function () {
            var composedUrl = baseUrl + "iv&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                (self.pokemons(data))
            }
            )
        }
        getPokemonV = function () {
            var composedUrl = baseUrl + "v&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                (self.pokemons(data))
            }
            )
        }
        getPokemonVI = function () {
            var composedUrl = baseUrl + "vi&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                (self.pokemons(data))
            })
        }
        getPokemonVII = function () {
            var composedUrl = baseUrl + "vii&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                (self.pokemons(data))
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