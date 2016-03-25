import React from 'react'
import { connect } from 'react-redux'



class VideoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        videoList: []
    }
  }

  componentWillMount() {
    var self = this;
    let {videos} = this.props
    videos.then(videoList => {
      self.setState({
        videoList
      })
    })
  }


  render() {
    console.log(this)
    return (
      <div className="video-list">
        { this.state.videoList.map((video, n) => (
            <iframe className="video"
                  key={n}
                  width="30%" height="auto"
                  src={"https://www.youtube.com/embed/" + video.id }
                  frameBorder="0"
                  allowFullScreen></iframe>
          ))
        }
      </div>
    )

  }

}

export default VideoList
