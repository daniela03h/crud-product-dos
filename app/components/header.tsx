'use client'

import { PropsWithChildren } from "react"
import styled from "styled-components"

const Header = styled.header`
    height: 62px;
    background-color: lightgray;
    display: flex;
    align-items: center;
    padding: 0 16px;
    justify-content: space-between;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
`
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