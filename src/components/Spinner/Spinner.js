import React from 'react';

const Spinner = (props) => {
    return (
        <div style={{background: 'white', textAlign: 'center'}}>
        <svg style={{ width: '50%'}} version="1.1" id="L2" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
             viewBox="0 0 100 100" enableBackground="new 0 0 100 100" >
<circle fill="none" stroke="gray" strokeWidth="4" strokeMiterlimit="10" cx="50" cy="50" r="48"/>
            <line fill="none" strokeLinecap="round" stroke="grey" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
  <animateTransform
      attributeName="transform"
      dur="2s"
      type="rotate"
      from="0 50 50"
      to="360 50 50"
      repeatCount="indefinite" />
</line>
            <line fill="none" strokeLinecap="round" stroke="gray" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
  <animateTransform
      attributeName="transform"
      dur="15s"
      type="rotate"
      from="0 50 50"
      to="360 50 50"
      repeatCount="indefinite" />
</line>
</svg>
        </div>
    )
};

export default Spinner;