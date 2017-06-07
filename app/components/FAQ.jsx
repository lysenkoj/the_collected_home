import React, { Component } from 'react';
import { Link } from 'react-router';


/* -----------------    COMPONENT     ------------------ */
export default class FAQ extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return(
    <div className='faqContainer'>
      <h1>OUR FAQ</h1>
      {/*REPLACE DIV WITH IMG*/}
      <div className='headerImage'></div>
      <div className='faqParagraph'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed mollis ante, id lacinia urna. Mauris arcu nisl, porttitor vel tincidunt nec, fringilla ut erat. Suspendisse sagittis orci non dui varius aliquet. Proin ut ante ante. Curabitur a vehicula turpis. Proin vulputate ante nisl. Integer finibus lorem vitae sollicitudin feugiat. Quisque metus sapien, congue eget ligula et, bibendum facilisis nisi.</p>
      </div>
      <div id='smallDivider' />
      <div className='faqParagraph'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed mollis ante, id lacinia urna. Mauris arcu nisl, porttitor vel tincidunt nec, fringilla ut erat. Suspendisse sagittis orci non dui varius aliquet. Proin ut ante ante. Curabitur a vehicula turpis. Proin vulputate ante nisl. Integer finibus lorem vitae sollicitudin feugiat. Quisque metus sapien, congue eget ligula et, bibendum facilisis nisi.</p>
      </div>
      <div id='smallDivider' />
      <div className='faqParagraph'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed mollis ante, id lacinia urna. Mauris arcu nisl, porttitor vel tincidunt nec, fringilla ut erat. Suspendisse sagittis orci non dui varius aliquet. Proin ut ante ante. Curabitur a vehicula turpis. Proin vulputate ante nisl. Integer finibus lorem vitae sollicitudin feugiat. Quisque metus sapien, congue eget ligula et, bibendum facilisis nisi.</p>
      </div>
      <img id="signature" src='images/signature.gif' />
    </div>
    )
  }
}

