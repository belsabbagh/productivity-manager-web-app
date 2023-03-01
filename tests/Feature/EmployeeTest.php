<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;

class EmployeeTest extends TestCase
{
    use WithoutMiddleware;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_employee_index()
    {
        $response = $this->get('/employees');

        $response->assertStatus(200);
    }

    public function test_employee_create()
    {
        $response = $this->get('/employees/create');

        $response->assertStatus(200);
    }

    public function test_employee_show()
    {
        $response = $this->get('/employees/1');

        $response->assertStatus(200);
    }

    public function test_employee_edit()
    {
        $response = $this->get('/employees/1/edit');

        $response->assertStatus(200);
    }
}
