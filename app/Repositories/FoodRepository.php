<?php

namespace App\Repositories;

use App\Models\Food;

interface FoodRepository extends CrudRepository
{  
    /**
     * Find all foods paginated.
     *
     * @param  int  $pageSize
     * @return Illuminate\Database\Eloquent\Collection
     */
    public function listAllPaginated($pageSize = 20);

    /**
     * Find a food by it's name.
     *
     * @param  string $name
     * @return \App\Models\Food
     */
    public function findByName($name);
}