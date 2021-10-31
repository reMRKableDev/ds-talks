import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from '../Emoji/Emoji';
import {
  StyledFooter,
  StyledH2,
  StyledFooterPhrase,
  StyledFooterDeveloperTag,
} from './FooterStyles';

const Footer = () => (
    <StyledFooter data-testid="app-footer">
      <StyledH2>
        <span>Thank You</span>
      </StyledH2>
      <StyledFooterPhrase>for checking this out!</StyledFooterPhrase>
      <StyledFooterDeveloperTag>
        Made with <Emoji symbol="❤️" label="love" /> by{' '}
        <Link to={{pathname: "https://remrkabledev.com/"}} target="_blank">reMRKable Dev</Link>
      </StyledFooterDeveloperTag>
    </StyledFooter>
  );

export default Footer;
