import clsx from 'clsx'
import s from "./FriendListItem.module.css"

const FriendListItem = (props) => {
    return <div className={s.friend}>
        <img src={props.avatar} alt="Avatar" width="48" />
        <p>{props.name}</p>
        {props.isOnline ? <p className={clsx(s.status, s.green)}>Online</p> : <p className={clsx(s.status, s.red)}>Offline</p>}
    </div>
}
export default FriendListItem;