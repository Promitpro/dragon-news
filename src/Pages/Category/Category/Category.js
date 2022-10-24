import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews);
    return (
        <div>
                <h3>this is category {categoryNews.length}</h3>
                {
                    categoryNews.map(news => <NewsSummaryCard key={news.id} news={news}></NewsSummaryCard>)
                }
        </div>
    );
};

export default Category;    