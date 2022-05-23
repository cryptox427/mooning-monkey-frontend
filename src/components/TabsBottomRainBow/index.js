import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import './index.scss';

const TabsBottomRainBow = (props) => {
    
    const { tabDataList } = props;
    console.log("tabdatalist: ", tabDataList);
    return (
      <div className="tabs-bottom-rainbow">
        
        <Tab.Container id="left-tabs-example" defaultActiveKey={tabDataList&&tabDataList.length>0 ? tabDataList[0].title:""}>
            <Nav variant="pills" className="nav-tabs">
                {
                  tabDataList && tabDataList.map((tabData, index) => {
                    console.log("tabData: ", tabData);
                    return (
                      <Nav.Item>
                          <Nav.Link eventKey={tabData.title} onClick={()=>tabData.clickFunc()}>{tabData.title}</Nav.Link>
                      </Nav.Item>
                    );
                  })
                }
            </Nav>
            <Tab.Content>
                {
                  tabDataList && tabDataList.map((tabData, index) => {
                    console.log("tabData: ", tabData);
                    return (
                      <Tab.Pane eventKey={tabData.title}>
                        {tabData.component}
                      </Tab.Pane>
                    );
                  })
                }
                
            </Tab.Content>
        
        </Tab.Container>
      </div> 
    );
}

export default TabsBottomRainBow;