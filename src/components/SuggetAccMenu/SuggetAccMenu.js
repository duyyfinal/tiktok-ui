import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SuggetAccMenu.module.scss';
import AccountItem from './AccountItem';
import * as suggestAccountService from '~/services/suggestAccountService';

const cx = classNames.bind(styles);

function SuggetAccMenu({ lable }) {
    const [accountsResult, setAccountsResult] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await suggestAccountService.suggestAcc();
            setAccountsResult(result);
        };

        fetchApi();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{lable}</p>
            {accountsResult.map((acc) => (
                <AccountItem key={acc.id} account={acc} />
            ))}

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggetAccMenu.propTypes = {
    lable: PropTypes.string.isRequired,
};

export default SuggetAccMenu;
