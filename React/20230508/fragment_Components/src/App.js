// title: Fragment
import React, { Fragment } from 'react';

function ListItem({ item }) {
  return (
    <Fragment>
      <dt>사과</dt>
      <dd>사과는 맛있어</dd>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
    </dl>
  );
}

function App() {
  return (
    <Glossary />
  );
}
export default App;
