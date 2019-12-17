define(['durandal/app'], function (app) {
    var vm = function () {
        var self = this;
        var baseUrl = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByColor?color=';
        self.displayName = 'Select a color';
        self.pokemons = ko.observableArray([]);
        console.log(self.pokemons)
        self.error = ko.observable('');
       

        getPokemonred = function () {
            var composedUrl = baseUrl + "red&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                 self.pokemons(data) });}
        getPokemonblue = function () {
            var composedUrl = baseUrl + "blue&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data)});}
        getPokemonyellow = function () {
            var composedUrl = baseUrl + "yellow&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                self.pokemons(data)});}
        getPokemongreen = function () {
            var composedUrl = baseUrl + "green&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
            self.pokemons(data)});}
        getPokemonblack = function () {
            var composedUrl = baseUrl + "black&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
             self.pokemons(data) });}
        getPokemonbrown = function () {
            var composedUrl = baseUrl + "brown&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
             self.pokemons(data)}); }
        getPokemonpurple = function () {
            var composedUrl = baseUrl + "purple&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
             self.pokemons(data)});}
        getPokemongray = function () {
            var composedUrl = baseUrl + "gray&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
            self.pokemons(data)});}
        getPokemonwhite = function () {
            var composedUrl = baseUrl + "white&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
              self.pokemons(data)});}
        getPokemonpink = function () {
            var composedUrl = baseUrl + "pink&type=json";
            console.log(composedUrl)
            ajaxHelper(composedUrl, 'GET').done(function (data) {
              self.pokemons(data)});}


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