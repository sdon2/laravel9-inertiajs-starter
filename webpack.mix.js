const mix = require('laravel-mix');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.disableNotifications();

mix.js('resources/js/app.js', 'public/assets/build')
    .vue()
    .webpackConfig({
        plugins: [
            new CleanWebpackPlugin({
                dry: false,
                verbose: true,
                cleanOnceBeforeBuildPatterns: [
                    'assets/build/**/*'
                ],
            }),
        ],
    })
    .alias({
        '@': path.resolve('resources/js'),
        ziggy: path.resolve('vendor/tightenco/ziggy/dist/vue'),
    });

mix.css('resources/css/app.css', 'public/assets/build')
    .options({
        processCssUrls: false,
    });

if (mix.inProduction()) {
    mix.version();
}
