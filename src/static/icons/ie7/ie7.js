/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'i_allerlei_neg': '&#xe900;',
		'i_facebook_neg': '&#xe907;',
		'i_insta_neg': '&#xe909;',
		'i_kindertheater_neg': '&#xe90d;',
		'i_konzert_neg': '&#xe90f;',
		'i_kesung_neg': '&#xe913;',
		'i_mail_neg': '&#xe91a;',
		'i_party_neg': '&#xe91d;',
		'i_theater_neg': '&#xe939;',
		'i_allerlei_pos': '&#xe93e;',
		'i_kindertheater_pos': '&#xe945;',
		'i_konzert_pos': '&#xe947;',
		'i_lesung_pos': '&#xe94b;',
		'i_party_pos': '&#xe952;',
		'i_pfeil_links_pos': '&#xe96e;',
		'i_pfeil_oben_pos': '&#xe970;',
		'i_pfeil_rechts_pos': '&#xe972;',
		'i_pfeil_unten_pos': '&#xe974;',
		'i_sponsoring_pos': '&#xe976;',
		'i_theater_pos': '&#xe978;',
		'i_tickets_pos': '&#xe97d;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/i_[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
