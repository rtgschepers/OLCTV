@extends('admin.main')

@section('content')
    <div class="row">
        <div class="col-sm-4">
            <form method="post" action="/admin/dashboards/edit/{{$dashboard->id}}" enctype="multipart/form-data">
                @csrf
                <div class="form-group">
                    <label for="name">Dashboard name</label>
                    <input type="text" class="form-control" name="name" id="name" value="{{$dashboard->name}}">
                </div>
                <div class="form-group">
                    <label for="display_time">Display time (<i>in seconds</i>)</label>
                    <input type="number" class="form-control" name="display_time" id="display_time"
                           value="{{$dashboard->display_time}}">
                </div>
                <div class="form-group">
                    <label for="logo">Dashboard logo</label><br>
                    <img src="{{$dashboard->logo}}" id="preview" class="img-thumbnail" style="height:90px;">
                    <small class="form-text text-muted">Logo will fit to scale on actual dashboard.</small><br>
                    <input type="file" class="form-control-file" name="logo" id="logo" accept="image/jpeg,image/png,image/gif" onchange="previewFile()">
                </div>

                @include('layouts.partials.errors')

                <a href="/admin/dashboards" class="btn btn-danger">Cancel</a>
                <button class="btn btn-success" type="submit">Save changes</button>
            </form>
        </div>
    </div>
@stop

@section('custom-scripts')
    <script>
        function previewFile() {
            const preview = document.getElementById("preview");
            const file    = document.getElementById("logo").files[0];
            const reader  = new FileReader();

            reader.onloadend = function () {
                preview.src = reader.result;
            };

            if (file) {
                reader.readAsDataURL(file);
            } else {
                preview.src = "";
            }
        }
    </script>
@stop