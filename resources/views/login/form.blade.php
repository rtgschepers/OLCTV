@extends('layouts.main')

@section('page_styles')
    <link rel="stylesheet" href="{{asset('css/signin.css')}}">
@stop

@section('content')
    <form class="form-signin" method="post" action="/login">
        @csrf
        <img class="mb-4" src="{{asset('img/OLC-LOGO-KLEUR.png')}}" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal">Sign in please</h1>

        <label for="email" class="sr-only">Email address</label>
        <input type="email" id="email" name="email" class="form-control" placeholder="Email address" required autofocus>

        <label for="password" class="sr-only">Password</label>
        <input type="password" id="password" name="password" class="form-control" placeholder="Password" required>

        @include('layouts.partials.errors')

        <a href="#resetModal" class="d-block text-left" style="margin-bottom: 5px;"
           data-toggle="modal" data-target="#resetModal">Forgot password?</a>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

        <p class="mt-5 mb-3 text-muted">Copyright &copy; Rick Schepers 2018 - <?=date('Y');?></p>
    </form>

    <!-- FORGOT PASSWORD MODAL -->
    <div class="modal fade" id="resetModal" role="dialog" aria-labelledby="resetModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="resetModalLabel">Forgot password?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Please contact your OLCTV administrator.</p>
                    <p>They can send you a new password, which you can change later.</p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" type="button" data-dismiss="modal">Ok</button>
                </div>
            </div>
        </div>
    </div>

@stop