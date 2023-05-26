// ==UserScript==
// @name        Wider GitHub Actions Workflow Popup
// @version     0.0.1
// @description A userscript that makes Github Actions "Run Workflow" window wider
// @license     MIT
// @namespace   https://github.com/chenghuang-mdsol
// @run-at      document-end
// @author      Cheng Huang
// @match       https://github.com/*
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_registerMenuCommand
// @icon        https://github.githubassets.com/pinned-octocat.svg
// @require     https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment-with-locales.min.js
// @require     https://greasyfork.org/scripts/28721-mutations/code/mutations.js?version=1108163
// @require     https://greasyfork.org/scripts/398877-utils-js/code/utilsjs.js?version=1079637
// @updateURL   https://raw.githubusercontent.com/chenghuang-mdsol/UserScriptsRepo/main/wider-gha-popup.user.js
// @downloadURL https://raw.githubusercontent.com/chenghuang-mdsol/UserScriptsRepo/main/wider-gha-popup.user.js
// @supportURL  https://github.com/Mottie/chenghuang-mdsol/UserScriptsRepo/issues
// ==/UserScript==

(function() {

    function overwrite() {
        GM_addStyle (`
          .Popover-message--large {
              min-width: 500px !important;
          }
          .SelectMenu-modal {
              width: 480px !important
          }
     ` );
	}
    overwrite();
})();
