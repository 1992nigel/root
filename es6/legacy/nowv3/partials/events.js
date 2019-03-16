// Imports
import from_index from '../index.js';

let state = '';
let dragging = false;

setTimeout(
    (() => {

// Desktop
if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {
    
    if ((document.getElementById('output')) != null ) {
        let theGamepad = navigator.getGamepads()[0];
        (() => {

            var hasGamePad = false;
            var updateEvent = null;

            var out = document.getElementById("output");

            let canGame = () => {
              return "getGamepads" in navigator;
            }

            let trimToThree = (n) => {
              return Math.round( n * 1000 ) / 1000;
            }

            let reportOnGamepad = () => {
              var html = "";
              theGamepad = navigator.getGamepads()[0];
              html += "Name: " + theGamepad.id + "<br/><br/>";
              for(var i = 0; i < theGamepad.buttons.length; i++) {
                var val = trimToThree(theGamepad.buttons[i].value);
                var isPressed = theGamepad.buttons[i].pressed;
                html += `Button ${ i + 1 } : ${val} ${isPressed}`;
                html += "<br/>";
              }
              html += "<br />";
              for(var i = 0; i < theGamepad.axes.length; i += 2) {
                html += "<br />Stick " + (Math.ceil( i / 2 ) + 1 ) + ": <br />"
                var x = trimToThree(theGamepad.axes[i]);
                var y = trimToThree(theGamepad.axes[i+1]);
                html += `X: ${x}<br />`;
                html += `Y: ${y}<br/>`;
              }
              out.innerHTML = html;
            }

            if(canGame()) {
              var prompt = "To begin using your gamepad, connect it and press any button!";
              output.innerHTML = prompt;

              window.addEventListener("gamepadconnected", function() {
                hasGamePad = true;
                out.innerHTML = "Gamepad connected!";
                updateEvent = window.setInterval(reportOnGamepad, 1000/60);
              });

              window.addEventListener("gamepaddisconnected", function() {
                hasGamePad = false;
                out.innerHTML = prompt;
                window.clearInterval(updateEvent);
              });

            }

            let rumbleStrong = (intensity) => {
              if(!navigator.getGamepads()[0]) return;
              navigator.getGamepads()[0].vibrationActuator.playEffect("dual-rumble", {
                duration: 500,
                strongMagnitude: intensity,
                weakMagnitude: 0,
                startDelay: 0
              });
            }

            let rumbleWeak = (intensity) => {
              if(!navigator.getGamepads()[0]) return;
              navigator.getGamepads()[0].vibrationActuator.playEffect("dual-rumble", {
                duration: 500,
                strongMagnitude: 0,
                weakMagnitude: intensity,
                startDelay: 0
              });
            }

            let rumbleBoth = (intensity) => {
              if(!navigator.getGamepads()[0]) return;
              navigator.getGamepads()[0].vibrationActuator.playEffect("dual-rumble", {
                duration: 500,
                strongMagnitude: intensity,
                weakMagnitude: intensity,
                startDelay: 0
              });
            }

            document.getElementById('rumbleStrong').addEventListener('click', (event) => {
                rumbleStrong(1);
            });

            document.getElementById('rumbleWeak').addEventListener('click', (event) => {
                rumbleWeak(1);
            });

            document.getElementById('rumbleBoth').addEventListener('click', (event) => {
                rumbleBoth(1);
                alert('rumbleBoth');
            });

            document.getElementById('rumbleStrong_less').addEventListener('click', (event) => {
                rumbleStrong(0.25);
            });

            document.getElementById('rumbleWeak_less').addEventListener('click', (event) => {
                rumbleWeak(0.25);
            });

            document.getElementById('rumbleBoth_less').addEventListener('click', (event) => {
                rumbleBoth(0.25);
            });

        })();

    }

    document.getElementById('component_app_body').addEventListener('click', (event) => {
        
        state = from_index.Handle_return_state();

        // console.log('state in events');
        state.events.mouse.click.clientX = event.clientX;
        state.events.mouse.click.clientY = event.clientY;
        console.log(state.events.mouse.click.clientX);
        console.log(state.events.mouse.click.clientY);
        console.log('click');

        // x axis: 1
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:1 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 1;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:1 grid';
            };

        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:1 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 2;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:2 grid';
            };
            
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:1 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 3;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:3 grid';
            };
            
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:1 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 4;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:4 grid';
            };
            
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:1 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 5;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:5 grid';
            };
            
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:1 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 6;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:6 grid';
            };
            
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:1 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 7;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:7 grid';
            };
            
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:1 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 8;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:8 grid';
            };
            
        };

        // x axis: 2

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 1)))) {
            console.log('mouse is in clientX:2 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:2 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:2 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:2 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:2 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:2 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:2 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:2 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 8;
        };

        // x axis: 3
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:3 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:3 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:3 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:3 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:3 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:3 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:3 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:3 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 8;
        };

        // x axis: 4
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:4 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:4 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:4 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:4 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:4 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:4 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:4 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:4 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 8;
        };

        // x axis: 5
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:5 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:5 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:5 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:5 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:5 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:5 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:5 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:5 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 8;
        };

        // x axis: 6

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:6 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:6 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:6 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:6 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:6 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:6 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:6 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:6 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 8;
        };

        // x axis: 7
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:7 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:7 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:7 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:7 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:7 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:7 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:7 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:7 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 8;
        };

        // x axis: 8
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:8 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:8 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:8 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:8 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:8 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:8 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:8 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.office1_6 = 2;

            from_index.check_door();

        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:8 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 8;
        };

        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app_body').addEventListener('wheel', (event) => {
        state = from_index.Handle_return_state();

        // console.log('state in events');
        console.log('wheel');

        if (event.deltaY < 0) {
            console.log('wheel up');

            if ((document.getElementById('wheel_direction')) != null ) {
                document.getElementById('wheel_direction').innerHTML = 'up';
                console.log("instance: wheel up");
                from_index.event_wheel_up();
            };

        };

        if (event.deltaY > 0) {
            console.log('wheel down');
             state.ui.root.wheels += 1;
             console.log('wheels: ' + state.ui.root.wheels);

            if ((document.getElementById('wheel_direction')) != null ) {
                document.getElementById('wheel_direction').innerHTML = 'down';
                console.log("instance: wheel down");
                from_index.event_wheel_down();
            };

            // wheeled
            if (state.ui.root.wheels >= 1) {
                
                if (state.animation.instances.loaded == true && state.animation.instances.cursor_moved == true && state.animation.instances.key_pressed == true && state.animation.instances.scrolled == false && state.animation.instances.scrolling == false && state.animation.instances.start == false && state.animation.instances.learn == false) {
                    from_index.HANDLE_animation_scrolled();
                    state.ui.root.wheels = 0;

                    setTimeout(

                        function () {
                            state.ui.root.isWheeling = true
                        }, 1500);

                    return
                };
            };

            // wheeled powerful
            if (state.ui.root.wheels >= 1) {
                if (state.animation.instances.loaded == true && state.animation.instances.cursor_moved == true && state.animation.instances.key_pressed == true && state.animation.instances.scrolled == true && state.animation.instances.scrolling == false && state.animation.instances.start == false && state.animation.instances.learn == false) {
                    
                    if (state.ui.root.isWheeling == true) {
                        from_index.HANDLE_animation_scrolled_down();
                        state.ui.root.wheels = 0;
                    };

                    return
                };
            };


        };

        from_index.Handle_get_state_from_events();

    });

   document.getElementById('component_app_body').addEventListener('keydown', (event) => {
        state = from_index.Handle_return_state();
        // console.log('state in events');
        console.log('keydown');

        let keyCode = event.keyCode;
        console.log('keyCode: ' + keyCode);
        console.log('keys held: ');
        console.log(state.events.key.keys);

        let matched = false;

        for (var i = 0; i < state.events.key.keys.length; i++) {
            if (state.events.key.keys[i] == event.keyCode) {
                matched = true;
            };
        };

        if (matched == false) {
            state.events.key.keys.push(event.keyCode);
        };

        // esc
        if (keyCode == 27) {
            console.log('esc');
            from_index.sound1.play();
            // key_pressed
            from_index.HANDLE_animation_key_pressed();
        };

        // NEXT LINE
        // `
        if (keyCode == 192) {
            console.log('tildy');
            // from_index.HANDLE_animation_null();
            state.ui.interaction.player_1.idle.sitting = !state.ui.interaction.player_1.idle.sitting;
            state.ui.interaction.player_1.idle.standing = false;
            state.ui.interaction.player_1.idle.blinking = false;
        };
        // one
        if (keyCode == 49) {
            console.log('1');
            // from_index.HANDLE_animation_1();
            state.ui.interaction.player_1.idle.standing = !state.ui.interaction.player_1.idle.standing;
            state.ui.interaction.player_1.idle.sitting = false;
            state.ui.interaction.player_1.idle.blinking = false;
        };
        // two
        if (keyCode == 50) {
            console.log('2');
            // from_index.HANDLE_animation_2();
            state.ui.interaction.player_1.idle.blinking = !state.ui.interaction.player_1.idle.blinking;
            state.ui.interaction.player_1.idle.sitting = false;
            state.ui.interaction.player_1.idle.standing = false;
        };
        // three
        if (keyCode == 51) {
            console.log('3');
            // from_index.HANDLE_animation_3();
        };
        // four
        if (keyCode == 52) {
            console.log('4');
            // from_index.HANDLE_animation_4();
        };
        // five
        if (keyCode == 53) {
            console.log('5')
            // from_index.HANDLE_animation_5();
        };
        // six
        if (keyCode == 54) {
            console.log('6');
            // from_index.HANDLE_animation_6();
        };
        // seven
        if (keyCode == 55) {
            console.log('7');

            if (state.ui.interaction.player_1.idle.standing == true) {
                state.ui.interaction.player_1.action.shooting = true;
            };

            // from_index.HANDLE_animation_7();
        };
        // eight
        if (keyCode == 56) {
            console.log('8');
            // from_index.HANDLE_animation_8();
            if (state.ui.interaction.player_1.idle.standing == true) {
                state.ui.interaction.player_1.action.grabing = true;
            };
        };

        // nine
        if (keyCode == 57) {
            console.log('9');
            // from_index.HANDLE_animation_9();

            if (state.ui.interaction.player_1.idle.standing == true) {
                state.ui.interaction.player_1.action.blocking = true;
            };
        };

        // zero
        if (keyCode == 48) {
            console.log('0');
            // from_index.HANDLE_animation_0();
        };

        // -
        if (keyCode == 189) {
            console.log('-');
            //from_index.HANDLE_animation_minus();
            state.ui.interaction.player_1.height -= 1
            state.ui.interaction.player_1.width -= 1
        };

        // =
        if (keyCode == 187) {
            console.log('+');
            //from_index.HANDLE_animation_plus();
            state.ui.interaction.player_1.height += 1
            state.ui.interaction.player_1.width += 1
        };

        // =
        if (keyCode == 8) {
            console.log('delete');
            from_index.HANDLE_animation_delete();
        };

        // NEXT LINE
        // tab
        if (keyCode == 9) {
            console.log('delete');
            from_index.HANDLE_animation_tab();
        };

        // q
        if (keyCode == 81) {
            //from_index.HANDLE_animation_q();
            from_index.HANDLE_animation_modals_hide();

        };
        
        // w
        if (keyCode == 87) {
            //from_index.HANDLE_animation_w();

            if (state.ui.interaction.player_1.idle.blinking == true) {
                state.ui.interaction.player_1.idle.floating = true;
                state.ui.interaction.player_1.idle.blinking = false;
                state.ui.interaction.player_1.idle.standing = false;
                state.ui.interaction.player_1.idle.sitting = false;
                state.ui.interaction.player_1.idle.bend = false;
                state.ui.interaction.player_1.idle.prone = false;
                return
            }
            if (state.ui.interaction.player_1.idle.standing == true) {
                state.ui.interaction.player_1.idle.floating = false;
                state.ui.interaction.player_1.idle.blinking = true;
                state.ui.interaction.player_1.idle.standing = false;
                state.ui.interaction.player_1.idle.sitting = false;
                state.ui.interaction.player_1.idle.bend = false;
                state.ui.interaction.player_1.idle.prone = false;
                return
            }

            if (state.ui.interaction.player_1.idle.sitting == true) {
                state.ui.interaction.player_1.idle.floating = false;
                state.ui.interaction.player_1.idle.blinking = false;
                state.ui.interaction.player_1.idle.standing = true;
                state.ui.interaction.player_1.idle.sitting = false;
                state.ui.interaction.player_1.idle.bend = false;
                state.ui.interaction.player_1.idle.prone = false;
                return
            }

            if (state.ui.interaction.player_1.idle.bend == true) {
                state.ui.interaction.player_1.idle.floating = false;
                state.ui.interaction.player_1.idle.blinking = false;
                state.ui.interaction.player_1.idle.standing = false;
                state.ui.interaction.player_1.idle.sitting = true;
                state.ui.interaction.player_1.idle.bend = false;
                state.ui.interaction.player_1.idle.prone = false;
                return
            }

            if (state.ui.interaction.player_1.idle.prone == true) {
                state.ui.interaction.player_1.idle.floating = false;
                state.ui.interaction.player_1.idle.blinking = false;
                state.ui.interaction.player_1.idle.standing = false;
                state.ui.interaction.player_1.idle.sitting = false;
                state.ui.interaction.player_1.idle.bend = true;
                state.ui.interaction.player_1.idle.prone = false;
                return
            }
        };

        //e
        if (keyCode == 69) {
            from_index.HANDLE_animation_e();
        };
        
        //r
        if (keyCode == 82) {
            from_index.HANDLE_animation_r();
        };

        //t
        if (keyCode == 84) {
            from_index.HANDLE_animation_t();
        };
        
        //y
        if (keyCode == 89) {
            from_index.HANDLE_animation_y();
        };
                
        // u
        if (keyCode == 85) {
            from_index.HANDLE_animation_u();
        };

        //i
        if (keyCode == 73) {
            from_index.HANDLE_animation_i();
        };
        
        //o
        if (keyCode == 79) {
            from_index.HANDLE_animation_o();
        };

        //p
        if (keyCode == 80) {
            from_index.HANDLE_animation_p();
        };
        
        //[
        if (keyCode == 219) {
            from_index.HANDLE_animation_left_bracket();
        };

        //]
        if (keyCode == 221) {
            from_index.HANDLE_animation_right_bracket();
        };

        //\
        if (keyCode == 220) {
            from_index.HANDLE_animation_forward_slash();
        };

        // NEXT LINE

        // caps lock
        if (keyCode == 220) {
        };

        // a
        if (keyCode == 65) {
        };

        // s
        if (keyCode == 83) {

            if (state.ui.interaction.player_1.idle.floating == true) {
                state.ui.interaction.player_1.idle.floating = false;
                state.ui.interaction.player_1.idle.blinking = true;
                state.ui.interaction.player_1.idle.standing = false;
                state.ui.interaction.player_1.idle.sitting = false;
                state.ui.interaction.player_1.idle.bend = false;
                state.ui.interaction.player_1.idle.prone = false;
                return
            }

            if (state.ui.interaction.player_1.idle.blinking == true) {
                state.ui.interaction.player_1.idle.floating = false;
                state.ui.interaction.player_1.idle.blinking = false;
                state.ui.interaction.player_1.idle.standing = true;
                state.ui.interaction.player_1.idle.sitting = false;
                state.ui.interaction.player_1.idle.bend = false;
                state.ui.interaction.player_1.idle.prone = false;
                return
            }

            if (state.ui.interaction.player_1.idle.standing == true) {
                state.ui.interaction.player_1.idle.floating = false;
                state.ui.interaction.player_1.idle.blinking = false;
                state.ui.interaction.player_1.idle.standing = false;
                state.ui.interaction.player_1.idle.sitting = true;
                state.ui.interaction.player_1.idle.bend = false;
                state.ui.interaction.player_1.idle.prone = false;
                return
            }

            if (state.ui.interaction.player_1.idle.sitting == true) {
                state.ui.interaction.player_1.idle.floating = false;
                state.ui.interaction.player_1.idle.blinking = false;
                state.ui.interaction.player_1.idle.standing = false;
                state.ui.interaction.player_1.idle.sitting = false;
                state.ui.interaction.player_1.idle.bend = true;
                state.ui.interaction.player_1.idle.prone = false;
                return
            }

            if (state.ui.interaction.player_1.idle.bend == true) {
                state.ui.interaction.player_1.idle.floating = false;
                state.ui.interaction.player_1.idle.blinking = false;
                state.ui.interaction.player_1.idle.standing = false;
                state.ui.interaction.player_1.idle.sitting = false;
                state.ui.interaction.player_1.idle.bend = false;
                state.ui.interaction.player_1.idle.prone = true;
                return
            }
        };

        // d
        if (keyCode == 68) {
        };

        // f
        if (keyCode == 70) {
        };

        // g
        if (keyCode == 71) {
        };

        // h
        if (keyCode == 72) {
        };

        // j
        if (keyCode == 74) {
        };

        // k
        if (keyCode == 75) {
        };

        // l
        if (keyCode == 76) {
        };

        // ;
        if (keyCode == 186) {
        };

        // '
        if (keyCode == 222) {
        };

        // enter
        
        if (keyCode == 13) {
            console.log('enter');
            if (state.ui.interaction.player_1.idle.standing == true) {
                state.ui.interaction.player_1.action.punching = true;
            };
        };

        // NEXTLINE

        // shift left
        if (event.code == 'ShiftLeft') {
        };

        // shift right
        if (event.code == 'ShiftRight') {
        };

        // shift
        if (keyCode == 16) {
            state.data.dev_mode = !state.data.dev_mode;
            if (state.ui.interaction.player_1.idle.standing == true) {
                state.ui.interaction.player_1.action.kicking = true;
            };
        };

        // z
        if (keyCode == 90) {
        };

        // x
        if (keyCode == 88) {
        };

        // c
        if (keyCode == 67) {
        };

        // v
        if (keyCode == 86) {
        };

        // b
        if (keyCode == 66) {
        };

        // n
        if (keyCode == 78) {
        };

        // m
        if (keyCode == 77) {
        };

        // ,
        if (keyCode == 188) {
        };

        // .
        if (keyCode == 190) {
        };

        // /
        if (keyCode == 191) {
        };
        
        // NEXT LINE

        // control
        if (keyCode == 17) {
        };

        // alt
        if (keyCode == 18) {
        };

        // command
        if (keyCode == 91) {
        };

        // command right
        if (keyCode == 93) {
        };

        // space
        if (keyCode == 32) {
            console.log('spacebar');
            
            state.data.local = !state.data.local;
            //state.ui.gui.top_left.transform = !state.ui.gui.top_left.transform;

            state.ui.gui.top_left.display = !state.ui.gui.top_left.display;
            state.ui.gui.top_right.display = !state.ui.gui.top_right.display;

            //from_index.HANDLE_animation_resize();
            state.events.key.pressed.key_space = true;

            if (state.ui.interaction.player_1.idle.standing == true) {
                state.ui.interaction.player_1.yaxis = 1;
                state.ui.interaction.player_1.action.jumping = true;
                state.ui.interaction.player_1.action.punching = false;
            };

            let bullet = {
                clientX: state.ui.interaction.player_1.xaxis,
                clientY: state.ui.interaction.player_1.yaxis
            };

            state.ui.interaction.snake.create = true;

        };

        // arrow left
        if (keyCode == 37) {
            state.events.key.pressed.key_arrow_left = true;
            state.ui.interaction.player_1.action.left = true;
            state.ui.interaction.player_1.action.right = false;

            if (state.ui.interaction.player_1.idle.standing == true) {
                state.ui.interaction.player_1.motion.walking = true;
            };

            //snake
            state.ui.interaction.snake.direction = 'left';

            // parallax
            state.ui.interaction.parallax_x.layer1.clientX -= 1;
            state.ui.interaction.parallax_x.layer2.clientX -= 1;
            state.ui.interaction.parallax_x.layer3.clientX -= 1;
            state.ui.interaction.parallax_x.layer4.clientX -= 1;
            state.ui.interaction.parallax_x.layer5.clientX -= 1;
            state.ui.interaction.parallax_x.layer6.clientX -= 1;
            state.ui.interaction.parallax_x.layer7.clientX -= 1;
            state.ui.interaction.parallax_x.layer8.clientX -= 1;
        };

        // arrow right
        if (keyCode == 39) {
            state.events.key.pressed.key_arrow_right = true;
            state.ui.interaction.player_1.action.left = false;
            state.ui.interaction.player_1.action.right = true;

            if (state.ui.interaction.player_1.idle.standing == true) {
                state.ui.interaction.player_1.motion.walking = true;
            };

            //snake
            state.ui.interaction.snake.direction = 'right';
            // parallax
            state.ui.interaction.parallax_x.layer1.clientX += 1;
            state.ui.interaction.parallax_x.layer2.clientX += 1;
            state.ui.interaction.parallax_x.layer3.clientX += 1;
            state.ui.interaction.parallax_x.layer4.clientX += 1;
            state.ui.interaction.parallax_x.layer5.clientX += 1;
            state.ui.interaction.parallax_x.layer6.clientX += 1;
            state.ui.interaction.parallax_x.layer7.clientX += 1;
            state.ui.interaction.parallax_x.layer8.clientX += 1;
        };     

        // arrow up
        if (keyCode == 38) {
            state.ui.interaction.player_1.yaxis += .25;

            state.ui.stage.enneagon.yaxis += 1;
            state.ui.interaction.snake.direction = 'up';

            state.ui.interaction.parallax_y.layer1.clientY += 1;
            state.ui.interaction.parallax_y.layer2.clientY += 1;
            state.ui.interaction.parallax_y.layer3.clientY += 1;
            state.ui.interaction.parallax_y.layer4.clientY += 1;
            state.ui.interaction.parallax_y.layer5.clientY += 1;
            state.ui.interaction.parallax_y.layer6.clientY += 1;
            state.ui.interaction.parallax_y.layer7.clientY += 1;
            state.ui.interaction.parallax_y.layer8.clientY += 1;
        };

        // arrow down
        if (keyCode == 40) {
            state.ui.interaction.player_1.yaxis -= .25;

            state.ui.stage.enneagon.yaxis -= 1;
            state.ui.interaction.snake.direction = 'down';

            state.ui.interaction.parallax_y.layer1.clientY -= 1;
            state.ui.interaction.parallax_y.layer2.clientY -= 1;
            state.ui.interaction.parallax_y.layer3.clientY -= 1;
            state.ui.interaction.parallax_y.layer4.clientY -= 1;
            state.ui.interaction.parallax_y.layer5.clientY -= 1;
            state.ui.interaction.parallax_y.layer6.clientY -= 1;
            state.ui.interaction.parallax_y.layer7.clientY -= 1;
            state.ui.interaction.parallax_y.layer8.clientY -= 1;
        };        
        
        if ((document.getElementById('key_keys')) != null ) {
            document.getElementById('key_keys').innerHTML = (state.events.key.keys)
        }

        if ((document.getElementById('key_key_down')) != null ) {
            document.getElementById('key_key_down').innerHTML = (event.keyCode)
        }

        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app_body').addEventListener('keyup', (event) => {
        state = from_index.Handle_return_state();
        // console.log('state in events');
        console.log('keyup');

        state = from_index.Handle_return_state();
        console.log('event: keyup');
        console.log(event);
        var index = state.events.key.keys.indexOf(event.keyCode);
        let keyCode = event.keyCode;

        //state.animation.scene = (state.animation.scene + 1);
        //alert(state.animation.scene);

        if (index > -1) {
            state.events.key.keys.splice(index, 1);
        };
        
        if ((document.getElementById('key_keys')) != null ) {
            document.getElementById('key_keys').innerHTML = (state.events.key.keys)
        }

        if ((document.getElementById('key_key_up')) != null ) {
            document.getElementById('key_key_up').innerHTML = (keyCode)
        }


        // arrow left
        if (keyCode == 37) {
            state.events.key.pressed.key_arrow_left = false;
            if (state.ui.interaction.player_1.idle.standing == true) {
                state.ui.interaction.player_1.motion.walking = false;
            }
        };

        // arrow right
        if (keyCode == 39) {
            state.events.key.pressed.key_arrow_right = false;
            if (state.ui.interaction.player_1.idle.standing == true) {
                state.ui.interaction.player_1.motion.walking = false;
            }
        };

        if (keyCode == 13) {
            console.log('enter');
            if (state.ui.interaction.player_1.idle.standing == true) {
                state.ui.interaction.player_1.action.punching = false;
            };
        };

        if (keyCode == 16) {
            if (state.ui.interaction.player_1.idle.standing == true) {
                state.ui.interaction.player_1.action.kicking = false;
            };
        };

        if (keyCode == 55) {
            if (state.ui.interaction.player_1.idle.standing == true) {
                state.ui.interaction.player_1.action.shooting = false;
            };
        };

        if (keyCode == 56) {
            if (state.ui.interaction.player_1.idle.standing == true) {
                state.ui.interaction.player_1.action.grabing = false;
            };
        };

        if (keyCode == 57) {
            if (state.ui.interaction.player_1.idle.standing == true) {
                state.ui.interaction.player_1.action.blocking = false;
            };
        };

        if (keyCode == 32) {
            console.log('spacebar');
            state.events.key.pressed.key_space = false;

            if (state.ui.interaction.player_1.idle.standing == true) {
                state.ui.interaction.player_1.action.jumping = false;
                state.ui.interaction.player_1.action.punching = false;
                state.ui.interaction.player_1.yaxis = 0;
            };
        };
        
        from_index.Handle_get_state_from_events();

    });

    let myFunction = (x) => {
        console.log(x);
    }

    window.addEventListener("scroll", myFunction(event));

    document.getElementById('component_app_body').addEventListener('mousemove', (event) => {

        state = from_index.Handle_return_state();

        console.log('mousemove only');
        console.log(event);

        console.log('mousemove: event.clientX: ' + event.clientX);
        console.log('mousemove: event.clientY: ' + event.clientY);

        state.events.mouse.clientX = event.clientX;
        state.events.mouse.clientY = event.clientY;

        // cursor enter
        if (state.animation.instances.loaded == true && state.animation.instances.cursor_moved == false) {
            from_index.HANDLE_animation_cursor_moved();
        };

        // x axis: 1
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:1 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 1;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:1 grid';
            };

            state.animation.instances.sixty_four = 1;

        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:1 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 2;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:2 grid';
            };

            state.animation.instances.sixty_four = 9;
            
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:1 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 3;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:3 grid';
            };

            state.animation.instances.sixty_four = 17;
            
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:1 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 4;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:4 grid';
            };
            
            state.animation.instances.sixty_four = 25;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:1 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 5;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:5 grid';
            };
           
            
            state.animation.instances.sixty_four = 33;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:1 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 6;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:6 grid';
            };
            
            
            state.animation.instances.sixty_four = 41;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:1 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 7;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:7 grid';
            };
            
            state.animation.instances.sixty_four = 49;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:1 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 8;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:8 grid';
            };
            
            state.animation.instances.sixty_four = 57;
        };

        // x axis: 2

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 1)))) {
            console.log('mouse is in clientX:2 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:2 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 10;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:2 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 18;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:2 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 26;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:2 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 34;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:2 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 42;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:2 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 50;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:2 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 58;
        };

        // x axis: 3
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:3 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:3 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 11;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:3 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 19;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:3 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 27;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:3 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 35;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:3 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 43;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:3 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 51;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:3 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 59;
        };

        // x axis: 4
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:4 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:4 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 12;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:4 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 20;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:4 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 28;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:4 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 36;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:4 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 44;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:4 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 52;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:4 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 60;
        };

        // x axis: 5
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:5 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:5 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 13;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:5 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 21;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:5 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 29;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:5 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 37;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:5 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 45;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:5 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 53;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:5 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 61;
        };

        // x axis: 6

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:6 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:6 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 14;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:6 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 22;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:6 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 30;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:6 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 38;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:6 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 46;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:6 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 54;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:6 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 62;
        };

        // x axis: 7
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:7 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:7 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 15;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:7 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 23;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:7 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 31;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:7 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 39;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:7 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 47;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:7 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 55;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:7 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 63;
        };

        // x axis: 8
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:8 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 8;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:8 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 16;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:8 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 24;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:8 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 32;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:8 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 40;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:8 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 48;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:8 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 56;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:8 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 64;
        };

        if ((document.getElementById('mouse_client_X')) != null ) {
            document.getElementById('mouse_client_X').innerHTML = (state.events.mouse.clientX)


            if (state.events.mouse.up == true) {
                document.getElementById('mousedragDistanceXend').innerHTML = (state.events.mouse.clientX);
                if (state.data.dev_mode == true) {
                    state.events.mouse.pencil.clientX = state.events.mouse.clientX;
                };
            };

            if (state.events.mouse.up == false) {
                state.events.mouse.drag.clientX = state.events.mouse.clientX;
                if (state.data.dev_mode == true) {
                    state.events.mouse.pen.clientX = state.events.mouse.clientX;
                };
                document.getElementById('mousedragDistanceXstart').innerHTML = (state.events.mouse.clientX);
            };
        }

        if ((document.getElementById('mouse_client_Y')) != null ) {
            document.getElementById('mouse_client_Y').innerHTML = (state.events.mouse.clientY)

            if (state.events.mouse.up == true) {
                document.getElementById('mousedragDistanceYend').innerHTML = (state.events.mouse.clientY);

                if (state.data.dev_mode == true) {
                    state.events.mouse.pencil.clientY = state.events.mouse.clientY;
                };
            };

            if (state.events.mouse.up == false) {

                if (state.data.dev_mode == true) {
                    state.events.mouse.drag.clientY = state.events.mouse.clientY;
                    state.events.mouse.pen.clientY = state.events.mouse.clientY;
                };

                document.getElementById('mousedragDistanceYstart').innerHTML = (state.events.mouse.clientY);
            };
        }

        if (state.events.mouse.down == true) {
            console.log('mousemove + mousedown: event.clientX: ' + event.clientX);
            console.log('mousemove + mousedown: event.clientY: ' + event.clientY);

            if (dragging == true) {

                state.events.mouse.drop_start.clientX = event.clientX;
                state.events.mouse.drop_start.clientY = event.clientY;
                dragging = false;
            };


            document.getElementById('mouse_down_client_X').innerHTML = (state.events.mouse.clientX)
            document.getElementById('mouse_down_client_Y').innerHTML = (state.events.mouse.clientY)

            document.getElementById('mouse_up').innerHTML = state.events.mouse.up;

            let new_pencil = {
                clientX: event.clientX,
                clientY: event.clientY
            };

            if (state.data.dev_mode == true) {
                state.ui.interaction.pencil.push(new_pencil);
            };

            state.ui.interaction.key.xaxis = state.events.mouse.game_bit.clientX;
            state.ui.interaction.key.yaxis = state.events.mouse.game_bit.clientY;

            if (document.getElementById('component_app_gui_key') != null) {
                let component_app_gui_key = document.getElementById('component_app_gui_key');
                component_app_gui_key.style =
                    'height: ' + ( ((state.ui.interaction.key.height)) * (state.ux.dimensions.height8)) + 'px;' +
                    'width: ' + ( ((state.ui.interaction.key.width)) * (state.ux.dimensions.width8)) + 'px;' +
                    'top: ' + ( ((state.ui.interaction.key.yaxis) - 1 ) * (state.ux.dimensions.height8)) + 'px;' +
                    'left: ' + ( ((state.ui.interaction.key.xaxis) - 1 ) * (state.ux.dimensions.width8)) + 'px;';
            };

        };

        if (state.events.mouse.up == true) {
            console.log('mousemove + mousedown: event.clientX: ' + event.clientX);
            console.log('mousemove + mousedown: event.clientY: ' + event.clientY);

            document.getElementById('mouse_up').innerHTML = state.events.mouse.up;

            let new_pen = {
                clientX: event.clientX,
                clientY: event.clientY
            };


            if (state.data.dev_mode == true) {
                state.ui.interaction.pen.push(new_pen);
            };
            
            if ((document.getElementById('mouse_client_X')) != null ) {
                document.getElementById('mouse_up_client_X').innerHTML = (state.events.mouse.clientX)
            }

            if ((document.getElementById('mouse_client_Y')) != null ) {
                document.getElementById('mouse_up_client_Y').innerHTML = (state.events.mouse.clientY)
            }
        };

        if (document.getElementById('track_x') != null) {
            document.getElementById('track_x').style =
                'top: ' + (0) + 'px; \
            left: ' + (state.events.mouse.clientX) + 'px ;';
        };
        if (document.getElementById('track_y') != null) {
            document.getElementById('track_y').style =
                'top: ' + (state.events.mouse.clientY) + 'px; \
            left: ' + (0) + 'px ;';
        };

    // gui
    if (document.getElementById('component_app_interaction_hands') != null) {
        let component_app_interaction_hands = document.getElementById('component_app_interaction_hands');
        component_app_interaction_hands.style =
            'height: ' + (state.ux.dimensions.height/8) + 'px;' +
            'width: ' + (state.ux.dimensions.width/8) + 'px;' +
            'top: ' + (state.events.mouse.clientY) + 'px;' +
            'left: ' + (state.events.mouse.clientX) + 'px;';
    };
        from_index.Handle_get_state_from_events();

    });

    // Mouse Down
    document.getElementById('component_app_body').addEventListener('mousedown', function(event) {
        
        state = from_index.Handle_return_state();

        console.log('mousedown: event.clientX: ' + event.clientX);
        console.log('mousedown: event.clientY: ' + event.clientY);
        state.events.mouse.up = false;
        state.events.mouse.down = true;
        dragging = true;

            /* dragging!!!
            console.log('mousemove + mousedown: event.clientX: ' + event.clientX);
            console.log('mousemove + mousedown: event.clientY: ' + event.clientY);

            state.events.mouse.drop_start.clientX = event.clientX;
            state.events.mouse.drop_start.clientY = event.clientY;


            document.getElementById('mouse_down_client_X').innerHTML = (state.events.mouse.clientX)
            document.getElementById('mouse_down_client_Y').innerHTML = (state.events.mouse.clientY)

            */

            document.getElementById('mouse_up').innerHTML = state.events.mouse.up;

        from_index.Handle_get_state_from_events();

    });

    // Mouse Up
    document.getElementById('component_app_body').addEventListener('mouseup', function(event) {
        
        state = from_index.Handle_return_state();

        console.log('mouseup: event.clientX: ' + event.clientX);
        console.log('mouseup: event.clientY: ' + event.clientY);
        state.events.mouse.up = true;
        state.events.mouse.down = false;
        dragging = false;


            if (dragging == false) {

                state.events.mouse.drop_end.clientX = event.clientX;
                state.events.mouse.drop_end.clientY = event.clientY;

                state.events.mouse.drop.clientX = (state.events.mouse.drop_start.clientX - state.events.mouse.drop_end.clientX);
                state.events.mouse.drop.clientY = (state.events.mouse.drop_start.clientY - state.events.mouse.drop_end.clientY);
            
            };

            /* dragging!!!
            console.log('mousemove + mousedown: event.clientX: ' + event.clientX);
            console.log('mousemove + mousedown: event.clientY: ' + event.clientY);

            state.events.mouse.drop_end.clientX = event.clientX;
            state.events.mouse.drop_end.clientY = event.clientY;

            state.events.mouse.drop.clientX = (state.events.mouse.drop_start.clientX - state.events.mouse.drop_end.clientX);
            state.events.mouse.drop.clientY = (state.events.mouse.drop_start.clientY - state.events.mouse.drop_end.clientY);
            */

            document.getElementById('mouse_up').innerHTML = state.events.mouse.up;

        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app_body').addEventListener('mouseenter', (event) => {
        state = from_index.Handle_return_state();
        state.events.mouse.enter = true;
        state.events.mouse.leave = false;

        // console.log('state in events');
        console.log('mouseenter');
        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app_body').addEventListener('mouseleave', (event) => {
        state = from_index.Handle_return_state();
        state.events.mouse.enter = false;
        state.events.mouse.leave = true;

        // console.log('state in events');
        console.log('mouseleave');
        from_index.Handle_get_state_from_events();

    });

};

