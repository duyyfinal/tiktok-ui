import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';

import Menu, { MenuItem } from './Menu';
import { HomeIcon, FollowingIcon, LIVEIcon } from '~/components/Icons';
import SuggetAccMenu from '~/components/SuggetAccMenu/SuggetAccMenu';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<FollowingIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LIVEIcon />} />
            </Menu>
            <SuggetAccMenu lable="Suggested accounts" />
            <SuggetAccMenu lable="Following accounts" />
        </aside>
    );
}

export default Sidebar;
