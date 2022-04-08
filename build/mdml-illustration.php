<?php
/**
 * Plugin Name:       Mdml Illustration
 * Description:       Vector illustrations for MotsDitsMotsLus.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       mdml-illustration
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function creativeapps_mdml_illustration_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'creativeapps_mdml_illustration_block_init' );



?>