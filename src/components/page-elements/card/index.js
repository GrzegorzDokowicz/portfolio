import React from 'react';

import './style.scss';
import Image from '../../page-atoms/image';
import Text from '../../page-atoms/text';

const Card = ({
  imageFileName, imageAltText, url, title, bodyText,
}) => (
  <div className="card">
    <div className="card__image">
      <a href={url}>
        <Image alt={imageAltText} fileName={imageFileName} />
      </a>
    </div>
    <div className="card__title">
      <Text type="title">
        {title}
      </Text>
    </div>
    <div className="card__body">
      <Text type="paragraph">
        {bodyText}
      </Text>
    </div>
  </div>
);

export default Card;
