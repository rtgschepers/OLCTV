<?php

namespace App\Http\Controllers;

use App\Dashboard;
use Illuminate\Support\Facades\File;

class DashboardController extends Controller
{
    function __construct()
    {
        $this->middleware('auth');
    }

    // Display on front page
    function index(Dashboard $dashboard = null)
    {
        if($dashboard) {
            if (auth()->user()->level < 9 && !auth()->user()->dashboards->contains($dashboard))
                $this->raise();
        }
        else {
            $dashboard = Dashboard::find(auth()->user()->default_dashboard);
        }

        if ($dashboard)
            $slides = $dashboard->slides;
        else
            $slides = null;

        $view = $dashboard ? 'dashboard_' . $dashboard->type : 'dashboard_b';
        return view($view, compact('dashboard', 'slides'));
    }

    /* Admin functions below */
    public function show()
    {
        return view('admin.dashboards.dashboards');
    }

    public function create()
    {
        return view('admin.dashboards.create');
    }

    public function edit(Dashboard $dashboard)
    {
        if (auth()->user()->level < 9 && !auth()->user()->dashboards->contains($dashboard))
            $this->raise();

        return view('admin.dashboards.edit', compact('dashboard'));
    }

    public function store()
    {
        $this->validate(request(), [
            'name' => 'required|min:3|max:191',
            'display_time' => 'required|integer|between:30,3600',
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        Dashboard::create();

        return redirect('/admin/dashboards');
    }

    public function update(Dashboard $dashboard)
    {
        // Check if the dashboard being edited belongs to the logged in user if he's not an admin.
        if (auth()->user()->level < 9 && !auth()->user()->dashboards->contains($dashboard))
            $this->raise();

        $this->validate(request(), [
            'name' => 'required|min:3|max:191',
            'display_time' => 'required|integer|between:30,3600',
        ]);

        if (request('logo')) {
            $this->validate(request(), [
                'logo' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);
        }

        Dashboard::edit($dashboard);

        return redirect('/admin/dashboards');
    }

    public function delete(Dashboard $dashboard)
    {
        // Check if the dashboard being deleted belongs to the logged in user if he's not an admin.
        if (auth()->user()->level < 9 && !auth()->user()->dashboards->contains($dashboard))
            $this->raise();

        $dir = sprintf("../public_html/img/%s/%s", auth()->user()->id, $dashboard->id);
        if (File::deleteDirectory($dir))
            $dashboard->delete();

        return back();
    }
}
