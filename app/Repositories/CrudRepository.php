<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

interface CrudRepository
{
    /**
     * List all model items.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function list();

    /**
     * Find a model item by id.
     *
     * @param  mixed $id
     * @return Illuminate\Database\Eloquent\Model
     */
    public function findById($id);

    /**
     * Create a new model item in the database.
     *
     * @param  Illuminate\Database\Eloquent\Model $model
     * @return Illuminate\Database\Eloquent\Model
     */
    public function create(Model $model);

    /**
     * Update the specified model item in the database.
     *
     * @param  mixed $id
     * @param  Illuminate\Database\Eloquent\Model $model
     * @return Illuminate\Database\Eloquent\Model
     */
    public function update($id, Model $model);

    /**
     * Delete the specified model item from the database.
     *
     * @param  mixed $id
     * @return void
     */
    public function delete($id);
}