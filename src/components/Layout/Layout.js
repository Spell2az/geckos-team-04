import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Section from './Section/Section';
import { CopyRight } from './Footer/CopyRight';

class Layout extends Component {
  render() {
    const { children, search, footerIsVisible } = this.props;
    return (
      <div>
        <Header search={search} />
        {children}
        <Section padding={false}>
          <Footer isVisible={footerIsVisible} />
          <CopyRight />
        </Section>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  search: PropTypes.bool,
  footerIsVisible: PropTypes.bool,
};

Layout.defaultProps = {
  search: false,
  footerIsVisible: true,
};

export default Layout;
