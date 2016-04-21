"use strict";
	var Pony = (function () {
	    function Pony() {
	    }
	    Pony.prototype.bite = function () {
	        alert("Chomp!");
	    };
	    return Pony;
	}());
	exports.Pony = Pony;
