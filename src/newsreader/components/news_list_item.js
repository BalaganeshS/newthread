import React  from 'react';

const NewsListItem = ({news}) => {
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="col-sm-2">
                    <img className="img-responsive" src={news.urlToImage} />
                </div>
                <div className="col-md-10">
                    <div className="media-heading">
                        <a href={news.url}>{news.title}</a>
                        <div className="pull-right icon-tasks">
                           <img src="../images/Pushpin-PNG-Photos.png" width="30px" height="30px"/>
                        </div>
                    </div>
                    <div>
                        {news.description}
                    </div>
                    <div className="pull-right">
                        {news.publishedAt}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default NewsListItem;