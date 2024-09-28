<?php

/*
Plugin Name: Developer Personality Quiz
Description: Quiz to determine your developer personality.
Version: 1.0
Author: Marshall Dankbar
*/

if ( ! defined( 'ABSPATH' ) ) exit; 

function developer_personality_quiz_block_register() {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'developer_personality_quiz_block_register' );
