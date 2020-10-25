import React from 'react';

import './style.scss';
import Image from '../../page-atoms/image';
import Text from '../../page-atoms/text';

const Card = ({
  imageFileName,
  imageAltText,
  url,
  title,
  bodyText,
  imageOnLeft = true,
}) => (
  <div className="card">
    <div className={`card__image card__image--${imageOnLeft ? 'left' : 'right'}`}>
      <a href={url}>
        <Image alt={imageAltText} fileName={imageFileName} />
      </a>
    </div>
    <div className="card__body">
      <div className="card__title">
        <Text type="title">
          {title}
        </Text>
      </div>
      <div className="card__text">
        <Text type="paragraph">
          {bodyText}
        </Text>
      </div>
    </div>
  </div>
);

export default Card;
