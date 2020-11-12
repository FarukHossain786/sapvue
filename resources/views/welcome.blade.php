<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">


        <link href="{{ URL::asset('css/app.css') }}" rel="stylesheet" type="text/css" >
        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    </head>
    <body>
        <div id="app">
            <main-app/> 
        </div>
       
    </body>
    <script type="text/javascript" src="{{ URL::asset('js/app.js') }}"></script>
</html>
