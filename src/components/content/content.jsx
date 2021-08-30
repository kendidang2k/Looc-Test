import React from 'react';
import Catalog from './catalog/catalog';
import Tutorial from './tutorial-guide/tutorial';
import './content.css'
import Banner from './banner/banner';
import Introduction from './introduction/introduction';
import Makevideo from './make-video/makeVideo';
import Achievement from './achievement/achievement';
import Team from './team/team';
import Services from './services/services';



const Content = () => {
    return (
        <div className="content">
            <div className="cover-content">
                <Catalog></Catalog>
                <Tutorial></Tutorial>
                <Banner></Banner>
                <Introduction></Introduction>
                <Makevideo></Makevideo>
                <Achievement></Achievement>
                <Team></Team>
                <Services></Services>
            </div>
        </div>
    );
};

export default Content;