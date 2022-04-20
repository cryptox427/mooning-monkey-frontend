import { NavLink } from "react-router-dom";
import { CDBSidebarMenuItem } from "cdbreact";
import './Cell.scss';

const Cell = (props) => {
    const { children, linkStr, setPage, selectedPage } = props;
    return (
        <NavLink exact to={"/"+linkStr} activeClassName="activeClicked">
            <CDBSidebarMenuItem className={`monkey-sidebar-item ${selectedPage == linkStr ? "selected" : "normal"}`} onClick={() => setPage(linkStr)}>
                {children}
            </CDBSidebarMenuItem>
        </NavLink>
    );
}

export default Cell;