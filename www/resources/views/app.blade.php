<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <title>Laravel / VueJS</title>
    </head>
    <body>
        <div id="app">
            Wait it is loading
        </div>

        <script defer src="{{ mix('js/main.js') }}"></script>
    </body>
</html>
