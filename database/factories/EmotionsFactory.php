<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\emotions>
 */
class EmotionsFactory extends Factory
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
            'event' => $this -> faker -> realText(12),
            'emotions_body' => $this -> faker -> realText(20),
            'user_id' => $this->faker->numberBetween($min = 1, $max = 3),
            'emotions'=> $this -> faker ->randomElement($categorys)
        ];
    }
}
