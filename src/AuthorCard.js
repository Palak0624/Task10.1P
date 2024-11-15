// AuthorCard.js
import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './AuthorCard.css';

const AuthorCard = (props) => (
  <div className="column">
    <Card>
      <Image src={props.Image} height={250} width={250} />
      <Card.Content>
        <Card.Header>{props.Name}</Card.Header>
        <Card.Description>{props.Description}</Card.Description>
        <Card.Meta>
          <span className="date">{props.Date}</span>
          <span className="star">⭐⭐⭐</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  </div>
);

export default AuthorCard;
