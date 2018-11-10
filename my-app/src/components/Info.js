import React from 'react';
import { Box, Container } from 'bloomer';

const Info = (props) => (
  <Container>
  {
    props.copyright && <Box>Copyright: { props.copyright}</Box>
  }
  {
    props.date && <Box>Date: { props.date}</Box>
  }
  </Container>
)

export default Info;
