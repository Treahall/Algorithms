import React from 'react'
import { Box, CssBaseline, Button, AppBar } from '@mui/material'
import Logo from '../images/icons/svgs/LOGO.svg'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/loggedIn'
import ResponsiveDrawer from '../components/responsiveDrawer.component'
import Routes from '../components/routes.component'
import QuickSortContext from '../components/contexts/quick_sort.context'
import BubbleSortContext from '../components/contexts/bubble_sort.context'

export default function LoggedIn() {
    return (
        <Layout>
            <ResponsiveDrawer>
                <QuickSortContext/>
            </ResponsiveDrawer>
        </Layout>
    )
}