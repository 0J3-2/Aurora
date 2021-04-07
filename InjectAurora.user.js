// ==UserScript==
// @name         Aurora
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world with the aurora theme for discord!
// @author       You
// @match        https://discord.com/channels/
// @grant        none
// ==/UserScript==

// A userscript for Tampermonkey
(() => {
	'use strict';

	const id = 'injectedTheme-9uiewdr8y7231';

	const inject = () => {
		let style = document.createElement('link');
		style.id = id;
		style.rel = 'stylesheet';
		style.href = 'https://0j3-2.github.io/Aurora/ProxyFile.css';
		document.head.appendChild(style);
	};

	if (!document.getElementById(id)) inject();
})();
