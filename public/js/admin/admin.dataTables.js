$(document).ready(function () {
    fetch(`https://olctv.nl/api/<?=$page?>/all/{{auth()->user()->api_key}}`)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data);
            data = toArray(data);
            console.log(data);
            $('#dataTable').DataTable({
                data: data,
                columns: [
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
            elem.actions="<a href='#' class='btn btn-info btn-sm' style='margin-right: 0.75rem;'><i class='fas fa-edit'></i> Edit</a>" +
                "<a href='/account' class='btn btn-danger btn-sm'><i class='fas fa-trash'></i> Delete</a>";
            obj[key] = Object.values(elem);
        });
        return obj;
    }
});