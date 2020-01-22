<?php

use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/users/all/{key}', 'ApiController@getAllUsers');

Route::get('/dashboards/{key}', 'ApiController@getDashboards');
Route::get('/dashboards/all/{key}', 'ApiController@getAllDashboards');

Route::get('/slides/{key}', 'ApiController@getSlides');
Route::get('/slides/all/{key}', 'ApiController@getAllSlides');
