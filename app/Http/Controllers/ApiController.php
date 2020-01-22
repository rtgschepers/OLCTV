<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

use \App\User;
use \App\Dashboard;
use \App\Slide;

class ApiController extends Controller
{
    private $user;

    public function __construct()
    {
        $this->user = User::where('api_key', request('key'))->first();
        if (!$this->user)
            $this->raise();
    }

    public function getAllUsers()
    {
        if (!($this->user->level >= 9))
            $this->raise();

        return $users = User::select('id', DB::raw('CONCAT(first_name, " ", last_name) AS name'), 'email','level')->get();
    }

    public function getDashboards()
    {
        return $this->user->dashboards()->select('id', 'name', 'type', 'display_time', 'logo')->get();
    }

    public function getAllDashboards()
    {
        if (!($this->user->level >= 9))
            $this->raise();

        return Dashboard::select('dashboards.id', 'name', 'email', 'type', 'display_time', 'logo')
            ->join('users', 'users.id', '=', 'user_id')->get();
    }

    public function getSlides()
    {
        $slides = [];
        foreach($this->user->dashboards as $dashboard){
            foreach($dashboard->slides as $slide)
            array_push($slides, $slide);
        }
        return Slide::select('slides.id', 'name', 'short_desc', 'slides.display_time', 'image_source')
            ->join('dashboards', 'dashboards.id', '=', 'dashboard_id')
            ->where('user_id', $this->user->id)
            ->get();
    }

    public function getAllSlides()
    {
        if (!($this->user->level >= 9))
            $this->raise();

        return Slide::select('slides.id', 'name', 'short_desc', 'slides.display_time', 'image_source')
            ->join('dashboards', 'dashboards.id', '=', 'dashboard_id')
            ->get();
    }
}