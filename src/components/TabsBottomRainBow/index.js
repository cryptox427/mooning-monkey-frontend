import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import React from 'react';
import './index.scss';

const TabsBottomRainBow = (props) => {
    
    const { tabDataList } = props;
    console.log("tabdatalist: ", tabDataList);
    return (
      <div className="tabs-bottom-rainbow">
        <Tabs defaultActiveKey={tabDataList ? tabDataList[0].title : ""}
            transition={false}
            className="mb-3"
          >
            {
              tabDataList && tabDataList.map((tabData, index) => {
                console.log("tabData: ", tabData);
                return (
                  <Tab key={index} eventKey={tabData.title} title={tabData.title}>
                    {
                      tabData.component
                    }
                  </Tab>
                );
              })
            }
        </Tabs>
      </div> 
    );
}

export default TabsBottomRainBow;