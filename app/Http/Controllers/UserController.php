<?php

namespace App\Http\Controllers;

use \App\User;

class UserController extends Controller
{
    function __construct()
    {
        $this->middleware('auth');
        $this->middleware('admin');
    }

    public function show()
    {
        return view('admin.users.users');
    }

    public function create()
    {
        return view('admin.users.create');
    }

    public function edit(User $user)
    {
        return view('admin.users.edit', compact('user'));
    }

    public function store()
    {
        $this->validate(request(), [
            'first_name' => 'required|min:2|max:191',
            'last_name' => 'required|min:2|max:191',
            'email' => 'required|email|unique:users|max:191',
            'password' => 'required|min:6|max:191',
        ]);

        User::create();

        return redirect('/admin/users');
    }

    public function update(User $user)
    {
        $this->validate(request(), [
            'first_name' => 'required|min:2|max:191',
            'last_name' => 'required|min:2|max:191',
            'email' => 'required|email|max:191'
        ]);

        if (request('password')) {
            $this->validate(request(), [
                'password' => 'required|min:6|max:191'
            ]);
        }

        User::edit($user);

        return redirect('/admin/users');
    }

    public function delete(User $user)
    {
        $user->delete();

        return back();
    }
}