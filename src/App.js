import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const AppBox = styled.div`
    background-color: #000;
    min-height: 100vh;
`
const OutletBox = styled.div`
    min-height: calc(100vh - 110px);
`
const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
})
function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBox>
                <Header></Header>
                <OutletBox>
                    <Outlet />
                </OutletBox>
                <Footer></Footer>
            </AppBox>
        </ThemeProvider>
    )
}

export default App
