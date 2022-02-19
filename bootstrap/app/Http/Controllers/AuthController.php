<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|string|unique:users,email',
            'password' => [
                'required',
                'confirmed',
                // 最小８文字、大文字小文字混在、最低１文字数字、最低１文字記号
                Password::min(8)->mixedCase()->numbers()->symbols()
            ]
        ]);

        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            // bcrypt: 引数をハッシュ化
            'password' => bcrypt($data['password'])
        ]);
        // トークンを発行して、plainTextTokenで暗号化前のトークンにアクセス
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'name' => $user,
            'token' => $token
        ]);
    }

}
