<?php

namespace App\Http\Controllers;

use App\Models\Consulta;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Form/index');
    }


    public function success()
    {
        return Inertia::render('Form/success');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'modalidad' => 'required',
            'facultad' => 'required',
            'nombre_p' => 'required',
            'apellido_p' => 'required',
            'apellido_m' => 'required',
            'celular' => 'required',
            'correo' => 'required',
            'dni' => 'required',
        ]);

        Consulta::create([
            'modalidad' => $request['modalidad'],
            'facultad' => $request['facultad'],
            'carrera' => $request['carrera'],
            'subcarrera' => $request['subcarrera'],
            'nombre_p' => $request['nombre_p'],
            'nombre_s' => $request['nombre_s'],
            'apellido_p' => $request['apellido_p'],
            'apellido_m' => $request['apellido_m'],
            'celular' => $request['celular'],
            'correo' => $request['correo'],
            'dni' => $request['dni'],
            'edad' => $request['edad'],
        ]);

        return redirect()->route('form.success');

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Consulta $consulta)
    {
        $consulta->atendido = 1;
        $consulta->save();

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}


// nombres:'',
//         apellido_p:'',
//         apellido_m:'',
//         celular:'',
//         correo:'',
//         dni:'',
//         edad:'',