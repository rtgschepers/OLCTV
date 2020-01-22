@extends('admin.main')

@section('content')
    <form method="post" action="/admin/slides/edit/{{$slide->id}}" enctype="multipart/form-data">
        @csrf
        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <input type="hidden" id="dashboard_id" name="dashboard_id" value="{{$slide->dashboard_id}}">
                    <label for="id_placeholder">Select a dashboard</label>
                    <select class="form-control" id="id_placeholder" disabled>
                        @foreach($dashboards as $dashboard)
                            <option value="{{$dashboard->id}}"
                                    @if($slide->dashboard_id == $dashboard->id) selected @endif
                            >{{$dashboard->name}}
                                @if(auth()->user()->default_dashboard == $dashboard->id) (Default) @endif
                            </option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label for="short_desc">Short description of slide</label>
                    <input type="text" class="form-control" name="short_desc" id="short_desc"
                           value="{{$slide->short_desc}}" minlength="10" maxlength="50" required>
                </div>
                <div class="form-group">
                    <label for="display_time">Display time (<i>in seconds</i>)</label>
                    <input type="number" class="form-control" name="display_time" id="display_time"
                           value="{{$slide->display_time}}">
                </div>

                @include('layouts.partials.errors')

                <a href="/admin/slides" class="btn btn-danger">Cancel</a>
                <button class="btn btn-success" type="submit">Save slide</button>

            </div>
            <div class="col-sm-8">
                <div class="form-group">
                    <label for="image_source">Slide image</label><br>
                    <img src="{{$slide->image_source}}" id="preview" alt="Logo preview" class="img-thumbnail" style="height:500px;">
                    <small class="form-text text-muted">Image will scale to 1920x1080 on dashboard.</small>
                    <br>
                    <input type="file" class="form-control-file" name="image_source" id="image_source"
                           accept="image/jpeg,image/png,image/gif" onchange="previewFile()">
                </div>
            </div>
        </div>
    </form>
@stop

@section('custom-scripts')
    <script>
        function previewFile() {
            const preview = document.getElementById("preview");
            const file = document.getElementById("image_source").files[0];
            const reader = new FileReader();

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