@extends('admin.main')

@section('content')
    <div class="row">
        <div class="col-md-4">
            <form method="post" action="/admin/users/create">
                @csrf
                <div class="form-group">
                    <label for="first_name">Full name</label>
                    <div class="form-row">
                        <div class="col">
                            <input type="text" class="form-control" name="first_name" placeholder="First name">
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" name="last_name" placeholder="Last name">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" name="email" id="email" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" name="password" id="password">
                </div>

                @include('layouts.partials.errors')

                <a href="/admin/users" class="btn btn-danger">Cancel</a>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>

@stop