/**
 * System JS configuration file for ChaseWeston.Ninja
 */
(function(global) {
	System.config({
		paths: {
			// define alias
			'npm:': 'node_modules/'
		},
		// Map Angular modules to their files
		map: {
			// App within the 'apps' folder
			app: 'app',
			// Angular bundles used
			'@angular/core': 'npm:@angular/core/bundles/core.umd.js',
			'@angular/common': 'npm:@angular/core/common/bundles/common.umd.js',
			'@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
			'@angular/platform-browser': '@angular/platform-browser/bundles/platform-browser.umd.js',
			'@angular/platform-browser-dynamic': '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
			'@angular/http': '@angular/http/bundles/http.umd.js',
			'@angular/router': '@angular/router/bundles/router.umd.js',
			'@angular/forms': '@angular/forms/bundles/forms.umd.js',
			// Other libraries
			'rxjs': 'npm:rxjs'
		},
		packages: {
			app: {
				main: './main.js',
				defaultExtension: 'js'
			},
			rxjs: {
				defaultExtension: 'js'
			}
		}
	});
})(this);