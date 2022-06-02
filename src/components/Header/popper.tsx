import classNames from 'classnames/bind';
import './header.scss';


function Wrapper({ children, className }: any) {
    return <div className='wrapper'>{children}</div>;
}

export default Wrapper;