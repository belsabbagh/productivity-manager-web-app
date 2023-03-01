<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;

class ProjectTest extends TestCase
{
    use WithoutMiddleware;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_project_index()
    {
        $response = $this->get('/projects');

        $response->assertStatus(200);
    }

    public function test_project_create()
    {
        $response = $this->get('/projects/create');

        $response->assertStatus(200);
    }

    public function test_project_show()
    {
        $response = $this->get('/projects/1');

        $response->assertStatus(200);
    }

    public function test_project_edit()
    {
        $response = $this->get('/projects/1/edit');

        $response->assertStatus(200);
    }
}
