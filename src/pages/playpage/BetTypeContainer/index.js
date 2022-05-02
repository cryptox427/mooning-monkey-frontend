
import { Tabs, Tab } from 'react-bootstrap';

import ContainerComponent from "../../../components/ContainerComponent";
import ManualBet from './ManualBet.js';
import AutoBet from './AutoBet.js';
import './index.scss';

const BetTypeContainer = (props) => {
    return (
      <ContainerComponent>
        <div className="w-80 m-auto flex flex-col bet-type">
            <div className="title">Bet Type</div>

            <Tabs defaultActiveKey="manual" id="uncontrolled-tab-example" className="manual-auto-toggle">
              <Tab eventKey="manual" title="Manual" className="select-button">
                <ManualBet/>
              </Tab>
              <Tab eventKey="auto" title="Auto" className="select-button">
                <AutoBet/>
              </Tab>
            </Tabs>
        </div>
      </ContainerComponent>
    );
}

export default BetTypeContainer;