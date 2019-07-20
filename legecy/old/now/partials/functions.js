
let state = '';

let HANDLE_looping_logo_mark = () => {

    // overall site frames by 24 frames
    (function() {
        let interval = 0;
        setInterval(
            function() {

                if (interval == (1) ) {        
                        if (document.getElementById('row-logo-mark') != null) {
                                document.getElementById('row-logo-mark').classList = (`
                                    gui_logo_mark_1 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };
                    };

                    if (interval == (2) ) {        
                        if (document.getElementById('row-logo-mark') != null) {
                                document.getElementById('row-logo-mark').classList = (`
                                    gui_logo_mark_2 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };
                    };

                    if (interval == (3) ) {        
                        if (document.getElementById('row-logo-mark') != null) {
                                document.getElementById('row-logo-mark').classList = (`
                                    gui_logo_mark_3 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };
                    };

                    if (interval == (4) ) {        
                        if (document.getElementById('row-logo-mark') != null) {
                                document.getElementById('row-logo-mark').classList = (`
                                    gui_logo_mark_4 position_absolute top_0 left_0 bottom_0 right_0 height_33vh width_33vw margin_auto `);
                        };

                        interval = 0;
                    };

                interval += 1;

            }, (1000 / 12));
    }());

};

export default {
  HANDLE_looping_logo_mark
}
