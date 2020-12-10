<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VueController extends Controller
{   
   /**
    * เริ่มต้นการใช้งาน vue.js
    *
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        return view('index');
    }
}
