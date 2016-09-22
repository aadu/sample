import React from 'react'
import { IndexLink, Link } from 'react-router'
import './SideBar.scss'
import GrommetSidebar from 'grommet/components/Sidebar'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'

export const SideBar = () => (
  <GrommetSidebar size="small" colorIndex="neutral-1" separator="right" fixed>
    <Header pad={{ 'horizontal': 'medium' }}>
      Sample Size Calculator
    </Header>
    <Menu primary>
      <IndexLink to="/" activeClassName="route--active">
        Home
      </IndexLink>
      <Link to="/calc" activeClassName="route--active">
        Two Proportions
      </Link>
      <Link to="/counter" activeClassName="route--active">
        Counter
      </Link>
    </Menu>
  </GrommetSidebar>
)

export default SideBar
