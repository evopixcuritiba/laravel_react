<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin'], function() {
    Route::middleware(['auth:web', 'is_admin'])->group(function(){
        Route::get('/teste', function(Request $request) {
            return $request->user();
        });
    });
});


