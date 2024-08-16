'use client'

import { PropsWithChildren } from "react"
import { Header, Title } from "./header-style";

const HeaderComponent = ({ children  }: PropsWithChildren) => {
    return (
        <Header>
            <Title>Products</Title>
            <nav>
                {children}
            </nav>
        </Header>
    )
}

export default HeaderComponent