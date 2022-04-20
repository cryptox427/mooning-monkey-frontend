import './index.scss';

const TalkCell = (props) => {
    const { t_time, t_name, t_content } = props;
    return (
        <div className="talk-cell">            
            <div className="time">{t_time}</div>
            <div className="person-name">{t_name + ":"}</div>
            <div className="talk-content">{t_content}</div>
        </div>
    );
}

export default TalkCell;