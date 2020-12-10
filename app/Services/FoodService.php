<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Model;
use App\Models\Food;
use App\Repositories\FoodRepository;

class FoodService extends AbstractService implements FoodRepository
{
    /**
     * Create a new FoodService instance.
     *
     * @param  \App\Models\Food $food
     * @return void
     */
    public function __construct(Food $food)
    {
        $this->model = $food;
    }

    /**
     * List all foods.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function list()
    {
        return $this->model->all();
    }

    /**
     * Find a food by id.
     *
     * @param  mixed $id
     * @return Illuminate\Database\Eloquent\Model
     */
    public function findById($id)
    {
        return $this->model->find($id);
    }

    /**
     * Find all foods paginated.
     *
     * @param  int  $pageSize
     * @return Illuminate\Database\Eloquent\Collection
     */
    public function listAllPaginated($pageSize = 20)
    {
        return $this->model
            ->orderBy('created_at', 'desc')
            ->paginate($pageSize);
    }

    /**
     * Find a food by it's name.
     *
     * @param  string $name
     * @return \App\Models\Food
     */
    public function findByName($name)
    {
        return $this->model
            ->where('name', $name)
            ->first();
    }

    /**
     * Create a food item in the database.
     *
     * @param  Illuminate\Database\Eloquent\Model $model
     * @return Illuminate\Database\Eloquent\Model
     */
    public function create(Model $model)
    {
        $food = $this->getNew();
        $food->name = $model->name;
        $food->save();

        return $food;
    }

    /**
     * Update the specified food in the database.
     *
     * @param  mixed $id
     * @param  Illuminate\Database\Eloquent\Model $model
     * @return Illuminate\Database\Eloquent\Model
     */
    public function update($id, Model $model)
    {
        $food = $this->findById($id);
        $food->name = $model->name;
        $food->save();

        return $food;
    }

    /**
     * Delete the specified food from the database.
     *
     * @param  mixed $id
     * @return void
     */
    public function delete($id)
    {
        $food = $this->findById($id);
        $food->delete();
    }
}