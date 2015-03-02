/**
 * app.js
 */
define(function(require, exports, module) {
	var xhr = new XMLHttpRequest()
	xhr.open('GET', 'source.md', true)
	xhr.onreadystatechange = function() {
		if (this.readyState === 4) {
			$('.container').html(marked(this.responseText))
/*			$('.container iframe').remove()*/
			$('.container pre code').each(function() {
				hljs.highlightBlock(this)
			})
		}
	}

	exports.init = function() {
		xhr.send(null)
	}
})