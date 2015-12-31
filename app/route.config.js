System.register(['./hero.component', './hero-detail.component', './dashboard.component'], function(exports_1) {
    var hero_component_1, hero_detail_component_1, dashboard_component_1;
    var APP_ROUTES;
    return {
        setters:[
            function (hero_component_1_1) {
                hero_component_1 = hero_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            }],
        execute: function() {
            exports_1("APP_ROUTES", APP_ROUTES = [
                { path: '/', redirectTo: ['Dashboard'] },
                { path: '/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
                { path: '/heroes', name: 'Heroes', component: hero_component_1.HeroComponent },
                { path: '/detail/:id', name: 'HeroDetail', component: hero_detail_component_1.HeroDetailComponent }
            ]);
        }
    }
});
//# sourceMappingURL=route.config.js.map