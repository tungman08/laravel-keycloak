const mix = require('laravel-mix');

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

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.vue', '.json', 'htm', 'scss'],
    alias: {
      '@': path.resolve(__dirname, 'resources/client/')
    }
  },
  output: {
    chunkFilename: '[name].js',
  }
});

mix.js('resources/client/app.js', 'public/js')
  .extract(['vue'])
  .sourceMaps();
mix.sass('resources/sass/app.scss', 'public/css')
  .sourceMaps();

if (mix.inProduction()) {
  mix.version();
}

mix.copyDirectory('resources/images', 'public/images');

mix.browserSync({ 
  proxy: 'http://localhost:8000',
  notify: false,
  open: false
});
