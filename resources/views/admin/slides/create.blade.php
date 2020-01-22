@extends('admin.main')

@section('content')
    <form method="post" action="/admin/slides/create" enctype="multipart/form-data">
        @csrf
        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="dashboard_id">Select a dashboard</label>
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
                <div class="form-group">
                    <label for="short_desc">Short description of slide</label>
                    <input type="text" class="form-control" name="short_desc" id="short_desc"
                           placeholder="Enter short description" minlength="10" maxlength="50" required>
                </div>
                <div class="form-group">
                    <label for="display_time">Display time (<i>in seconds</i>)</label>
                    <input type="number" class="form-control" name="display_time" id="display_time"
                           placeholder="Enter display time">
                </div>

                @include('layouts.partials.errors')

                <a href="/admin/slides" class="btn btn-danger">Cancel</a>
                <button class="btn btn-success" type="submit">Save slide</button>

            </div>
            <div class="col-sm-8">
                <div class="form-group">
                    <label for="image_source">Slide image</label><br>
                    <img src="" id="preview" alt="Logo preview" class="img-thumbnail" style="height:500px;">
                    <small class="form-text text-muted">Image will scale to 1920x1080 on dashboard.</small>
                    <br>
                    <input type="file" class="form-control-file" name="image_source" id="image_source"
                           accept="image/jpeg,image/png,image/gif" onchange="previewFile()" required>
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