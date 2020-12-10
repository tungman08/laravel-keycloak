<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth; 
use App\Repositories\AuthRepository;
use Carbon\Carbon;
use App\Models\User;

class AuthService implements AuthRepository
{
    /**
     * The model to execute queries on.
     *
     * @var \App\Services\UserService
     */
    protected $user;

    /**
     * Create a new AuthService instance.
     *
     * @param  \App\Services\UserService $user
     * @return void
     */
    public function __construct(UserService $user)
    {
        $this->user = $user;
    }

    /**
     * Store a newly created user in database.
     *
     * @param  \App\Models\User $user
     * @return string
     */
    public function register(User $request)
    {
        $user = $user->user->create($request);
        $tokenResult =  $user->createToken('access_token');
        $accessToken =  $tokenResult->accessToken; 
        $expiresAt = Carbon::parse($tokenResult->token->expires_at)->toDateTimeString();

        return [
            'id' => Auth::id(),
            'username' => $user->username,
            'email' => $user->email,
            'roles' => $user->roles->pluck('name')->toArray(),
            'access_token' => $accessToken,
            'token_type' => 'Bearer',
            'expires_at' => $expiresAt
        ]; 
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  mixed $credential
     * @return mixed
     */
    public function login($credential)
    {
        if(!Auth::attempt($credential)) {
            return false;
        }

        $user = Auth::user(); 
        $tokenResult = $user->createToken('access_token');
        $accessToken =  $tokenResult->accessToken; 
        $expiresAt = Carbon::parse($tokenResult->token->expires_at)->toDateTimeString();

        return [
            'id' => Auth::id(),
            'username' => $user->username,
            'email' => $user->email,
            'roles' => $user->roles->pluck('name')->toArray(),
            'access_token' => $accessToken,
            'token_type' => 'Bearer',
            'expires_at' => $expiresAt
        ]; 
    }

    /**
     * Handle an logout.
     *
     * @return void
     */
    public function logout()
    {
        $token = Auth::user()->token();
        $token->revoke();
    }
}