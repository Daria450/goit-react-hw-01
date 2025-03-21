import s from './Profile.module.css'


const Profile = (props) => {
    return <>
        <div className={s.profile}>
            <div className={s.profile_user}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                    alt="User avatar" width="148"
                />
                <p>{props.name}</p>
                <p>@{props.tag}</p>
                <p>{props.location}</p>
            </div>
            <ul className={s.profile_list}>
                <li>
                    <span>Followers</span>
                    <span className={s.stats_value}>{props.stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span className={s.stats_value}>{props.stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span className={s.stats_value}>{props.stats.likes}</span>
                </li>
            </ul>
        </div>
    </>;
}
export default Profile;