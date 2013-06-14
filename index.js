module.exports = alphahax;

var alpha = alphahax.alpha = {
	a: "(''+(+'.'))[1]"
	, b: "(typeof !!0)[0]"
	, c: "(typeof Function())[3]"
	, d: "{}.toString.call(new Date).toLowerCase()[8]"
	, e: "(typeof !!1)[4]"
	, f: "(typeof Function())[0]"
	, g: "(typeof '')[5]"
	, h: "'h'"
	, i: "(''+void 0)[5]"
	, j: "'j'"
	, k: "'k'"
	, l: "(typeof !!2)[3]"
	, m: "(new Date(507772800000)).toUTCString().toLowerCase()[0]"
	, n: "(typeof !!3)[6]"
	, o: "(''+{})[1]"
	, p: "(new Date(55000000000)).toUTCString().toLowerCase()[10]"
	, q: "'q'"
	, r: "(''+!!1)[1]"
	, s: "(typeof '')[0]"
	, t: "(''+!!1)[0]"
	, u: "(''+!!1)[2]"
	, v: "(new Date(60000000000)).toUTCString().toLowerCase()[10]"
	, w: "'w'"
	, x: "'x'"
	, y: "'y'"
	, z: "'z'"
};

var codes = alphahax.codes = Object.keys(alpha).map(function (x) {
	return Function(' return "'+ alpha[x] +'"')();
});


function alphahax (word) {
	var ret = [].map.call(word.split(''), function (l) {
		if (!(/^[a-zA-Z]+$/).test(l)) return "'"+ l +"'";
		else if ((/[A-Z]+/g).test(l)) return "("+ alpha[l.toLowerCase()] + ").toUpperCase()";
		else return alpha[l];
	});
	return ret.join('+');
}

alphahax.eval = function (a) {
	return Function('return '+ alphahax(a))()	
}
