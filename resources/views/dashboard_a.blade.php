<html>
<head>
    <meta charset="UTF-8">
    <title>My Page</title>
    <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta name="base_url" content="{{ URL::to('/') }}">

    <!-- Common styles -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">

    <!-- Page specific styles -->
    <link rel="stylesheet" href="{{URL::asset('css/dashboard.css')}}">
</head>
<body id="fullscreen">
@if(!$dashboard)
    <p>Please set a default dashboard in the <a href="/admin">Admin panel</a></p>
@else
    <div id="dashboard" class="active slide"  data-time="{{$dashboard->display_time}}">
        <!-- FIRST COL -->
        <div class="col-sm-3">
            <!-- DATE TIME -->
            <div id="datetime" class="block fill">
                <div id="datetime-inner">
                    <h1 id="time"></h1>
                    <h2 id="date"></h2>
                </div>
            </div>
            <!-- NO FOOD -->
            <div id="flipper" class="flipper">
                <div id="no-food" class="block front">
                    <img src="img/verboden-te-eten.png" alt="Eten en drinken verboden"/>
                    <h2>ETEN EN DRINKEN VERBODEN</h2>
                </div>
                <div id="camera-surveillance" class="block back">
                    <img src="img/camera-toezicht.png" alt="Camera toezicht in het OLC"/>
                </div>
            </div>
            <!-- WEATHER -->
            <div id="weather" class="block">
                <h2>DOETINCHEM, GE</h2>
                <div id="temperature">
                    <canvas id="icon" width="128" height="128"></canvas>
                    <h1 id="temp">&deg;</h1>
                </div>
                <h4 id="summary"></h4>
                <div id="forecast">
                </div>
            </div>
        </div>
        <!-- SECOND COL -->
        <div class="col-sm-3">
            <!-- NU.NL -->
            <div id="nu" class="block">
                <h3>NU - Algemeen</h3>
                <hr>
                <div class="scroll">
                    <div id="nu-stories">

                    </div>
                </div>
            </div>
            <!-- BUS DTC GRA -->
            <div id="DtcGra" class="block fill">
                <h3>Bussen Graafschap College</h3>
                <hr/>
                <table id="DtcGra-departures" class="schedule bus">
                </table>
            </div>
        </div>
        <!-- THIRD COL -->
        <div class="col-sm-3">
            <!-- TRAIN DTC STA -->
            <div id="train-dtc" class="block">
                <h3>Treinen Station Doetinchem</h3>
                <hr/>
                <table id="train-dtc-departures" class="schedule train"></table>
            </div>
            <!-- BUS DTC STA -->
            <div id="DtcSta" class="block fill">
                <h3>Bussen Station Doetinchem</h3>
                <hr/>
                <table id="DtcSta-departures" class="schedule bus">

                </table>
            </div>
        </div>
        <!-- FOURTH COL -->
        <div class="col-sm-3">
            <!-- TWEAKERS -->
            <div id="tweakers" class="block fill">
                <h3>Tweakers Nieuws</h3>
                <hr>
                <div class="scroll">
                    <div id="tweakers-stories">
                        <div class="story">
                            <h4>ANWB: elektrisch rijden is tien procent duurder dan op benzine</h4>
                            <p>Het rijden met een elektrische auto is per kilometer tien procent duurder dan met een
                                bezineauto. Dat claimt de ANWB op basis van onderzoek in zijn Elektrisch Rijden Monitor,
                                waarin de organisatie voor het eerst de kosten van elektrisch rijden noemt.</p>
                            <span>Ma, 04 dec 2017 14:37</span>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- SLIDES -->
    @foreach($slides as $slide)
        @include('admin.slides.slide')
    @endforeach
@endif
<footer>
    <!-- Common scripts -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
            integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
            crossorigin="anonymous"></script>

    <script src="{{asset('skycons/skycons.js')}}"></script>
    <script src="{{asset('js/dashboard/dashboard.js')}}"></script>
</footer>

@section('page_scripts')
@stop

</body>
</html>