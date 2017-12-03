import React from 'react';
import  NewsListItem from './news_list_item';

const NewsList = (props) => {
    var id =0;
    const newsItems = props.articles.map((news) => {
        id++;
        return <NewsListItem 
                    key={id} 
                    news={news} />
    });
    return (
        <div>
            <div className="col-md-10">
                <div className="col-md-8 pull-left">
                    Google News
                </div>
                <div className="col-md-3 pull-right">
                    Powered By <a href="https://newsapi.org/">News API</a>
                </div>
            </div>
            <ul className="col-md-10 list-group">
                {newsItems}
            </ul>
        </div>
    );
};

export default NewsList;