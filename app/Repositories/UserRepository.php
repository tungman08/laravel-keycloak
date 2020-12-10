<?php

namespace App\Repositories;

use App\Models\User;

interface UserRepository extends CrudRepository
{  
    /**
     * Find a user by it's username.
     *
     * @param  string $username
     * @return \App\Models\User
     */
    public function findByUsername($username);

    /**
     * Find a user by it's email.
     *
     * @param  string $email
     * @return \App\Models\User
     */
    public function findByEmail($email);
}