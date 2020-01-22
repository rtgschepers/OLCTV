@extends('admin.main')

@section('content')
    <div class="row">
        <div class="col-sm-6">
            <h5>Your information</h5>
            <hr>
            <form method="post" action="/admin/account/update">
                @csrf
                <label for="first_name">Full name</label>
                @csrf
                <div class="form-group">
                    <div class="form-row">
                        <div class="col">
                            <input type="text" class="form-control" name="first_name" id="first_name"
                                   value="{{auth()->user()->first_name}}" required disabled>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" name="last_name" id="last_name"
                                   value="{{auth()->user()->last_name}}" required disabled>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" class="form-control" id="email" name="email" value="{{auth()->user()->email}}"
                           required disabled>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" name="password" placeholder="Hidden"
                           disabled>
                </div>

                @include('layouts.partials.errors')

                <button type="button" class="btn btn-primary" id="change-info">Change</button>
                <button type="button" class="btn btn-danger" id="cancel-info" style="display: none">Cancel</button>
                <input type="submit" class="btn btn-success" id="save-info" style="display: none" value="Save changes">
            </form>
        </div>
        <div class="col-sm-6">
            <h5>Select your default dashboard</h5>
            <hr>
            @if(count($dashboards ) > 0)
                <form method="post" action="/admin/account/set-default">
                    @csrf
                    <div class="form-group">
                        <label for="default_dashboard">Your dashboards:</label>
                        <select class="form-control" id="dashboard_id" name="dashboard_id" required>
                            @foreach($dashboards as $dashboard)
                                <option value="{{$dashboard->id}}"
                                        @if(auth()->user()->default_dashboard == $dashboard->id) selected @endif
                                >{{$dashboard->name}}
                                    @if(auth()->user()->default_dashboard == $dashboard->id) (Default) @endif
                                </option>
                            @endforeach
                        </select>
                    </div>
                    <input type="hidden" name="user_id" value="{{auth()->user()->id}}">

                    @include('layouts.partials.errors')

                    <input type="submit" class="btn btn-success" id="save-default-dashboard"
                           value="Save default dashboard">
                </form>
            @else
                <p>You have no dashboards yet.<br>
                    Click <a href="/admin/dashboards">here</a> to create one.</p>
            @endif
        </div>
    </div>
@stop