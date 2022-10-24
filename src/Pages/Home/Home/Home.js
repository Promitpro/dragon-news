import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
  const allNews = useLoaderData();
    return (
        <div>
          <h2>this is home : {allNews.length}</h2>  
          {
            allNews.map(news => <NewsSummaryCard key={news.id} news={news}></NewsSummaryCard>)
          }
        </div>
    );
};

export default Home;