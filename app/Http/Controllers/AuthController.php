<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request){
        try{
            $credentials = $request->only('email', 'password');
            if(!Auth::attempt($credentials)){
                return response('Credenciais Inválidas', 401)
                    ->header('Content-Type', 'application/json');
            }
        }catch (\Exception $exception){
            return response($exception->getMessage(), 400)
                ->header('Content-Type', 'application/json');
        }
    }
}
