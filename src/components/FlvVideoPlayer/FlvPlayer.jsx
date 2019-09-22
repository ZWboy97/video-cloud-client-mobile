import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flvjs from 'flv.js';

/**
 * 将flv.js包装成React组件
 */
class FlvPlayer extends Component {

    // 定义组件对外的属性
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        /**
         * media URL, can be starts with 'https(s)' or 'ws(s)' (WebSocket)
         */
        url: PropTypes.string,
        /**
         * media type, 'flv' or 'mp4'
         */
        type: PropTypes.oneOf(['flv', 'mp4']).isRequired,
        /**
         * whether the data source is a **live stream**
         */
        isLive: PropTypes.bool,
        /**
         * whether to enable CORS for http fetching
         */
        cors: PropTypes.bool,
        /**
         * whether to do http fetching with cookies
         */
        withCredentials: PropTypes.bool,
        /**
         * whether the stream has audio track
         */
        hasAudio: PropTypes.bool,
        /**
         * whether the stream has video track
         */
        hasVideo: PropTypes.bool,
        /**
         * total media duration, in milliseconds
         */
        duration: PropTypes.bool,
        /**
         * total file size of media file, in bytes
         */
        filesize: PropTypes.number,
        /**
         * Optional field for multipart playback, see MediaSegment
         */
        segments: PropTypes.arrayOf(PropTypes.shape({
            /**
             * indicates segment duration in milliseconds
             */
            duration: PropTypes.number.isRequired,
            /**
             * indicates segment file size in bytes
             */
            filesize: PropTypes.number,
            /**
             * indicates segment file URL
             */
            url: PropTypes.string.isRequired,
        })),
        config: PropTypes.object,
        poster: PropTypes.string,
        height: PropTypes.string,
        width: PropTypes.string,
    }

    componentWillUnmount() {
        if (this.flvPlayer) {
            this.flvPlayer.unload();
            this.flvPlayer.detachMediaElement();
        }
    }

    initFlv = ($video) => {
        if ($video) {
            if (flvjs.isSupported()) {
                let flvPlayer = flvjs.createPlayer({ ...this.props }, this.props.config);
                flvPlayer.attachMediaElement($video);
                flvPlayer.load();
                flvPlayer.volume = 0.5;
                flvPlayer.play();
                this.flvPlayer = flvPlayer;
            }
        }
    }

    render() {
        const { className, style, poster, height, width
        } = this.props;
        return (
            <video
                className={className}
                controls
                style={style}
                poster={poster}
                ref={this.initFlv}
                height={height}
                width={width}
            />
        )
    }
}

export default FlvPlayer;