import React from 'react';
import './styles.scss';
import WindowMask from '../../assets/images/window.svg';
import BgVideo from '../../assets/videos/space1.mp4';

const Background = () => (
  <div className="background__container">
    <div className="video__container">
      <video className="video" src={BgVideo} muted autoPlay loop></video>
      <img className="window-mask" src={WindowMask} alt="window-mask" />
    </div>
  </div>
);

export default Background;
