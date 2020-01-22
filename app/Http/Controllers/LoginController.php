<?php

namespace App\Http\Controllers;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function index()
    {
        return view('login.form');
    }

    public function login()
    {
        $this->validate(request(), [
            'email' => 'email|required',
            'password' => 'required'
        ]);

        $credentials = [
            'email' => request('email'),
            'password' => request('password')
        ];

        if (!auth()->attempt($credentials, true)) {
            return back()->withErrors([
                'message' => 'Credentials not found in database'
            ])->withInput();
        }

        return redirect('/');
    }

    public function logout()
    {
        auth()->logout();
        return redirect('login');
    }
}