// components/ArticleCard.js
import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ArticleCard = (props) => (
  <div className="column">
    <Card>
      <Image src={props.Image} height={250} width={250} />
      <Card.Content>
        <Card.Header>{props.Name}</Card.Header>
        <Card.Description>{props.Description}</Card.Description>
        <Card.Meta>
          <span className="star">⭐⭐</span>
          <span className="author">{props.Author}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  </div>
);

export default ArticleCard;
