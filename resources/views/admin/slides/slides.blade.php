@extends('admin.main')

@section('content')
    <a href="/admin/slides/create" class="btn btn-light">
        <li class="fas fa-plus"></li>
        Create Slide</a>
    <hr>
    <table class="table table-bordered dataTable slidesTable" id="dataTable" width="100%" cellspacing="0"
           role="grid" aria-describedby="dataTable_info" style="width: 100%;">
    </table>
@stop

@section('custom-scripts')
    <script>
        $(document).ready(function () {
            let url = "https://olctv.nl/api/<?=$crumbs[1]?>/";
            @if(auth()->user()->level >= 9)
                url += "all/";
            @endif
            fetch(url + `{{auth()->user()->api_key}}`)
                .then((resp) => {
                    return resp.json();
                })
                .then((data) => {
                    data = toArray(data);
                    $('#dataTable').DataTable({
                        data: data,
                        columns: [
                            {title: "Dashboard"},
                            {title: "Description"},
                            {title: "Display time"},
                            {
                                title: "Image",
                                orderable: false,
                                "width": "200px"
                            },
                            {
                                title: "Actions",
                                orderable: false
                            }
                        ]
                    });
                })
            ;

            function toArray(obj) {
                obj.forEach((elem, key) => {
                    elem.image_source = "<img src='" + elem.image_source + "' class='img-thumbnail' style='height:90px;'>";
                    elem.actions = "" +
                        '<a href="/admin/slides/edit/'+elem.id+'" class="btn btn-info btn-sm"><i class="fas fa-edit"></i> Edit</a>' +
                        '<a href="/admin/slides/delete/'+elem.id+'" onclick="return confirm(`Are you sure you want to delete this slide?`)"' +
                        ' class="btn btn-danger btn-sm"><i class="fas fa-trash"></i> Delete</a>';
                    delete elem.id;
                    obj[key] = Object.values(elem);
                })
                ;
                return obj;
            }
        });
    </script>
@stop