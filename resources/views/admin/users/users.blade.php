@extends('admin.main')

@section('content')
    <a href="/admin/users/create" class="btn btn-light">
        <li class="fas fa-plus"></li>
        Add User</a>
    <hr>
    <table class="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0"
           role="grid" aria-describedby="dataTable_info" style="width: 100%;">
    </table>
@stop

@section('custom-scripts')
    <script>
        $(document).ready(function () {
            fetch(`https://olctv.nl/api/<?=$crumbs[1]?>/all/{{auth()->user()->api_key}}`)
                    .then((resp) => {
                        return resp.json();
                    })
                    .then((data) => {
                        data = toArray(data);
                        console.log(data);
                        $('#dataTable').DataTable({
                            data: data,
                            columns: [
                                {title: "ID"},
                                {title: "Name"},
                                {title: "Email"},
                                {title: "Level"},
                                {
                                    title: "Actions",
                                    orderable: false
                                }
                            ]
                        });
                    });

            function toArray(obj) {
                obj.forEach((elem, key) => {
                    console.log(elem.level);
                    // Users with a level of 6 or above can't be directly edited or deleted
                    if (elem.level < 6) {
                        elem.actions = "" +
                                '<a href="/admin/users/edit/'+elem.id+'" class="btn btn-info btn-sm"><i class="fas fa-edit"></i> Edit</a>' +
                                '<a href="/admin/users/delete/'+elem.id+'" onclick="return confirm(`Are you sure?`)" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i> Delete</a>';

                    } else {
                        elem.actions = "";
                    }
                    obj[key] = Object.values(elem);
                });
                return obj;
            }
        });
    </script>
@stop