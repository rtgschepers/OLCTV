<?php

namespace App\Http\Controllers;

use App\User;

class AccountController extends Controller
{
    function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return redirect('/admin/account');
    }

    public function account()
    {
        $dashboards = auth()->user()->dashboards()->get();
        return view('admin.pages.account', compact('dashboards'));
    }

    public function update()
    {
        $this->validate(request(), [
            'first_name' => 'required|min:2|max:191',
            'last_name' => 'required|min:2|max:191',
            'email' => 'required|email|max:191'
        ]);

        if(request('password')) {
            $this->validate(request(), [
                'password' => 'required|min:6|max:191'
            ]);
        }

        User::edit(auth()->user());

        return back();
    }

    public function setDefaultDashboard()
    {
        $this->validate(request(), [
            'dashboard_id' => 'required'
        ]);

        auth()->user()->update([
            'default_dashboard' => request('dashboard_id')
        ]);

        return back();
    }
}