// Mobile
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

    // if can touch

    // long touch

    // ES 6 (and above)
    document.getElementById('component_app_body').addEventListener('touchmove', (event) => {

        state = from_index.Handle_return_state();

        if (document.getElementById('track_x') != null) {
            document.getElementById('track_x').style =
                'top: ' + (0) + 'px; \
            left: ' + (state.events.touch.clientX) + 'px ;';
        };
        if (document.getElementById('track_y') != null) {
            document.getElementById('track_y').style =
                'top: ' + (state.events.touch.clientY) + 'px; \
            left: ' + (0) + 'px ;';
        };

        //alert('touchmove');

        console.log('event.changedTouches[0].page');
        console.log(event.changedTouches[0].pageX);
        console.log(event.changedTouches[0].pageY);

        if ((document.getElementById('touch_page_X')) != null ) {
            document.getElementById('touch_page_Y').innerHTML = (event.changedTouches[0].pageY)
            document.getElementById('touch_page_X').innerHTML = (event.changedTouches[0].pageX)
        };

        console.log('event.changedTouches[0].client');
        console.log(event.changedTouches[0].clientX);
        console.log(event.changedTouches[0].clientY);

        if ((document.getElementById('touch_client_Y')) != null ) {
            document.getElementById('touch_client_Y').innerHTML = (event.changedTouches[0].clientY)
            document.getElementById('touch_client_X').innerHTML = (event.changedTouches[0].clientX)
        };

        //64

        // x axis: 1
        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:1 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 1;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:1 grid';
            };

            state.animation.instances.sixty_four = 1;

        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:1 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 2;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:2 grid';
            };

            state.animation.instances.sixty_four = 9;
            
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:1 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 3;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:3 grid';
            };

            state.animation.instances.sixty_four = 17;
            
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:1 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 4;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:4 grid';
            };
            
            state.animation.instances.sixty_four = 25;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:1 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 5;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:5 grid';
            };
           
            
            state.animation.instances.sixty_four = 33;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:1 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 6;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:6 grid';
            };
            
            
            state.animation.instances.sixty_four = 41;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:1 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 7;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:7 grid';
            };
            
            state.animation.instances.sixty_four = 49;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:1 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 8;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:8 grid';
            };

            state.animation.instances.sixty_four = 57;
        };

        // x axis: 2

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))) {
            console.log('mouse is in clientX:2 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 2;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:2 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 10;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:2 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 18;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:2 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 26;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:2 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 34;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:2 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 42;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:2 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 50;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:2 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 58;
        };

        // x axis: 3
        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:3 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 3;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:3 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 11;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:3 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 19;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:3 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 27;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:3 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 35;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:3 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 43;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:3 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 51;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:3 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 59;
        };

        // x axis: 4
        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:4 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 4;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:4 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 12;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:4 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 20;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:4 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 28;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:4 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 36;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:4 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 44;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:4 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 52;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:4 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 60;
        };

        // x axis: 5
        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:5 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 1;

        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:5 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 13;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:5 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 21;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:5 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 29;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:5 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 37;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:5 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 45;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:5 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 53;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:5 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 61;
        };

        // x axis: 6

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:6 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 6;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:6 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 14;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:6 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 22;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:6 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 30;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:6 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 38;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:6 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 46;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:6 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 54;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:6 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 62;
        };

        // x axis: 7
        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:7 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 7;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:7 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 15;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:7 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 23;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:7 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 31;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:7 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 39;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:7 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 47;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:7 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 55;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:7 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 63;
        };

        // x axis: 8
        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:8 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 8;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:8 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 16;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:8 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 24;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:8 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 32;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:8 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 40;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:8 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 48;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:8 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 56;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:8 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 64;
        };

        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app_body').addEventListener("touchstart", function(event) {

        state = from_index.Handle_return_state();

        from_index.HANDLE_animation_cursor_moved();

        if (document.getElementById('track_x') != null) {
            document.getElementById('track_x').style =
                'top: ' + (0) + 'px; \
            left: ' + (state.events.touch.clientX) + 'px ;';
        };
        if (document.getElementById('track_y') != null) {
            document.getElementById('track_y').style =
                'top: ' + (state.events.touch.clientY) + 'px; \
            left: ' + (0) + 'px ;';
        };

        state.events.touch.clientX = event.touches[0].clientX;
        state.events.touch.clientY = event.touches[0].clientY;

        state.events.mouse.enter = true;
        state.events.mouse.leave = false;

        state.ui.timeout.display = false;
        state.events.mouse.leavetimer = 0;

        // x axis: 1
        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:1 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 1;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:1 grid';
            };

            state.animation.instances.sixty_four = 1;

        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:1 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 2;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:2 grid';
            };

            state.animation.instances.sixty_four = 9;
            
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:1 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 3;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:3 grid';
            };

            state.animation.instances.sixty_four = 17;
            
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:1 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 4;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:4 grid';
            };
            
            state.animation.instances.sixty_four = 25;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:1 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 5;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:5 grid';
            };
           
            
            state.animation.instances.sixty_four = 33;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:1 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 6;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:6 grid';
            };
            
            
            state.animation.instances.sixty_four = 41;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:1 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 7;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:7 grid';
            };
            
            state.animation.instances.sixty_four = 49;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:1 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 8;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:8 grid';
            };

            state.animation.instances.sixty_four = 57;
        };

        // x axis: 2

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))) {
            console.log('mouse is in clientX:2 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 2;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:2 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 10;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:2 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 18;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:2 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 26;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:2 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 34;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:2 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 42;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:2 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 50;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:2 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 58;
        };

        // x axis: 3
        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:3 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 3;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:3 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 11;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:3 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 19;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:3 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 27;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:3 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 35;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:3 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 43;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:3 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 51;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:3 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 59;
        };

        // x axis: 4
        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:4 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 4;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:4 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 12;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:4 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 20;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:4 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 28;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:4 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 36;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:4 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 44;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:4 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 52;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:4 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 60;
        };

        // x axis: 5
        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:5 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 1;

        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:5 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 13;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:5 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 21;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:5 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 29;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:5 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 37;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:5 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 45;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:5 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 53;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:5 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 61;
        };

        // x axis: 6

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:6 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 6;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:6 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 14;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:6 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 22;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:6 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 30;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:6 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 38;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:6 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 46;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:6 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 54;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:6 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 62;
        };

        // x axis: 7
        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:7 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 7;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:7 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 15;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:7 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 23;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:7 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 31;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:7 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 39;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:7 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 47;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:7 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 55;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:7 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 63;
        };

        // x axis: 8
        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:8 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 8;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:8 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 16;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:8 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 24;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:8 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 32;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:8 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 40;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:8 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 48;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:8 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 56;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:8 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 64;
        };

        // cursor enter
        if (state.animation.instances.loaded == true && state.animation.instances.cursor_moved == false) {
            from_index.HANDLE_animation_cursor_moved();
        }

        // see index for timed events of pause/timeout
        //alert('touchstart');
        console.log(event.touches[0])

        if ((document.getElementById('touches')) != null ) {
            document.getElementById('touches').innerHTML = (event.touches.length)
            document.getElementById('touch_start_client_X').innerHTML = (event.touches[0].clientX)
            document.getElementById('dragDistanceXStart').innerHTML = (event.touches[0].clientX)
            document.getElementById('touch_start_client_Y').innerHTML = (event.touches[0].clientY)
            document.getElementById('dragDistanceYStart').innerHTML = (event.touches[0].clientY)
            document.getElementById('touch_start_force').innerHTML = (event.touches[0].force)
        }

        state.ui.interaction.key.xaxis = state.events.mouse.game_bit.clientX;
        state.ui.interaction.key.yaxis = state.events.mouse.game_bit.clientY;


        if (document.getElementById('component_app_gui_key') != null) {
            let component_app_gui_key = document.getElementById('component_app_gui_key');
            component_app_gui_key.style =
                'height: ' + ( ((state.ui.interaction.key.height)) * (state.ux.dimensions.height8)) + 'px;' +
                'width: ' + ( ((state.ui.interaction.key.width)) * (state.ux.dimensions.width8)) + 'px;' +
                'top: ' + ( ((state.ui.interaction.key.yaxis) - 1 ) * (state.ux.dimensions.height8)) + 'px;' +
                'left: ' + ( ((state.ui.interaction.key.xaxis) - 1 ) * (state.ux.dimensions.width8)) + 'px;';
        };


        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app_body').addEventListener("touchend", function(event) {

        state = from_index.Handle_return_state();

        state.events.mouse.enter = false;
        state.events.mouse.leave = true;

        // see index for timed events of pause/timeout
        //alert('touchend');
        console.log(event.changedTouches[0]);


        // x axis: 1
        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:1 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 1;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:1 grid';
            };

            state.animation.instances.sixty_four = 1;

        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:1 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 2;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:2 grid';
            };

            state.animation.instances.sixty_four = 9;
            
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:1 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 3;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:3 grid';
            };

            state.animation.instances.sixty_four = 17;
            
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:1 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 4;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:4 grid';
            };
            
            state.animation.instances.sixty_four = 25;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:1 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 5;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:5 grid';
            };
           
            
            state.animation.instances.sixty_four = 33;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:1 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 6;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:6 grid';
            };
            
            
            state.animation.instances.sixty_four = 41;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:1 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 7;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:7 grid';
            };
            
            state.animation.instances.sixty_four = 49;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 0)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:1 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 1;
            state.events.mouse.game_bit.clientY = 8;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:8 grid';
            };

            state.animation.instances.sixty_four = 57;
        };

        // x axis: 2

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))) {
            console.log('mouse is in clientX:2 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 2;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:2 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 10;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:2 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 18;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:2 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 26;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:2 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 34;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:2 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 42;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:2 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 50;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 1)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:2 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 2;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 58;
        };

        // x axis: 3
        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:3 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 3;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:3 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 11;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:3 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 19;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:3 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 27;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:3 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 35;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:3 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 43;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:3 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 51;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 2)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:3 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 3;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 59;
        };

        // x axis: 4
        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:4 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 4;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:4 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 12;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:4 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 20;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:4 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 28;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:4 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 36;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:4 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 44;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:4 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 52;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 3)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:4 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 4;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 60;
        };

        // x axis: 5
        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:5 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 5;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:5 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 13;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:5 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 21;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:5 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 29;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:5 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 37;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:5 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 45;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:5 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 53;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:5 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 5;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 61;
        };

        // x axis: 6

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:6 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 6;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:6 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 14;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:6 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 22;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:6 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 30;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:6 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 38;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:6 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 46;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:6 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 54;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 5)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:6 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 6;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 62;
        };

        // x axis: 7
        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:7 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 7;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:7 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 15;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:7 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 23;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:7 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 31;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:7 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 39;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:7 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 47;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:7 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 55;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 6)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:7 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 7;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 63;
        };

        // x axis: 8
        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:8 x clientY:1 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 1;

            state.animation.instances.sixty_four = 8;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:8 x clientY:2 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 2;

            state.animation.instances.sixty_four = 16;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:8 x clientY:3 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 3;

            state.animation.instances.sixty_four = 24;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:8 x clientY:4 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 4;

            state.animation.instances.sixty_four = 32;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:8 x clientY:5 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 5;

            state.animation.instances.sixty_four = 40;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:8 x clientY:6 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 6;

            state.animation.instances.sixty_four = 48;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:8 x clientY:7 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 7;

            state.animation.instances.sixty_four = 56;
        };

        if (
            ((state.events.touch.clientX > (state.ux.dimensions.width8 * 7)) && (state.events.touch.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((state.events.touch.clientX < (state.ux.dimensions.width8 * 8)) && (state.events.touch.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:8 x clientY:8 grid');
            state.events.mouse.game_bit.clientX = 8;
            state.events.mouse.game_bit.clientY = 8;

            state.animation.instances.sixty_four = 64;
        };

        if ((document.getElementById('touch_end_client_X')) != null ) {
            document.getElementById('touch_end_client_X').innerHTML = (event.changedTouches[0].clientX)
            document.getElementById('touch_end_client_Y').innerHTML = (event.changedTouches[0].clientY)
            document.getElementById('touch_end_force').innerHTML = (event.changedTouches[0].force)
        }
        state.events.touch.dragDistanceX = (event.changedTouches[0].clientX - state.events.touch.clientX)
        state.events.touch.dragDistanceY = (event.changedTouches[0].clientY - state.events.touch.clientY)

        console.log('event.changedTouches[0].rotationAngle');
        console.log(event.changedTouches[0].rotationAngle);

        if ((document.getElementById('rotationAngle')) != null ) {
            document.getElementById('rotationAngle').innerHTML = (event.changedTouches[0].rotationAngle)
        };

        console.log('event.changedTouches[0].radius');
        console.log(event.changedTouches[0].radiusX);
        if ((document.getElementById('radiusX')) != null ) {
            document.getElementById('radiusX').innerHTML = (event.changedTouches[0].radiusX)
        };

        console.log(event.changedTouches[0].radiusY);
        if ((document.getElementById('radiusY')) != null ) {
            document.getElementById('radiusY').innerHTML = (event.changedTouches[0].radiusY)
        };

        console.log('state.events.touch.dragDistance');
        console.log(state.events.touch.dragDistanceX);
        if ((document.getElementById('dragDistanceX')) != null ) {
            document.getElementById('dragDistanceX').innerHTML = (state.events.touch.dragDistanceX)
            document.getElementById('dragDistanceXEnd').innerHTML = (event.changedTouches[0].clientX)
        };

        console.log(state.events.touch.dragDistanceY);
        if ((document.getElementById('dragDistanceY')) != null ) {
            document.getElementById('dragDistanceY').innerHTML = (state.events.touch.dragDistanceY)
            document.getElementById('dragDistanceYEnd').innerHTML = (event.changedTouches[0].clientY)
        };


        if (state.events.touch.dragDistanceX < -250) {
            alert('dragDistanceX < -250, left');
        }

        if (state.events.touch.dragDistanceX > 250) {
            alert('dragDistanceX > 250, right');
        }

        if (state.events.touch.dragDistanceY > 250) {
            alert('dragDistanceY > 250 up');
            from_index.HANDLE_animation_scrolled();
            from_index.event_wheel_up();
        }

        if (state.events.touch.dragDistanceY < -250) {
            alert('dragDistanceY < -250 down');
            from_index.HANDLE_animation_scrolled_down();
            from_index.event_wheel_down();
        }

        from_index.Handle_get_state_from_events();

    });

    window.ondevicemotion = function(event) {

        state = from_index.Handle_return_state();

        // event.accelerationIncludingGravity.x
        // event.accelerationIncludingGravity.y
        // event.accelerationIncludingGravity.z
        ///alert('event.accelerationIncludingGravity.x: ' + event.accelerationIncludingGravity.x);
        ///alert('event.accelerationIncludingGravity.y: ' + event.accelerationIncludingGravity.y);
        ///alert('event.accelerationIncludingGravity.z: ' + event.accelerationIncludingGravity.z);

        let event_accelerationIncludingGravity_x = event.accelerationIncludingGravity.x;
        let event_accelerationIncludingGravity_y = event.accelerationIncludingGravity.y;
        let event_accelerationIncludingGravity_z = event.accelerationIncludingGravity.z;

        if ((document.getElementById('event_accelerationIncludingGravity_x')) != null ) {
            document.getElementById('event_accelerationIncludingGravity_x').innerHTML = event_accelerationIncludingGravity_x;
        
            if (event.accelerationIncludingGravity.x > 8) {
                document.getElementById('last_action').innerHTML = 'shook right';
            };


            if (event.accelerationIncludingGravity.x < -8) {
                document.getElementById('last_action').innerHTML = 'shook left';
                    
                // key_pressed
                if (state.animation.instances.loaded == true && state.animation.instances.scrolled == false) {
                    alert('shook left')
                };
            };

        };

        if ((document.getElementById('event_accelerationIncludingGravity_y')) != null ) {
            document.getElementById('event_accelerationIncludingGravity_y').innerHTML = event_accelerationIncludingGravity_y;

            if (event.accelerationIncludingGravity.y > 8) {
                document.getElementById('last_action').innerHTML = 'upside down';
            };


            if (event.accelerationIncludingGravity.y < -8) {
                document.getElementById('last_action').innerHTML = 'rightside up';
            };

        };

        if ((document.getElementById('event_accelerationIncludingGravity_z')) != null ) {
            document.getElementById('event_accelerationIncludingGravity_z').innerHTML = event_accelerationIncludingGravity_z;

            if (event.accelerationIncludingGravity.z > 8) {
                document.getElementById('last_action').innerHTML = 'overhead';
            };


            if (event.accelerationIncludingGravity.z < -8) {
                document.getElementById('last_action').innerHTML = 'laid flat';
            };

        };

        from_index.Handle_get_state_from_events();

    };

    window.ondeviceorientation = function(event) {
        
        state = from_index.Handle_return_state();

        // event.alpha
        // event.beta
        // event.gamma
        ///alert('event.alpha: ' + event.alpha);
        ///alert('event.beta: ' + event.beta);
        ///alert('event.gamma: ' + event.gamma);

        let event_alpha = event.alpha;
        let event_beta = event.beta;
        let event_gamma = event.gamma;

        if ((document.getElementById('event_alpha')) != null ) {
            document.getElementById('event_alpha').innerHTML = event_alpha;
            state.events.mouse.alpha = event_alpha;
        };

        if ((document.getElementById('event_beta')) != null ) {
            document.getElementById('event_beta').innerHTML = event_beta;
            state.events.mouse.beta = event_beta;
        };

        if ((document.getElementById('event_gamma')) != null ) {
            document.getElementById('event_gamma').innerHTML = event_gamma;
            state.events.mouse.gamma = event_gamma;
        };
        
        let options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        let success = (pos) => {
            let crd = pos.coords;

            if ((document.getElementById('location')) != null ) {
                document.getElementById('location').innerHTML = (`Your current position is: Latitude : ${crd.latitude} Longitude: ${crd.longitude} More or less ${crd.accuracy} meters.`);
            };

        };

        let error = (err) => {
          console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);

        from_index.Handle_get_state_from_events();

    };

};

})(), 1000);

let Handle_return_state_from_events = () => {
    return state
};

export default {
    state,
    Handle_return_state_from_events
}