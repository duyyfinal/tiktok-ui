import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SuggetAccMenu.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggetAccMenu({ lable }) {
    // const [loading, setLoading] = useState(false);
    // useEffect(() => {}, []);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{lable}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggetAccMenu.propTypes = {
    lable: PropTypes.string.isRequired,
};

export default SuggetAccMenu;
