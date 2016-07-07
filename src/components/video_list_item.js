import React from 'react';
import App from '../index.js';
const VideoListItem = (props) => {
  const video = props.video
  const title = props.video.snippet.title
  const thumb = props.video.snippet.thumbnails.default.url

  const onVideoSelect = props.onVideoSelect;

  console.log ("thumb")
  return   (
      <li className="list-group-item" onClick = {() =>{ onVideoSelect(video)}}>

        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={thumb} />
          </div>
          <div className="media-body">
            <div className="media-heading">{title}</div>
          </div>

        </div>
      </li>
    );
};


export default VideoListItem;
