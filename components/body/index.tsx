import React from 'react';
import FeedComponent from '../feed';
import SidebarComponent from '../sidebar';

const BodyComponent = () => {
  return (
    <main className="flex">
      <SidebarComponent />
      <FeedComponent />
    </main>
  );
};

export default BodyComponent;
