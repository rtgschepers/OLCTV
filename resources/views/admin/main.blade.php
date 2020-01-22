<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>OLCTV - Admin</title>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
          integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <link href="{{asset('css/admin/bootstrap.css')}}" rel="stylesheet">
    <link href="{{asset('css/admin/dataTables.css')}}" rel="stylesheet">
    <link href="{{asset('css/admin/admin.css')}}" rel="stylesheet">
    <link href="{{asset('css/admin/custom.css')}}" rel="stylesheet">
</head>

<body class="fixed-nav sticky-footer bg-dark" id="page-top">
<!-- MENUS-->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <!-- BRAND -->
    <a class="navbar-brand" href="/">OLCTV</a>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <!-- SIDE MENU -->
        <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">


            <li class="list-group-head nav-link-text">Account</li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Your account">
                <a class="nav-link" href="/admin/account">
                    <i class="menu-icon fas fa-user"></i>
                    <span class="nav-link-text">Your account
                        @if(in_array('account', $crumbs))
                            <i class="menu-icon active fas fa-angle-right"></i>
                        @endif
                    </span>
                </a>
            </li>
            <li class="list-group-head nav-link-text">Pages</li>
            @if(auth()->user()->level == 9)
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Users">
                    <a class="nav-link" href="/admin/users">
                        <i class="menu-icon fas fa-users"></i>
                        <span class="nav-link-text">Users
                            @if(in_array('users', $crumbs))
                                <i class="menu-icon active fas fa-angle-right"></i>
                            @endif
                        </span>
                    </a>
                </li>
            @endif
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboards">
                <a class="nav-link" href="/admin/dashboards">
                    <i class="menu-icon fas fa-tachometer-alt"></i>
                    <span class="nav-link-text">Dashboards
                        @if(in_array('dashboards', $crumbs))
                            <i class="menu-icon active fas fa-angle-right"></i>
                        @endif
                    </span>
                </a>
            </li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Slides">
                <a class="nav-link" href="/admin/slides">
                    <i class="menu-icon fas fa-images"></i>
                    <span class="nav-link-text">Slides
                        @if(in_array('slides', $crumbs))
                            <i class="menu-icon active fas fa-angle-right"></i>
                        @endif
                    </span>
                </a>
            </li>
            <li class="list-group-head nav-link-text">Other</li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Logout">
                <a class="nav-link" data-toggle="modal" data-target="#logoutModal">
                    <i class="menu-icon fas fa-sign-out-alt"></i>
                    <span class="nav-link-text">Logout</span>
                </a>
            </li>
        </ul>
        <ul class="navbar-nav sidenav-toggler">
            <li class="nav-item">
                <a class="nav-link text-center" id="sidenavToggler">
                    <i class="fa fa-fw fa-angle-left"></i>
                </a>
            </li>
        </ul>

        <!-- MENU TOP RIGHT -->
        <ul class="navbar-nav ml-auto">
            <li class="nav-item nav-link">Welcome, {{auth()->user()->first_name}} {{auth()->user()->last_name}}</li>
        </ul>
    </div>
</nav>
<div class="content-wrapper">
    <div class="container-fluid">
        <!-- BREADCRUMBS -->
    {{--<ol class="breadcrumb">--}}
    {{--<li class="breadcrumb-item">--}}
    {{--<a href="/admin">Dashboard</a>--}}
    {{--</li>--}}
    {{--</ol>--}}

    <!-- PAGE INCLUDER -->
        <div class="card">
            <div class="card-header">
                {!! \App\Helpers::breadcrumbs($crumbs) !!}
            </div>
            <div class="card-body">
                @yield('content')
            </div>
        </div>
    </div>

    <!-- FOOTER -->
    <footer class="sticky-footer">
        <div class="container">
            <div class="text-center">
                <small>Copyright &copy; Rick Schepers 2018</small>
            </div>
        </div>
    </footer>

    <!-- LOGOUT MODAL -->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="logoutModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="logoutModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="/logout">Logout</a>
                </div>
            </div>
        </div>
    </div>

    <!-- SCRIPTS -->
    <script src="{{asset('js/admin/jquery.js')}}"></script>
    <script src="{{asset('js/admin/bootstrap.js')}}"></script>
    <script src="{{asset('js/admin/jquery.easing.js')}}"></script>
    <script src="{{asset('js/admin/jquery.dataTables.js')}}"></script>
    <script src="{{asset('js/admin/bootstrap.dataTables.js')}}"></script>
    <script src="{{asset('js/admin/admin.js')}}"></script>
    <script src="{{asset('js/admin/custom.js')}}"></script>

    @yield('custom-scripts')
</div>
</body>

</html>
