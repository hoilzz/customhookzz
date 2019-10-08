import { loremIpsum } from 'lorem-ipsum';
import React, { useState } from 'react';

const things = [
  {
    id: 'a',
    headline: 'React',
    text: loremIpsum({ count: 50, units: 'sentences' }),
  },
  {
    id: 'b',
    headline: 'Redux',
    text: loremIpsum({ count: 50, units: 'sentences' }),
  },
  {
    id: 'c',
    headline: 'GraphQL',
    text: loremIpsum({ count: 50, units: 'sentences' }),
  },
];

const IOEx = () => {
  const [articles, setArticle] = useState(things);

  return (
    <div>
      {articles.map(article => (
        <div key={article.id}>
          <h1>{article.headline}</h1>
          <p>{article.text}</p>
        </div>
      ))}
    </div>
  );
};

export default IOEx;
