<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Events\PushTest;

Route::group(['prefix' => 'admin'], function() {
    Route::middleware(['auth:web', 'is_admin'])->group(function(){
        Route::get('/teste', function(Request $request) {
            broadcast(new PushTest($request->user()))->toOthers();
            return $request->user();
        });
    });
});


