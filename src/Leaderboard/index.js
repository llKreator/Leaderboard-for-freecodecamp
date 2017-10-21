import React, { Component } from 'react';
import Display from './Display';
import Fetch from 'react-fetch'

class Leaderboard extends Component {
    state = {
        isRecent: true,
        recentInfo: null,
        allTimeInfo: null
    }
    showRecent = () => {
        this.setState({
            isRecent: true
        })
    }
    showAllTime = () => {
        this.setState({
            isRecent: false
        })
    }
    render() {
        return (
            <div>
                <Fetch
                    url="https://fcctop100.herokuapp.com/api/fccusers/top/recent"
                    onSuccess={(res) => { this.setState({ recentInfo: res }); }}
                >
                </Fetch>
                <Fetch
                    url="https://fcctop100.herokuapp.com/api/fccusers/top/alltime"
                    onSuccess={(res) => { this.setState({ allTimeInfo: res }); }}
                >
                </Fetch>

                {this.state.recentInfo && this.state.allTimeInfo ?
                    <Display
                        recentInfo={this.state.recentInfo}
                        allTimeInfo={this.state.allTimeInfo}
                        isRecent={this.state.isRecent}
                        showRecent={this.showRecent}
                        showAllTime={this.showAllTime}
                    />
                    : ''}
            </div>
        );
    }
}

export default Leaderboard;