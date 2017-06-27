require.config({
    baseUrl: 'js/lib',
    paths: {
        'jquery': 'jquery-1.9.1.min',
        'jquery-ui': 'jquery-ui.min',
        'util': '../helper/util',
        'pageInit': '../pageInit',
        'modules': '../modules'
    }
})

require(['pageInit'], function(setup){
})