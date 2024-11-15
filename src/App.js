// App.js
import React from 'react';
import { Button } from 'semantic-ui-react';
import Navbar from './Navbar';  // Import Navbar component
import Wallpaper from './Wallpaper';  // Import Wallpaper component
import ArticleCard from './ArticleCard';  // Import ArticleCard component
import AuthorCard from './AuthorCard';  // Import AuthorCard component
import Newsletter from './Newsletter';  // Import Newsletter component
import Last from './Last';  // Import Last component
import './App.css';  // Import CSS for custom styles

// Dummy article data
const articles = [
  {
    Image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    Name: 'Article One',
    Description: 'React OR Vue',
  },
  {
    Image: 'https://react.semantic-ui.com/images/avatar/large/elliot.jpg',
    Name: 'Article Two',
    Description: 'NodeJS',
  },
  {
    Image: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
    Name: 'Article Three',
    Description: 'React Hooks',
  },
];

// Dummy author data
const authors = [
  {
    Image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    Name: 'Matthew Wade',
    Date: '27 April 1999',
    Description: 'Matther is from the stream of computer engineering and is outstanding in hardware',
  },
  {
    Image: 'https://react.semantic-ui.com/images/avatar/large/elliot.jpg',
    Name: 'Grant Elliot',
    Date: '20 October 1987',
    Description: 'Elliot is from the stream of computer engineering and has designed various websites',
  },
  {
    Image: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
    Name: 'Daniel James',
    Date: '21 August 1980',
    Description: 'Daniel is from the stream of computer engineering and has the ability to solve most of the complex algorithms',
  },
];

// Main App component
function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Wallpaper */}
      <Wallpaper />

      {/* Featured Articles heading */}
      <h2 className="heading">Featured Articles</h2>

      {/* First row of article cards */}
      <div className="row">
        {articles.slice(0, 3).map((article, index) => (
          <ArticleCard
            key={index}
            Image={article.Image}
            Name={article.Name}
            Description={article.Description}
          />
        ))}
      </div>

      {/* View More Articles button */}
      <div className="row">
        <Button content="View More Articles" onClick={() => { /* Handle click event */ }} />
      </div>

      {/* Featured Tutorials heading */}
      <h2 className="heading">Featured Tutorials</h2>

      {/* Second row of author cards */}
      <div className="row">
        {authors.slice(0, 3).map((author, index) => (
          <AuthorCard
            key={index}
            Image={author.Image}
            Name={author.Name}
            Date={author.Date}
            Description={author.Description}
          />
        ))}
      </div>

      {/* View All Authors button */}
      <div className="row">
        <Button content="View All Authors" onClick={() => { /* Handle click event */ }} />
      </div>

      {/* Newsletter signup */}
      <div className="row">
        <Newsletter />
      </div>

      {/* Last image */}
      <Last />
    </div>
  );
}

export default App;
