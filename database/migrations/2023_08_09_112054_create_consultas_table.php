<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('consultas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('modalidad');
            $table->unsignedBigInteger('facultad');
            $table->unsignedBigInteger('carrera')->nullable();
            $table->unsignedBigInteger('subcarrera')->nullable();
            $table->string('nombre_p');
            $table->string('nombre_s')->nullable();
            $table->string('apellido_p');
            $table->string('apellido_m');
            $table->string('celular');
            $table->string('correo');
            $table->string('dni');
            $table->string('edad')->nullable();
            $table->boolean('atendido');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('consultas');
    }
};
