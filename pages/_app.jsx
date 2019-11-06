import React from 'react'
import App from 'next/app'
import { Button } from 'antd'

// style
import 'antd/dist/antd.css'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return <>
            <Button>Kurik Kurik</Button>
            <Button>Kurik Kurik</Button>
            <Button>Kurik Kurik</Button>
            <Button>Kurik Kurik</Button>
            <Component {...pageProps} />
        </>
    }
}

export default MyApp