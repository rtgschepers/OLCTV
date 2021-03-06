@extends('admin.main')

@section('content')
    <a href="/admin/dashboards/create" class="btn btn-light">
        <li class="fas fa-plus"></li>
        Create Dashboard</a>
    <hr>
    <table class="table table-bordered dataTable dashboardsTable" id="dataTable" width="100%" cellspacing="0"
           role="grid" aria-describedby="dataTable_info" style="width: 100%;">
    </table>
@stop

@section('custom-scripts')
    <script>
        $(document).ready(function () {
            let url = `https://olctv.nl/api/<?=$crumbs[1]?>/`;
            @if(auth()->user()->level >= 9)
                url += `all/`;
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
                            {title: "ID"},
                            {title: "Dashboard name"},
                                @if(auth()->user()->level >= 9)
                            {
                                title: "Belongs to"
                            },
                                @endif
                            {
                                title: "Type"
                            },
                            {title: "Display Time"},
                            {
                                title: "Logo",
                                orderable: false
                            },
                            {
                                title: "Actions",
                                orderable: false
                            }
                        ]
                    });
                });

            function toArray(obj) {
                obj.forEach((elem, key) => {
                    elem.logo = "<img src='" + elem.logo + "' class='img-thumbnail' style='height:90px;'>";
                    elem.actions = "" +
                        '<a href="/admin/dashboards/edit/' + elem.id + '" class="btn btn-info btn-sm"><i class="fas fa-edit"></i> Edit</a>' +
                        '<a href="/admin/dashboards/delete/' + elem.id + '" onclick="return confirm(`This will also delete all the slides that belong to this dashboard.\n' +
                        'Are you sure you want to delete dashboard ' + elem.name + '?`)" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i> Delete</a>' +
                        '<br><a href="/' + elem.id + '" target="_blank" class="btn btn-primary btn-sm"><i class="fas fa-external-link-alt"></i> View dashboard</a>';
//                    delete elem.id;
                    obj[key] = Object.values(elem);
                });
                return obj;
            }
        })
        ;
    </script>
@stop