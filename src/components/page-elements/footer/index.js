import React from 'react';

import ResponsivePageContainer from '../../containers/responsive-page-container';
import Text from '../../page-atoms/text';
import IconLink from '../../page-atoms/icon-link';
import './style.scss';
import { GITHUB_URL, LINKEDIN_URL, MAIL_URL } from '../../../data_layer/configs/icons_url_configs';

const Footer = () => (
  <ResponsivePageContainer id="footer" backgroundColor="dark">
    <ul className="icons-list">
      <li className="icons-list__icon">
        <IconLink fileName="github-icon" targetBlank alt="github link" href={GITHUB_URL} />
      </li>
      <li className="icons-list__icon">
        <IconLink fileName="linkedin-icon" targetBlank alt="linkedin link" href={LINKEDIN_URL} />
      </li>
      <li className="icons-list__icon">
        <IconLink fileName="mail-icon" targetBlank alt="e-mail link" href={MAIL_URL} />
      </li>
    </ul>
    <div className="footer-text">
      <Text type="paragraph" color="white">
        GRZEGORZ DOKOWICZ x 2021
      </Text>
    </div>

  </ResponsivePageContainer>
);

export default Footer;
