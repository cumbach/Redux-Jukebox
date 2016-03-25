import React from 'react'
import { connect } from 'react-redux'
import { youtube } from '../services'



class VideoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        videoList: []
    }
  }

  componentWillMount() {
    this.makeCall()
  }

  componentDidUpdate() {
    this.makeCall()
  }

  makeCall() {
    var self = this;
    let videos = youtube.getVideos(this.props.selectedSong.name)
    videos.then(videoList => {
      self.setState({
        videoList
      })
    })
  }


  render() {
    return (
      <div>
        <div className="video-list">
          { this.state.videoList.map((video, n) => (
              <iframe className="video"
                    key={n}
                    src={"https://www.youtube.com/embed/" + video.id }
                    frameBorder="0"
                    allowFullScreen></iframe>
            ))
          }
        </div>
      </div>
    )

  }

}

export default VideoList
