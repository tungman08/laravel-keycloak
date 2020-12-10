<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\FoodService;
use App\Models\Food;

class FoodController extends Controller
{
    /**
     * Only user authorize to access this section.
     *
     * @var string
     */
    protected $guard = 'auth:api';

    /**
     * The food repository implementation.
     *
     * @var FoodService
     */
    protected $foodService;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(FoodService $foodService) {
        $this->middleware($this->guard);
        $this->foodService = $foodService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $foods = $this->foodService->list();
        return response()->json($foods, 200); 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string'
        ]);

        $model = new Food();
        $model->name = $request->input('name');
        $food = $this->foodService->create($model);
        return response()->json($food, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $food = $this->foodService->findById($id);
        return response()->json($food, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string'
        ]);

        $model = new Food();
        $model->name = $request->input('name');
        $food = $this->foodService->update($id, $model);
        return response()->json($food, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->foodService->delete($id);
        return response()->json(null, 200);
    }
}
