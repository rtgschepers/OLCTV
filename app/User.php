<?php

namespace App;

use Illuminate\Support\Facades\DB;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'password', 'default_dashboard'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function dashboards()
    {
        return $this->hasMany(Dashboard::class);
    }

    public static function create()
    {
        $data = [
            'first_name' => trim(request('first_name')),
            'last_name' => trim(request('last_name')),
            'email' => trim(request('email')),
            'password' => bcrypt(request('password'))
        ];

        $data['api_key'] = Helpers::generateRandomString(32);
        DB::table('users')->insert($data);
    }

    public static function edit($user)
    {
        $user->update([
            'first_name' => request('first_name'),
            'last_name' => request('last_name'),
            'email' => request('email')
        ]);

        if (request('password')) {
            $user->update([
                'password' => bcrypt(request('password'))
            ]);
        }
    }
}
