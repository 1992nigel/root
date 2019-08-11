
import functions from './functions';

let element_lead = (x) => {
    
  let data = `
    <section>
       <h1>Nownigel</h1> ${x}
       <h2>Nigel is an engineer, digital artist and content creator</h2>
       <h3>Last updated: 2019</h3>
       <h4>Youtube, Twitch, Twitter, Instagram, Facebook, Spotify</h4>
       <h5>Users & Creators</h5>
       <h6>all the content</h6>
       <p>Every <u>site feature</u> is voted on at the <b>end of <i>each</i> week</b></p>
    </section>

    <section>
      <h1>Search</h1>
      <input id="username_here_please" type="text" placeholder="username_here_please" class="width_100 float_left" />
      <button>search</button>
    </section>
  `;

  let element = functions.Generate_new_fragment.appendChild(functions.Generate_new_div(
    '',
    '',
    data))

  return element

};


export default {
  element_lead
};