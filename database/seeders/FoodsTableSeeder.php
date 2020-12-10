<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class FoodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seeds = [
            ['id' => 1, 'name' => 'กะเพราไก่'],
            ['id' => 2, 'name' => 'ไข่ดาว'],
            ['id' => 3, 'name' => 'โอเลี้ยง'],
        ];

        foreach ($seeds as $seed) {
            DB::table('foods')->insert([
                'id' => $seed['id'],
                'name' => $seed['name'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }
}
