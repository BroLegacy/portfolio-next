import { FC } from 'react';
import Header from "@/components/header";

interface Props {
    children: JSX.Element;
}

const LayoutComponent: FC<Props> = ({children}) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default LayoutComponent;