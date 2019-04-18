// Rules
'use strict';

// Imports
import style from './style';

console.log('hello world')

let HANDLE_inital_load = () => {

		console.log('HANDLE_inital_load');
        
        // overall site frames by 24 frames
        (function() {
            let interval = 0;
            setInterval(
                function() {
		console.log('HANDLE_inital_load');

                    if (interval == (1) ) {        
	                    if (document.getElementById('accent') != null) {
	                            document.getElementById('accent').classList = ('position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_1');
	                    };
					};

					if (interval == (2) ) {        
	                    if (document.getElementById('accent') != null) {
	                            document.getElementById('accent').classList = ('position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_2');
	                    };
					};

					if (interval == (3) ) {        
	                    if (document.getElementById('accent') != null) {
	                            document.getElementById('accent').classList = ('position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_3');
	                    };
					};

					if (interval == (4) ) {        
	                    if (document.getElementById('accent') != null) {
	                            document.getElementById('accent').classList = ('position_fixed height_100vh width_100 top_0 bottom_0 left_0 right_0 margin_auto z_index_0 accent_noise_4');
	                    };

	                    interval = 0;
					};

                    interval += 1;

                }, (1000 / 12));
        }());

};

window.onload = () => {
	HANDLE_inital_load();
}