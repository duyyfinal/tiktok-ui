import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/${data.username}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.image} alt={data.maidenName} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>
                        {data.firstName} {data.lastName}
                    </span>
                    {data.gender === 'female' && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.username}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
