import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggetAccMenu.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function AccountItem({ account }) {
    return (
        <Tippy
            interactive
            delay={[800, 0]}
            placement="bottom"
            render={() => (
                <div className={cx('mini-info')}>
                    <div className={cx('top-mini-info')}>
                        <img className={cx('img-mini-info')} src={account.image} alt={account.username} />
                        <Button primary>Follow</Button>
                    </div>
                    <div className={cx('item-info')}>
                        <p className={cx('nickname-mini-info')}>
                            <strong>{account.username}</strong>
                            {account.gender === 'female' && (
                                <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />
                            )}
                        </p>
                        <p className={cx('name-mini-info')}>
                            {account.firstName} {account.lastName}
                        </p>
                    </div>
                    <p className={cx('bottom-info')}>
                        <span className={cx('number-follow')}>{account.height}M</span>
                        <span className={cx('follow-mini-info')}>Followers</span>
                        <span className={cx('number-like')}>{account.weight}M</span>
                        <span className={cx('like-mini-info')}>Likes</span>
                    </p>
                </div>
            )}
        >
            <div className={cx('account-item')}>
                <img className={cx('avatar')} src={account.image} alt={account.username} />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>{account.username}</strong>

                        {account.gender === 'female' && (
                            <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />
                        )}
                    </p>
                    <p className={cx('name')}>
                        {account.firstName} {account.lastName}
                    </p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {
    account: PropTypes.object.isRequired,
};

export default AccountItem;
