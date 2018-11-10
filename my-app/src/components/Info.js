import React, { Component } from 'react';

const Info = (props) => (
  <Container>
  {
    props.copyright && <Box>Copyright: { props.copyright}</Box>
  }
  {
    props.date && <Box>Date: { props.date}</Box>
  }
)

// class Info extends Component {
//   render() {
//     return (
//       <div className="Info">
//       <h1>info</h1>
//       </div>
//     );
//   }
}

export default Info;
