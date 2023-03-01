<?php

namespace App\Http\Resources;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class UserResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  Request  $request
     *
     * @return array|Arrayable|JsonSerializable
     */
    public function toArray($request): array|JsonSerializable|Arrayable
    {
        $data = [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'user_type' => new UserTypeResource($this->user_type),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
        if ($this->user_type->id === 2) {
            $data['projects'] = ProjectResource::collection($this->projects);
            $data['total_utilization'] = $this->total_utilization;
        }
        return $data;
    }
}
