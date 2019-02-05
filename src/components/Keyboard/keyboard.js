import React from 'react';
import "./keyboard.css"
function Keyboard(){
 
  return ( 
      
    <section>
    <div id="focus" className="keys">
            <br/>
            <br/>
            <br/>

        <div id="row1">
        <div data-key="81" className="key">
            <kbd>q</kbd>
        </div>
        <div data-key="87" className="key">
            <kbd>w</kbd>
        </div>
        <div data-key="69" className="key">
            <kbd>e</kbd>
        </div>
        <div data-key="82" className="key">
            <kbd>r</kbd>
        </div>
        <div data-key="84" className="key">
            <kbd>t</kbd>
        </div>
        <div data-key="89" className="key">
            <kbd>y</kbd>
        </div>
        <div data-key="85" className="key">
            <kbd>u</kbd>
        </div>
        <div data-key="73" className="key">
            <kbd>i</kbd>
        </div>
        <div data-key="79" className="key">
            <kbd>o</kbd>
        </div>
        <div data-key="80" className="key">
            <kbd>p</kbd>
        </div>
        <br/>
        <br/>
        </div>
        <div id="row2">
        <div data-key="65" className="key">
            <kbd>a</kbd>
        </div>
        <div data-key="83" className="key">
            <kbd>s</kbd>
        </div>
        <div data-key="68" className="key">
            <kbd>d</kbd>
        </div>
        <div data-key="70" className="key">
            <kbd>f</kbd>
        </div>
        <div data-key="71" className="key">
            <kbd>g</kbd>
        </div>
        <div data-key="72" className="key">
            <kbd>h</kbd>
        </div>
        <div data-key="74" className="key">
            <kbd>j</kbd>
        </div>
        <div data-key="75" className="key">
            <kbd>k</kbd>
        </div>
        <div data-key="76" className="key">
                <kbd>l</kbd>
        </div>
        <br/>
        <br/>
        </div> 
        <div id="row3">
        <div data-key="90" className="key">
            <kbd>z</kbd>
        </div>
        <div data-key="88" className="key">
            <kbd>x</kbd>
        </div>
        <div data-key="67" className="key">
            <kbd>c</kbd>
        </div>
        <div data-key="86" className="key">
            <kbd>v</kbd>
        </div>
        <div data-key="66" className="key">
            <kbd>b</kbd>
        </div>
        <div data-key="78" className="key">
            <kbd>n</kbd>
        </div>
        <div data-key="77" className="key">
            <kbd>m</kbd>
        </div>
        </div>
    </div>
    </section>
);
}
export default Keyboard;