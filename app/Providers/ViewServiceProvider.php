<?php
/**
 * Created by PhpStorm.
 * User: Cylosix
 * Date: 12/06/2018
 * Time: 23:08
 */

namespace App\Providers;


use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{

    public function boot()
    {
        view()->composer('*', function($view){
            $crumbs = collect(request()->segments())->toArray();
            $view->with('crumbs', $crumbs);
        });
    }

    public function register()
    {

    }

}