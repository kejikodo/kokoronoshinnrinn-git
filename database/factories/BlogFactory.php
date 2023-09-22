<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blogs>
 */
class BlogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categorys = ['喜び', '信頼', '怒り', '恐れ', '驚き', '悲しみ', '険悪', '期待'];

        return [
            'emotions' => $this-> faker-> randomElement($categorys),
            'content' => $this-> faker-> realText(60),
            'user_id' => $this->faker->numberBetween($min = 1, $max = 3),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ];
    }
}
