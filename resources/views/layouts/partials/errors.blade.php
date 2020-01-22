@if($errors->any())
    <div class="form-group">
        <div class="alert alert-danger" role="alert">
            <ul style="margin-bottom: 0;">
                @foreach($errors->all() as $error)
                    <li>{{$error}}</li>
                @endforeach
            </ul>
        </div>
    </div>
@endif