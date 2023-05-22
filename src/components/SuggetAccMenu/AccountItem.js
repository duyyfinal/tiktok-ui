import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggetAccMenu.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <Tippy
            interactive
            delay={[800, 0]}
            placement="bottom"
            render={() => (
                <div className={cx('mini-info')}>
                    <div className={cx('top-mini-info')}>
                        <img
                            className={cx('img-mini-info')}
                            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1684918800&x-signature=BbiNYxeNKWcJo1J0Iwvl5sqEbrY%3D"
                            alt="agsul"
                        />
                        <Button primary>Follow</Button>
                    </div>
                    <div className={cx('item-info')}>
                        <p className={cx('nickname-mini-info')}>
                            <strong>khoailangnuong</strong>
                            <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name-mini-info')}>khoai lang nuong</p>
                    </div>
                    <p className={cx('bottom-info')}>
                        <span className={cx('number-follow')}>8.4M</span>
                        <span className={cx('follow-mini-info')}>Followers</span>
                        <span className={cx('number-like')}>8.4M</span>
                        <span className={cx('like-mini-info')}>Likes</span>
                    </p>
                </div>
            )}
        >
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c31c83118ae405994c36ab1b85ed97ff~c5_100x100.jpeg?x-expires=1684918800&x-signature=Wl7nxkNqjPYduFgx%2B8%2Fux7VTZFs%3D"
                    alt=""
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>khoailangnuong</strong>
                        <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>khoai lang nuong</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
