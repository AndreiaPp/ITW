define(['durandal/app'], function (app) {
    var vm = function () {
        var self = this;
        var baseUrl = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/Pokemons/SearchByName?name=';
        self.displayName = 'What pokemon are you looking for?';
        self.pokemons = ko.observableArray([]);
        console.log(self.pokemons)
        self.error = ko.observable('');
        self.searchPokemon = ko.observable();

        getPokemon = function () {
            var composedUrl = baseUrl + self.searchPokemon();
            if (self.searchPokemon().length < 2) {
                { alert("Minimum 2 letters ✧ʕ•ᴥ•ʔ ") }
            }
            else {
                
                ajaxHelper(composedUrl, 'GET').done(function (data) {
                    if (data.length != 0) { self.pokemons(data) }
                    else { alert("Oopsie, something went wrong ✧ʕ•ᴥ•ʔ  ") }

                });
            }

        }

        function ajaxHelper(uri, method, data) {
            self.error('There is nothing here.');
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