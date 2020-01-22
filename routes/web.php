<?php
// Admin Routes
Route::get('/admin', 'AccountController@index')->name('admin');

// Account Routes
Route::get('/admin/account', 'AccountController@account');
Route::post('/admin/account/update', 'AccountController@update');
Route::post('/admin/account/set-default', 'AccountController@setDefaultDashboard');


// User Management Routes
Route::get('/admin/users', 'UserController@show');
// Create User
Route::get('/admin/users/create', 'UserController@create');
Route::post('/admin/users/create', 'UserController@store');
// Update User
Route::get('/admin/users/edit/{user}', 'UserController@edit');
Route::post('/admin/users/edit/{user}', 'UserController@update');
//Delete User
Route::get('/admin/users/delete/{user}', 'UserController@delete');


// Dashboard Management Routes
Route::get('/admin/dashboards', 'DashboardController@show');
// Create Dashboard
Route::get('/admin/dashboards/create', 'DashboardController@create');
Route::post('/admin/dashboards/create', 'DashboardController@store');
// Update Dashboard
Route::get('/admin/dashboards/edit/{dashboard}', 'DashboardController@edit');
Route::post('/admin/dashboards/edit/{dashboard}', 'DashboardController@update');
// Delete Dashboard
Route::get('/admin/dashboards/delete/{dashboard}', 'DashboardController@delete');


// Slide Management Routes
Route::get('/admin/slides', 'SlideController@show');
// Create Slide
Route::get('/admin/slides/create', 'SlideController@create');
Route::post('/admin/slides/create', 'SlideController@store');
// Update Slide
Route::get('/admin/slides/edit/{slide}', 'SlideController@edit');
Route::post('/admin/slides/edit/{slide}', 'SlideController@update');
// Delete Slide
Route::get('/admin/slides/delete/{slide}', 'SlideController@delete');

// Authentication Routes
Route::get('login', 'LoginController@index')->name('login');
Route::post('login', 'LoginController@login');
Route::get('logout', 'LoginController@logout')->name('logout');

// Dashboard Route
Route::get('/', 'DashboardController@index')->name('dashboard');
Route::get('/{dashboard}', 'DashboardController@index');


