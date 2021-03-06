import React from 'react';
import Container from '../Layout/Container';

const styles = {
  container: {
    marginBottom: 5,
  },
};

export default (Field = ({ style, children }) => (
  <Container style={[styles.container, style]}>{children}</Container>
));
