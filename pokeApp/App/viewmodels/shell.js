define(['plugins/router', 'durandal/app'], function (router, app) {

    return {
        router: router,
        
        
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'species', title: 'Species', moduleId: 'viewmodels/species', nav: true },
                { route: 'species(/:id)', title: 'Species', moduleId: 'viewmodels/species', hash: '#species', nav: false },
                { route: 'specieDetails(/:id)', title: 'Specie Details', moduleId: 'viewmodels/specieDetails', hash: '#specieDetails', nav: false },
                { route: 'colors', title: 'Colors', moduleId: 'viewmodels/colors', nav: true },
                { route: 'tipos', title: 'Types', moduleId: 'viewmodels/Tipos', nav: true },
                { route: 'generations', title: 'Generations', moduleId: 'viewmodels/generations', nav: true },
                { route: 'habitat', title: 'Habitat', moduleId: 'viewmodels/habitat', nav: true },
                { route: 'pokemonDetails(/:id)', title: 'Pokemón Details', moduleId: 'viewmodels/pokemonDetails', hash: '#pokemonDetails', nav: false },     
                { route: 'pokemonByName(/:id)', title: 'Search', moduleId: 'viewmodels/pokemonByName', hash: '#pokemonByName', nav: true },
                { route: 'flickr', moduleId: 'viewmodels/flickr', nav: true },

            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});