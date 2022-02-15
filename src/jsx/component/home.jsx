import React from 'react';

import Header from './home/header';
import About from './home/about/index';
import CaseStudy from './home/case-study/index';
import OtherWork from './home/other-work/index';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <CaseStudy />
        <OtherWork />
      </main>
    </>
  );
}

export default Home;