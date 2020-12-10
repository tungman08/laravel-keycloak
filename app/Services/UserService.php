<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Repositories\UserRepository;

class UserService extends AbstractService implements UserRepository
{  
    /**
     * Create a new UserService instance.
     *
     * @param  \App\Models\User $user
     * @return void
     */
    public function __construct(User $user)
    {
        $this->model = $user;
    }

    /**
     * List all users.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function list()
    {
        return $this->model->all();
    }

    /**
     * Find a user by id.
     *
     * @param  mixed $id
     * @return Illuminate\Database\Eloquent\Model
     */
    public function findById($id)
    {
        return $this->model->find($id);
    }

    /**
     * Find a user by it's username.
     *
     * @param  string $username
     * @return \App\Models\user
     */
    public function findByUsername($username)
    {
        return $this->model
            ->where('username', $username)
            ->first();
    }

    /**
     * Find a user by it's email.
     *
     * @param  string $name
     * @return \App\Models\user
     */
    public function findByEmail($email)
    {
        return $this->model
            ->where('email', $email)
            ->first();
    }

    /**
     * Create a user item in the database.
     *
     * @param  Illuminate\Database\Eloquent\Model $model
     * @return Illuminate\Database\Eloquent\Model
     */
    public function create(Model $model)
    {
        $user = $this->getNew();
        $user->name = $model->name;
        $user->email = $model->email;
        $user->password = bcrypt($model->password);
        $user->roles()->attach($model->roles);
        $user->save();

        return $user;
    }

    /**
     * Update the specified user in the database.
     *
     * @param  mixed $id
     * @param  Illuminate\Database\Eloquent\Model $model
     * @return Illuminate\Database\Eloquent\Model
     */
    public function update($id, Model $model)
    {
        $user = $this->findById($id);
        $user->password = bcrypt($model->password);
        $user->save();

        return $user;
    }

    /**
     * Delete the specified user from the database.
     *
     * @param  mixed $id
     * @return void
     */
    public function delete($id)
    {
        $user = $this->findById($id);
        $user->delete();
    }
}