import React from 'react';
import Emoji from '../Emoji/Emoji';
import {
  StyledFooter,
  StyledH2,
  StyledFooterPhrase,
  StyledFooterDeveloperTag,
} from './FooterStyles';

const Footer = () => {
  return (
    <StyledFooter data-testid="app-footer">
      <StyledH2>
        <span>Thank You</span>
      </StyledH2>
      <StyledFooterPhrase>for checking this out!</StyledFooterPhrase>
      <StyledFooterDeveloperTag>
        Made with <Emoji symbol="❤️" label="love" /> by{' '}
        <a href="https://remrkabledev.com/">reMRKable Dev</a>
      </StyledFooterDeveloperTag>
    </StyledFooter>
  );
};

export default Footer;
