import { FC, ReactNode } from 'react';

interface AccountLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    childrenClassName?: string;
}

const AccountLayout: FC<AccountLayoutProps> = ({ children, ...otherProps }) => {
    return (
        <div className='bg-white'>
            <div className='text-sm text-black' {...otherProps}>
                {children}
            </div>
        </div>
    );
};

export default AccountLayout;