import React, {Component} from 'react';
import video from './video.mp4'

class Video extends Component {
    constructor (props) {
        super(props);

        // this.state = {
        //     video: 'https://www.youtube.com/watch?v=Zj8Q-MaGM5g'
        // }
    }

    render () {
        return (
            <video id="background-video"loop autoPlay muted style={{
                position: "fixed",
                right: 0,
                bottom: 0,
                minWidth: "100%", 
                minHeight: "100%",
                zIndex: "-1"
            }}>
                <source src={video} type="video/mp4" />
                
            </video>
        )
    }
};

export default Video;