import { Fragment, ReactNode } from "react";

interface Props {
    children: ReactNode
}

export default function Layout({ children } : Props) {
    return (
        <Fragment>{children}</Fragment>
    );
}
