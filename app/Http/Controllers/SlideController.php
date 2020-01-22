<?php

namespace App\Http\Controllers;

use App\Dashboard;
use App\Slide;
use Illuminate\Support\Facades\File;

class SlideController extends Controller
{
    function __construct()
    {
        $this->middleware('auth');
    }

    public function show()
    {
        return view('admin.slides.slides');
    }

    public function create()
    {
        $dashboards = auth()->user()->dashboards;
        return view('admin.slides.create', compact('dashboards'));
    }

    public function edit(Slide $slide)
    {
        $dashboards = auth()->user()->dashboards;
        return view('admin.slides.edit', compact('dashboards', 'slide'));
    }

    public function store()
    {
        $this->validate(request(), [
            'dashboard_id' => 'required',
            'short_desc' => 'required|min:10|max:50',
            'display_time' => 'required|integer|between:10,120',
            'image_source' => 'required|mimes:jpeg,png,jpg,gif|max:5120',
        ]);

        Slide::create();
        return redirect('/admin/slides');
    }

    public function update(Slide $slide)
    {
        // Check if the slide being changed belongs to a dashboard that belongs to the logged in user if he's not an admin
        if (auth()->user()->level < 9 && !auth()->user()->dashboards->contains($slide->dashboard))
            $this->raise();

        $this->validate(request(), [
            'short_desc' => 'required|min:10|max:191',
            'display_time' => 'required|integer|between:10,120',
        ]);

        // Check if the dashboard with the supplied id belongs to the logged in user if he's not an admin
        if (auth()->user()->level < 9 && !auth()->user()->dashboards->contains(Dashboard::find(request('dashboard_id'))))
            $this->raise();

        if (request('image_source')) {
            $this->validate(request(), [
                'image_source' => 'image|mimes:jpeg,png,jpg,gif|max:5120',
            ]);
        }

        Slide::edit($slide);

        return redirect('/admin/slides');
    }

    public function delete(Slide $slide)
    {
        // Check if the slide being deleted belongs to a dashboard that belongs to the logged in user if he's not an admin
        if (auth()->user()->level < 9 && !auth()->user()->dashboards->contains($slide->dashboard))
            $this->raise();

        $path = sprintf("../public_html/" . $slide->image_source);
        if (File::delete($path))
            $slide->delete();

        return back();
    }

}