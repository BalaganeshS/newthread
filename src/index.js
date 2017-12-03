import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import YTSearch from 'youtube-api-search';
import SearchBar from './videosreader/components/searchbar';
import VideoList from './videosreader/components/video_list';
import VideoDetail from './videosreader/components/video_detail';
import NewsList from './newsreader/components/news_list'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import Twit from 'twit';

const Comp = React.Component; 
const YT_API_KEY = 'AIzaSyDGjMMrXRFdDuJV0qOzPAcNM2hfaFcFLnQ';
const MAP_API_KEY = 'AIzaSyBT5SGiANMXai26RbVvGpRObh3A-8DHvH0';
const NEWS_API_KEY = '0f2ebe80b52441a4a4e98fd5cbdf5733';
class App extends Comp {
    constructor (props) {
        super(props);
        this.state = {videos: [],
        selectedVideo : null,
        articles: [],
        tabIndex:0,
        pinnedItems:[]};
        YTSearch({key: YT_API_KEY, term : 'Tamil news channel'}, (response) => {
           this.setState({
               videos : response,
                selectedVideo: response[0]
            });
        });

        axios.get('https://newsapi.org/v1/articles?source=google-news&apiKey='+NEWS_API_KEY)
        .then((response) => {
          this.setState({articles:response.data.articles});
        });
     
         var keys = {
             consumer_key : "twCY20azGEqzInjDhyVzJK6bd",
            consumer_secret : "baTksl1sbjqc6iLIsL1GEwp6Txd1AVAohbOUw05oUMpLtvUyGB",
            access_token : "47235324-PyQLfy60fxdbm2cV6syzAbBCSnzkCoh8bUCdt1RjZ",
             access_token_secret : "uEnfiSNHqR1C5y1Ilp8b7NhFWRTPFf2am2hnZYxl8Jfls"
         };
        
         //var TwitterRest = new Twit(keys);
        // TwitterRest.get('search/tweets', {q: 'javascript'}, function (error, response, body) {
       //      console.log(body);
        // });
    }
    render () {
        return (<div>  
        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
        <TabList>
          <Tab>Read</Tab>
          <Tab>Pinned</Tab>
          <Tab>Compose</Tab>
          <Tab>Publish</Tab>
        </TabList>
        <TabPanel>
                <NewsList articles={this.state.articles}/>
                <div>
                    <div className="col-md-10 pull-left">
                            YouTube
                    </div>
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList videos={this.state.videos} 
                            onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>   

                </div>
            </TabPanel>
            <TabPanel>Pinned</TabPanel>
            <TabPanel>Compose</TabPanel>
            <TabPanel>Publish</TabPanel>
      </Tabs>

        </div>);
    }
}

ReactDOM.render(<App />, document.querySelector('div.container'));