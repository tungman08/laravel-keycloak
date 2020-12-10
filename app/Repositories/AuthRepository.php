<?php

namespace App\Repositories;

use App\Models\User;

interface AuthRepository
{
    /**
     * Store a newly created user in database.
     *
     * @param  \App\Models\User $user
     * @return Illuminate\Database\Eloquent\Model
     */
    public function register(User $user);

    /**
     * Handle an authentication attempt.
     *
     * @param  mixed $credential
     * @return mixed
     */
    public function login($credential);

    /**
     * Handle an logout.
     *
     * @return void
     */
    public function logout();
}