/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	var root = grunt.option('root') || '.';

	if (!Array.isArray(root)) root = [root];

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		nodemon: {
		  dev: {
		    script: 'index.js'
		  }
		}
	});


	grunt.loadNpmTasks( 'grunt-nodemon' );
	// Default task
	grunt.registerTask( 'default', [ 'nodemon' ] );
};
