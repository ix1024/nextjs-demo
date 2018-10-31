import Link from 'next/link'
import React, { Component } from 'react'
import { connect } from "react-redux"
const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/user">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default connect()(Header)