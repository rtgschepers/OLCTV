<html>
<head>
    <meta charset="UTF-8">
    <title>My Page</title>
    <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta name="base_url" content="{{ URL::to('/') }}">

    <!-- Common styles -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">

    <!-- Page specific styles -->
    <link rel="stylesheet" href="{{URL::asset('css/dashboard_b.css')}}">
</head>
<body id="fullscreen">
@if(!$dashboard)
    <p>Please set a default dashboard in the <a href="/admin">Admin panel</a></p>
@else
    <div id="dashboard" class="active slide" data-time="{{$dashboard->display_time}}">
        <!-- FIRST COL -->
        <div class="col-sm-4">
            <!-- NU.NL -->
            <div id="nu" class="block half">
                <h3>NU - Algemeen</h3>
                <hr>
                <div class="scroll">
                    <div id="nu-stories">

                    </div>
                </div>
            </div>

            <!-- TRAIN DTC STA -->
            <div id="train-dtc" class="block half">
                <h3>Treinen Station Doetinchem</h3>
                <hr/>
                <table id="train-dtc-departures" class="schedule train"></table>
            </div>
        </div>

        <!-- SECOND COL -->
        <div class="col-sm-4">
            <!-- DATE TIME -->
            <div id="datetime" class="block quarter">
                <div id="datetime-inner">
                    <h1 id="time"></h1>
                    <h2 id="date"></h2>
                </div>
            </div>

            <!-- NO FOOD -->
            <div class="row quarter">
                <div class="col-sm-6 full">
                    <div class="block">
                        <img src="{{asset($dashboard->logo)}}" alt="{{$dashboard->short_desc}}" class="logo">
                    </div>
                </div>
                <div class="col-sm-6 full">
                    <div class="block">
                        <img src="/img/verboden-te-eten.png" alt="Verboden te eten" class="logo">
                    </div>
                </div>
            </div>
            <div class="row quarter">
                <div class="col-sm-6 full">
                    <div class="block">
                        <img src="/img/OLC_lamp_puzzelstukjes_mensen.png" alt="Lamp puzzelstukjes" class="logo">
                    </div>
                </div>
                <div class="col-sm-6 full">
                    <div class="block">
                        <img src="{{asset($dashboard->logo)}}" alt="{{$dashboard->short_desc}}" class="logo">
                    </div>
                </div>
            </div>

            <!-- WEATHER -->
            <div id="weather" class="block quarter">
                <div id="temperature">
                    <canvas id="icon" width="96" height="96"></canvas>
                    <h1 id="temp">&deg;</h1>
                    <h2 id="location">DOETINCHEM</h2>
                </div>
                <div id="forecast">
                </div>
            </div>
        </div>
        <!-- THIRD COL -->
        <div class="col-sm-4">
            <!-- BUS DTC GRA -->
            <div id="DtcGra" class="block half">
                <h3>Bussen Graafschap College</h3>
                <hr/>
                <table id="DtcGra-departures" class="schedule bus">
                </table>
            </div>

            <!-- BUS DTC STA -->
            <div id="DtcSta" class="block half">
                <h3>Bussen Station Doetinchem</h3>
                <hr/>
                <table id="DtcSta-departures" class="schedule bus">

                </table>
            </div>
        </div>
    </div>
    <!-- SLIDES -->
    @foreach($slides as $slide)
    @include('admin.slides.slide')
    @endforeach
    @endif
            <!-- FOOTER -->
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