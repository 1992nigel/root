// Imports
import from_index from '../index.js';

let state = '';

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
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 1;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:1 grid';
            };

        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:1 x clientY:2 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 2;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:2 grid';
            };
            
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:1 x clientY:3 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 3;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:3 grid';
            };
            
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:1 x clientY:4 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 4;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:4 grid';
            };
            
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:1 x clientY:5 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 5;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:5 grid';
            };
            
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:1 x clientY:6 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 6;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:6 grid';
            };
            
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:1 x clientY:7 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 7;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:7 grid';
            };
            
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:1 x clientY:8 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 8;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:8 grid';
            };
            
        };

        // x axis: 2

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 1)))) {
            console.log('mouse is in clientX:2 x clientY:1 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:2 x clientY:2 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:2 x clientY:3 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:2 x clientY:4 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:2 x clientY:5 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:2 x clientY:6 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:2 x clientY:7 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:2 x clientY:8 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 8;
        };

        // x axis: 3
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:3 x clientY:1 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:3 x clientY:2 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:3 x clientY:3 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:3 x clientY:4 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:3 x clientY:5 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:3 x clientY:6 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:3 x clientY:7 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:3 x clientY:8 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 8;
        };

        // x axis: 4
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:4 x clientY:1 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:4 x clientY:2 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:4 x clientY:3 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:4 x clientY:4 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:4 x clientY:5 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:4 x clientY:6 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:4 x clientY:7 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:4 x clientY:8 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 8;
        };

        // x axis: 5
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:5 x clientY:1 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:5 x clientY:2 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:5 x clientY:3 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:5 x clientY:4 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:5 x clientY:5 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:5 x clientY:6 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:5 x clientY:7 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:5 x clientY:8 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 8;
        };

        // x axis: 6

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:6 x clientY:1 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:6 x clientY:2 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:6 x clientY:3 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:6 x clientY:4 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:6 x clientY:5 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:6 x clientY:6 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:6 x clientY:7 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:6 x clientY:8 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 8;
        };

        // x axis: 7
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:7 x clientY:1 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:7 x clientY:2 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:7 x clientY:3 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:7 x clientY:4 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:7 x clientY:5 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:7 x clientY:6 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:7 x clientY:7 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:7 x clientY:8 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 8;
        };

        // x axis: 8
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:8 x clientY:1 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:8 x clientY:2 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:8 x clientY:3 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:8 x clientY:4 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:8 x clientY:5 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:8 x clientY:6 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:8 x clientY:7 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:8 x clientY:8 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 8;
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
                state.ui.particles.fourground_man.transform = false;
                console.log("instance: wheel up");
            };

        };

        if (event.deltaY > 0) {
            console.log('wheel down');

            if ((document.getElementById('wheel_direction')) != null ) {
                document.getElementById('wheel_direction').innerHTML = 'down';
                state.ui.particles.fourground_man.transform = true;
                console.log("instance: wheel down");
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


        // space
        if (keyCode == 32) {
            console.log('spacebar');
            state.data.local = !state.data.local;

            if (state.data.local == true) {
                document.getElementById('icon_register').classList.remove('display_none');
                document.getElementById('icon_login').classList.remove('display_none');
                document.getElementById('icon_sign_up').classList.remove('display_none');
                document.getElementById('icon_sign_out').classList.add('display_none');
            };

            if (state.data.local == false) {
                document.getElementById('icon_register').classList.add('display_none');
                document.getElementById('icon_login').classList.add('display_none');
                document.getElementById('icon_sign_up').classList.add('display_none');
                document.getElementById('icon_sign_out').classList.remove('display_none');
            };
        };

        // zero
        if (keyCode == 48) {
            console.log('0');
            state.ui.modal.menu.left.transform = !state.ui.modal.menu.left.transform;
            //from_index.HANDLE_animation_null();
        };
        // one
        if (keyCode == 49) {
            console.log('1');
            //from_index.HANDLE_animation_loading();
        };
        // two
        if (keyCode == 50) {
            console.log('2');
            //from_index.HANDLE_animation_begin();
        };
        // three
        if (keyCode == 51) {
            console.log('3');
            //from_index.HANDLE_animation_action();
        };
        // four
        if (keyCode == 52) {
            console.log('4');
            //from_index.HANDLE_animation_title();
        };
        // five
        if (keyCode == 53) {
            console.log('5')
            //from_index.HANDLE_animation_idle();
        };
        // six
        if (keyCode == 54) {
            console.log('6');
            //from_index.HANDLE_animation_start_1();
        };
        // seven
        if (keyCode == 55) {
            console.log('7');
            //from_index.HANDLE_animation_enter();
        };
        // eight
        if (keyCode == 56) {
            console.log('8');
            //from_index.HANDLE_animation_continue_1();
        };
        // nine
        if (keyCode == 57) {
            console.log('9');
            //from_index.HANDLE_animation_continue_2();
        };

        // esc
        if (keyCode == 27) {
            from_index.Handle_beginning_scene();
        };
        
        // q
        if (keyCode == 81) {
            //state.animation.scene = 0;
            from_index.HANDLE_animation_fold_1();
        };
        
        // w
        if (keyCode == 87) {
            from_index.HANDLE_animation_fold_1_return();
        };

        //e
        if (keyCode == 69) {
            from_index.HANDLE_animation_fold_2();
        };
        
        //r
        if (keyCode == 82) {
            from_index.HANDLE_animation_fold_2_return();
        };

        //t
        if (keyCode == 84) {
            from_index.HANDLE_animation_fold_3();
        };
        
        //y
        if (keyCode == 89) {
            from_index.HANDLE_animation_fold_3_return();
        };
                
        // u
        if (keyCode == 85) {
            from_index.HANDLE_animation_fold_4();
        };

        //i
        if (keyCode == 73) {
            from_index.HANDLE_animation_fold_4_return();
        };
        
        //o
        if (keyCode == 79) {
            from_index.HANDLE_animation_fold_5();
        };

        //p
        if (keyCode == 80) {
            from_index.HANDLE_animation_fold_5_return();
        };
        
        //[
        if (keyCode == 219) {
            from_index.HANDLE_animation_fold_6();
        };

        //]
        if (keyCode == 221) {
            from_index.HANDLE_animation_fold_6_return();
        };

        // enter
        if (keyCode == 13) {
            from_index.HANDLE_animation();
        };

        // arrow up
        if (keyCode == 38) {
            state.animation.scene = (state.animation.scene + 1);
            from_index.HANDLE_animation_continue_4();
            from_index.HANDLE_animations();
        };

        // arrow down
        if (keyCode == 40) {
            state.animation.scene = (state.animation.scene - 1);
            from_index.HANDLE_animations();
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

        //state.animation.scene = (state.animation.scene + 1);
        //alert(state.animation.scene);

        if (index > -1) {
            state.events.key.keys.splice(index, 1);
        };
        
        if ((document.getElementById('key_keys')) != null ) {
            document.getElementById('key_keys').innerHTML = (state.events.key.keys)
        }

        if ((document.getElementById('key_key_up')) != null ) {
            document.getElementById('key_key_up').innerHTML = (event.keyCode)
        }

        
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


        if (state.ui.gui.fold.enter.display == true) {

            from_index.HANDLE_animations_init();
            state.ui.gui.fold.enter.display == false;
            state.ui.gui.fold.entered.display == true;
        }

        // x axis: 1
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:1 x clientY:1 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 1;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:1 grid';
            };

            from_index.HANDLE_animation_action_layer_8_start();

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_1');

        } else {
            from_index.HANDLE_animation_action_layer_8_end();
        }

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:1 x clientY:2 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 2;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:2 grid';
            };

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_9');
            
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:1 x clientY:3 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 3;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:3 grid';
            };

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_17');
            
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:1 x clientY:4 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 4;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:4 grid';
            };
            
            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_25');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:1 x clientY:5 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 5;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:5 grid';
            };
           
            
            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_33');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:1 x clientY:6 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 6;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:6 grid';
            };
            
            
            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_41');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:1 x clientY:7 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 7;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:7 grid';
            };
            
            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_49');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:1 x clientY:8 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 8;
            
            if ((document.getElementById('click_position')) != null ) {
                document.getElementById('click_position').innerHTML = 'mouse is in clientX:1 x clientY:8 grid';
            };
            
            from_index.HANDLE_animation_eyes();

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_57');
        };

        // x axis: 2

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 1)))) {
            console.log('mouse is in clientX:2 x clientY:1 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 1;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_2');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:2 x clientY:2 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 2;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_10');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:2 x clientY:3 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 3;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_18');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:2 x clientY:4 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 4;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_26');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:2 x clientY:5 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 5;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_34');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:2 x clientY:6 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 6;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_42');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:2 x clientY:7 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 7;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_50');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:2 x clientY:8 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 8;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_58');
        };

        // x axis: 3
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:3 x clientY:1 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 1;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_3');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:3 x clientY:2 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 2;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_11');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:3 x clientY:3 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 3;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_19');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:3 x clientY:4 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 4;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_27');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:3 x clientY:5 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 5;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_35');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:3 x clientY:6 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 6;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_43');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:3 x clientY:7 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 7;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_51');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:3 x clientY:8 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 8;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_59');
        };

        // x axis: 4
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:4 x clientY:1 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 1;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_4');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:4 x clientY:2 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 2;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_12');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:4 x clientY:3 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 3;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_20');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:4 x clientY:4 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 4;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_28');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:4 x clientY:5 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 5;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_36');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:4 x clientY:6 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 6;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_44');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:4 x clientY:7 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 7;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_52');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:4 x clientY:8 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 8;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_60');
        };

        // x axis: 5
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:5 x clientY:1 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 1;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_5');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:5 x clientY:2 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 2;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_13');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:5 x clientY:3 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 3;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_21');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:5 x clientY:4 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 4;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_29');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:5 x clientY:5 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 5;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_37');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:5 x clientY:6 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 6;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_45');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:5 x clientY:7 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 7;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_53');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:5 x clientY:8 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 8;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_61');
        };

        // x axis: 6

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:6 x clientY:1 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 1;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_6');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:6 x clientY:2 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 2;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_14');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:6 x clientY:3 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 3;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_22');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:6 x clientY:4 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 4;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_30');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:6 x clientY:5 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 5;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_38');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:6 x clientY:6 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 6;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_46');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:6 x clientY:7 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 7;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_54');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:6 x clientY:8 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 8;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_62');
        };

        // x axis: 7
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:7 x clientY:1 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 1;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_7');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:7 x clientY:2 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 2;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_15');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:7 x clientY:3 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 3;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_23');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:7 x clientY:4 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 4;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_31');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:7 x clientY:5 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 5;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_39');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:7 x clientY:6 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 6;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_47');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:7 x clientY:7 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 7;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_55');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:7 x clientY:8 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 8;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_63');
        };

        // x axis: 8
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:8 x clientY:1 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 1;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_8');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:8 x clientY:2 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 2;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_16');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:8 x clientY:3 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 3;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_24');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:8 x clientY:4 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 4;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_32');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:8 x clientY:5 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 5;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_40');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:8 x clientY:6 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 6;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_48');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:8 x clientY:7 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 7;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_56');
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:8 x clientY:8 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 8;

            from_index.HANDLE_animation_eyes();
            document.getElementById('animation_fourground_man_2_svg').classList.add('nownigel_gui_interaction_man_0_16_depth_200_face_64');
        };


        if ((document.getElementById('mouse_client_X')) != null ) {
            document.getElementById('mouse_client_X').innerHTML = (state.events.mouse.clientX)
            document.getElementById('mousedragDistanceXend').innerHTML = (state.events.mouse.clientX)
        }

        if ((document.getElementById('mouse_client_Y')) != null ) {
            document.getElementById('mouse_client_Y').innerHTML = (state.events.mouse.clientY)
            document.getElementById('mousedragDistanceYend').innerHTML = (state.events.mouse.clientY)
        }

        if (state.events.mouse.down == true) {
            console.log('mousemove + mousedown: event.clientX: ' + event.clientX);
            console.log('mousemove + mousedown: event.clientY: ' + event.clientY);

            document.getElementById('mouse_down_client_X').innerHTML = (state.events.mouse.clientX)
            document.getElementById('mouse_down_client_Y').innerHTML = (state.events.mouse.clientY)

            document.getElementById('mouse_up').innerHTML = state.events.mouse.up;

            if ((document.getElementById('componentCube')) != null ) {
                document.getElementById('componentCube')
                componentCube.style = 'transform: translateZ( -12.5vh ); transform: rotateY(' + (state.events.mouse.clientX) + 'deg ) rotateX( ' + (-state.events.mouse.clientY) + 'deg )';
            }
        }

        if (state.events.mouse.up == true) {
            console.log('mousemove + mousedown: event.clientX: ' + event.clientX);
            console.log('mousemove + mousedown: event.clientY: ' + event.clientY);

            document.getElementById('mouse_up').innerHTML = state.events.mouse.up;

            if ((document.getElementById('mouse_client_X')) != null ) {
                document.getElementById('mouse_up_client_X').innerHTML = (state.events.mouse.clientX)
                document.getElementById('mousedragDistanceXstart').innerHTML = (state.events.mouse.clientX)
            }

            if ((document.getElementById('mouse_client_Y')) != null ) {
                document.getElementById('mouse_up_client_Y').innerHTML = (state.events.mouse.clientY)
                document.getElementById('mousedragDistanceYstart').innerHTML = (state.events.mouse.clientY)
            }

            if ((document.getElementById('componentCube')) != null ) {
                document.getElementById('componentCube')
                componentCube.style = 'transform: translateZ( -12.5vh ); transform: rotateY(' + (state.events.mouse.clientX) + 'deg ) rotateX( ' + (-state.events.mouse.clientY) + 'deg )';
            }
        }

        from_index.Handle_get_state_from_events();

    });

    // Mouse Down
    document.getElementById('component_app_body').addEventListener('mousedown', function(event) {
        
        state = from_index.Handle_return_state();

        console.log('mousedown: event.clientX: ' + event.clientX);
        console.log('mousedown: event.clientY: ' + event.clientY);
        state.events.mouse.up = false;
        state.events.mouse.down = true;

        from_index.Handle_get_state_from_events();

    });

    // Mouse Up
    document.getElementById('component_app_body').addEventListener('mouseup', function(event) {
        
        state = from_index.Handle_return_state();

        console.log('mouseup: event.clientX: ' + event.clientX);
        console.log('mouseup: event.clientY: ' + event.clientY);
        state.events.mouse.up = true;
        state.events.mouse.down = false;

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

        state.ui.gui.top.transform = true;
        state.ui.gui.top_left.transform = true;
        state.ui.gui.top_right.transform = true;
        state.ui.gui.right.transform = true;
        state.ui.gui.left.transform = true;
        state.ui.gui.bottom.transform = true;
        state.ui.gui.bottom_right.transform = true;
        state.ui.gui.bottom_left.transform = true;

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
        
        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app_body').addEventListener("touchstart", function(event) {

        state = from_index.Handle_return_state();

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

        state.events.touch.clientX = event.touches[0].clientX;
        state.events.touch.clientY = event.touches[0].clientY;

        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app_body').addEventListener("touchend", function(event) {

        state = from_index.Handle_return_state();

        //alert('touchend');
        console.log(event.changedTouches[0])

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


        if (state.events.touch.dragDistanceX < -100) {
            alert('dragDistanceX < -100');
        }

        if (state.events.touch.dragDistanceX > 100) {
            alert('dragDistanceX > 100');
        }

        if (state.events.touch.dragDistanceY > 100) {
            alert('dragDistanceY > 100');
        }

        if (state.events.touch.dragDistanceY < -100) {
            //alert('dragDistanceY < -100');
            var nextPageUrl = document.getElementById('go_link').href;
            window.location.href = nextPageUrl;
        }

        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app_body').addEventListener("touchmove", function(event) {

        state = from_index.Handle_return_state();

        //alert('touchmove');
        console.log(event.touches[0])
        if ((document.getElementById('touch_end_client_X')) != null ) {
            document.getElementById('touch_end_client_X').innerHTML = (event.touches[0].clientX)
            document.getElementById('touch_end_client_Y').innerHTML = (event.touches[0].clientY)
            document.getElementById('touch_end_force').innerHTML = (event.touches[0].force)
        };

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
        };

        if ((document.getElementById('event_beta')) != null ) {
            document.getElementById('event_beta').innerHTML = event_beta;
        };

        if ((document.getElementById('event_gamma')) != null ) {
            document.getElementById('event_gamma').innerHTML = event_gamma;
        };

        document.getElementById('ball').style.top = '' + (-(event.beta * 10)) + '%' ;
        document.getElementById('ball').style.left = '' + (-(event.gamma * 10)) + '%' ;

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