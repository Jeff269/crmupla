<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consulta extends Model
{
    use HasFactory;
    protected $table = 'consultas';
    protected $primaryKey = 'id';
    protected $fillable = [
        'modalidad',
        'facultad',
        'carrera',
        'subcarrera',
        'nombre_p',
        'nombre_s',
        'apellido_p',
        'apellido_m',
        'celular',
        'correo',
        'dni',
        'edad',
        'atendido',
    ];

    protected $attributes = [
        'atendido' => 0
    ];
}
