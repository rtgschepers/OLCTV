<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class Dashboard extends Model
{
    protected $fillable = [
        'name', 'type', 'logo', 'display_time'
    ];

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($dashboard) {
            $dashboard->slides()->delete();
        });
    }

    public function slides()
    {
        return $this->hasMany(Slide::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public static function create()
    {
        $data = [
            'user_id' => auth()->user()->id,
            'name' => request('name'),
            'type' => 'b',
            'display_time' => request('display_time')
        ];

        $id = DB::Table('dashboards')->insertGetID($data);

        Dashboard::saveLogo($id);
    }

    public static function edit($dashboard)
    {
        $dashboard->update([
            'name' => request('name'),
            'display_time' => request('display_time')
        ]);

        if (request('logo')) {
            if (File::delete("../public_html/" . $dashboard->logo))
                Dashboard::saveLogo($dashboard->id);
            else
                dd("Contact system administrator");
        }
    }

    private static function saveLogo($id)
    {
        $img_path = "img/" . auth()->user()->id . "/" . $id;

        $img_name = "dashboard-" . $id . "-logo." . request('logo')->getClientOriginalExtension();
        request('logo')->move($img_path, $img_name);

        Dashboard::find($id)->update([
            'logo' => "/" . $img_path . "/" . $img_name
        ]);
    }
}
