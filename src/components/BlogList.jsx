import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dev.to/api/articles');
        const data = response.data;
        // Shuffle the articles array
        const shuffledArticles = data.sort(() => Math.random() - 0.5);
        // Take the first 10 articles
        const slicedArticles = shuffledArticles.slice(0, 10);
        setArticles(slicedArticles);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div name="bloglist" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='container mx-auto p-4'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
           Blogs
          </p>
          <p className='py-6 text-2xl'>Blogs For Inspiration</p>
        </div>
        <div className="mb-8"></div> {/* Add space */}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <img src={article.social_image} alt={article.title} className="w-full" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-blue-700">{article.title}</div> {/* Change text color to dark blue */}
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
        <div className="mb-8"></div> {/* Add space */}
      </div>
    </div>
  );
};

export default BlogList;
