/***
 * Excerpted from "Rediscovering JavaScript",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/ves6 for more book information.
 ***/
module.exports = {
	env: {
		es6: true,
		node: true
	},
	parser: 'babel-eslint',
	extends: 'eslint:recommended',
	parserOptions: {
		sourceType: 'module'
	},
	rules: {
		eqeqeq: 'error',
		strict: 'error',
		'no-var': 'error',
		'prefer-const': 'error',
		'no-console': 'off',
		// "indent": ["error", "tab"],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', 'avoid-escape'],
		semi: ['error', 'always']
	}
};
