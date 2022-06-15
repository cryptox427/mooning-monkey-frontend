import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import {connect} from 'react-redux'
import { AiOutlineCaretRight } from 'react-icons/ai';
import {showHelpDetailModal} from '../../actions/gameActions';

import './index.scss';

const searchData = [
    {
        title: "I forgot my password.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    },
    {
        title: "My deposit has not been credited.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    },
    {
        title: "My withdrawal has not arrived.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    },
    {
        title: "How do I deposit?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    },
    {
        title: "How does the game work?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    },
    {
        title: "How do I withdraw?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    }
    
];
const HelpModal = (props) => {
    const { show, onHide, showHelpDetailModal } = props;
    const [searchKey, setSearchKey] = useState('')
    const [displayList, setDisplayList] = useState([])
    useEffect(async () => {
        const filteredData = searchData.filter((el) => {
            //if no input the return the original
            if (searchKey === '') {
                return el;
            }
            //return the item which contains the user input
            else {
                return el.title.toLowerCase().includes(searchKey.toLowerCase())
            }
        })
        setDisplayList(filteredData)
    }, [searchKey]);

    

    return (
        <Modal show={show} onHide={onHide}  className="monkey-modal help-modal">
    
            <Modal.Header closeButton closeVariant='white'>
                <Modal.Title><span>Help</span></Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <input
                    className = "search"
                    onChange={(e)=>setSearchKey(e.target.value)}
                    value = {searchKey}
                    placeholder = "How can we help?"
                />
                <div className="search-result">
                    {
                        displayList.map(data => {
                            return (
                                <button className="search-result-item" onClick={()=>showHelpDetailModal(data)}>
                                    {data.title}
                                    <AiOutlineCaretRight className="go-icon"/>
                                </button>
                            )
                        })
                    }
                </div>
            </Modal.Body>
        </Modal>
    );
}

const mapStateToProps  = (state) => (
    {  }
)
export default connect(mapStateToProps, {showHelpDetailModal})(HelpModal)