import React from 'react';
import ReactPlayer from 'react-player';

function VideoDecison() {
  // Inline styles for responsiveness
  const playerWrapperStyle = {
    position: 'relative',
    paddingTop: '56.25%', // 16:9 aspect ratio
    height: 0,
    overflow: 'hidden',
  };

  const reactPlayerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  return (
    <div style={playerWrapperStyle}>
      <ReactPlayer
        style={reactPlayerStyle}
        url='https://youtube.com/watch?v=dkkJhGifbHo&feature=shared'
        width='100%'
        height='100%'
        controls={true}
        playbackRate={1}
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
              preload: 'auto',
              playsInline: true, // Allows inline playback on iOS devices
            },
          },
        }}
      />
    </div>
  );
}

export default VideoDecison;
