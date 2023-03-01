<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;

class UserTest extends TestCase
{
    use WithoutMiddleware;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_user_index()
    {
        $response = $this->get('/users');

        $response->assertStatus(200);
    }

    public function test_user_create()
    {
        $response = $this->get('/users/create');

        $response->assertStatus(200);
    }

    public function test_user_show()
    {
        $response = $this->get('/users/1');

        $response->assertStatus(200);
    }

    public function test_user_edit()
    {
        $response = $this->get('/users/1/edit');

        $response->assertStatus(200);
    }
}
