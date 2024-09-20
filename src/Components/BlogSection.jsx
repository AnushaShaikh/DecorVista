import React from 'react';
import './BlogSection.css';

function BlogSection() {
  const articles = [
    {
      date: 'December 9, 2019',
      category: 'Architecture',
      title: 'Most Significant Architectural Projects of the Year 2019',
      description: 'Morbi volutpat nisi a ligula vestibulum placerat. Suspendisse venenatis pulvinar nibh sed convallis.',
      image: 'http://ollis.like-themes.com/wp-content/uploads/2018/02/blog_01-1536x1024.jpg',
      views: 2,
      comments: 1,
    },
    {
      date: 'December 8, 2019',
      category: 'Architecture',
      title: 'Seven Brilliant Ways To Advertise Interior and Industrial Design',
      description: 'Morbi volutpat nisi a ligula vestibulum placerat. Suspendisse venenatis pulvinar nibh sed convallis.',
      image: 'http://ollis.like-themes.com/wp-content/uploads/2018/02/blog_02-1536x1024.jpg',
      views: 1,
      comments: 0,
    },
    {
      date: 'November 2, 2019',
      category: 'Architecture',
      title: 'The Biggest Contribution Of Home and Office Furniture To Humanity',
      description: 'Morbi volutpat nisi a ligula vestibulum placerat. Suspendisse venenatis pulvinar nibh sed convallis.',
      image: 'http://ollis.like-themes.com/wp-content/uploads/2018/02/blog_03-1536x1015.jpg',
      views: 1,
      comments: 0,
    },
    {
      date: 'November 1, 2019',
      category: 'Home Interior',
      title: 'Five Things You Should Know About Modern Furniture',
      description: 'Morbi volutpat nisi a ligula vestibulum placerat. Suspendisse venenatis pulvinar nibh sed convallis.',
      image: 'http://ollis.like-themes.com/wp-content/uploads/2018/02/blog_04-1536x1024.jpg',
      views: 1,
      comments: 2,
    },
  ];

  return (
    <div className="blog-section">
      <h2>Recent Articles</h2>
      <div className="articles">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <img src={article.image} alt={article.title} />
            <div className="article-details">
              <p>{article.date} | <span>{article.category}</span></p>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div className="article-info">
                <span>👁 {article.views}</span>
                <span>💬 {article.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BlogSection />
    </div>
  );
}

export default App;
