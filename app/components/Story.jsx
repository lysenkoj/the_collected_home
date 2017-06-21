import React, { Component } from 'react';
import { Link } from 'react-router';


/* -----------------    COMPONENT     ------------------ */
export default class Story extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return(
    <div className='storyContainer'>
      <h1>OUR STORY</h1>
      {/*REPLACE DIV WITH IMG*/}
      <div className='headerImage'></div>
      <div className='storyParagraph'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed mollis ante, id lacinia urna. Mauris arcu nisl, porttitor vel tincidunt nec, fringilla ut erat. Suspendisse sagittis orci non dui varius aliquet. Proin ut ante ante. Curabitur a vehicula turpis. Proin vulputate ante nisl. Integer finibus lorem vitae sollicitudin feugiat. Quisque metus sapien, congue eget ligula et, bibendum facilisis nisi.</p>
      </div>
      <div id='smallDivider' />
      <div className='storyParagraph'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed mollis ante, id lacinia urna. Mauris arcu nisl, porttitor vel tincidunt nec, fringilla ut erat. Suspendisse sagittis orci non dui varius aliquet. Proin ut ante ante. Curabitur a vehicula turpis. Proin vulputate ante nisl. Integer finibus lorem vitae sollicitudin feugiat. Quisque metus sapien, congue eget ligula et, bibendum facilisis nisi.</p>
      </div>
      <div id='smallDivider' />
      <div className='storyParagraph'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed mollis ante, id lacinia urna. Mauris arcu nisl, porttitor vel tincidunt nec, fringilla ut erat. Suspendisse sagittis orci non dui varius aliquet. Proin ut ante ante. Curabitur a vehicula turpis. Proin vulputate ante nisl. Integer finibus lorem vitae sollicitudin feugiat. Quisque metus sapien, congue eget ligula et, bibendum facilisis nisi.</p>
      </div>
      <img id="signature" src='images/signature.gif' />
    </div>
    )
  }
}

