<?php

namespace App\Http\Middleware;

use App\Http\Controllers\Controller;
use Closure;

class CheckLevel extends Controller
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(auth()->user()->level < 9)
            $this->raise();

        return $next($request);
    }
}
