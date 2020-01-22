<?php

namespace App;

use Illuminate\Support\Facades\File;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Slide extends Model
{
    protected $fillable = [
        'dashboard_id', 'short_desc', 'display_time', 'image_source'
    ];

    public function dashboard()
    {
        return $this->belongsTo(Dashboard::class);
    }

    public static function create()
    {
        $data = [
            'dashboard_id' => request('dashboard_id'),
            'short_desc' => trim(request('short_desc')),
            'display_time' => trim(request('display_time')),
        ];

        $id = DB::Table('slides')->insertGetID($data);

        Slide::saveImage($id);
    }

    public static function edit($slide)
    {
        $slide->update([
            'short_desc' => trim(request('short_desc')),
            'display_time' => trim(request('display_time')),
        ]);

        if(request('image_source')) {
            if(File::delete("../public_html/" . $slide->image_source))
                Slide::saveImage($slide->id);
            else
                dd("Contact system administrator");
        }
    }

    private static function saveImage($id)
    {
        $slide = Slide::find($id);
        $target_dir = "img/" . auth()->user()->id . "/" . $slide->dashboard_id;

        $img_name = "slide-" . $id . "-source.". request('image_source')->getClientOriginalExtension();
        request('image_source')->move($target_dir, $img_name);

        $slide->update([
            'image_source' => "/" . $target_dir . "/" . $img_name
        ]);
    }
}
