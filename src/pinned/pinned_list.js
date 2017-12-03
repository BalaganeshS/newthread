import React from 'react';
import  PinnedListItem from './pinned_list_item';

const PinnedList = (props) => {
    var id =0;
    const pinnedItems = props.articles.map((news) => {
        id++;
        return <PinnedListItem 
                    key={id} 
                    news={news} />
    });
    return (
        <div>
            <div className="col-md-10">
                <div className="col-md-8 pull-left">
                    Conspirancy
                </div>
                <div className="col-md-3 pull-right">
                    
                </div>
            </div>
            <ul className="col-md-10 list-group">
                {pinnedItems}
            </ul>
        </div>
    );
};

export default NewsList;