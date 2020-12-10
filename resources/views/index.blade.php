<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <base href="/" />

    <title>Laravel App</title>
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="stylesheet" href="/css/app.css">
  </head>
  <body class="antialiased">
    <noscript>
      <strong>We're sorry but this app doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <main id="app">
      <router-view></router-view>
    </main>

    <script src="/js/manifest.js"></script>
    @if (App::environment('local'))
    <script src="/js/vendor.js"></script>
    <script src="/js/app.js"></script>
    @else
    <script src="{{ mix('/js/vendor.js') }}"></script>
    <script src="{{ mix('/js/app.js') }}"></script>
    @endif
  </body>
</html>
