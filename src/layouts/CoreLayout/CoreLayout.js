import React from 'react'
// import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'
import App from 'grommet/components/App'
import Split from 'grommet/components/Split'
// import Sidebar from 'grommet/components/Sidebar'
// import Header from 'grommet/components/Header'
// import Title from 'grommet/components/Title'
// import Menu from 'grommet/components/Menu'
// import Anchor from 'grommet/components/Anchor'
import Article from 'grommet/components/Article'
import SideBar from '../../components/SideBar'

export const CoreLayout = ({ children }) => (
  <App centered={false}>
    <Split flex="right">
      <SideBar />
      <Article>
        { children }
      </Article>
    </Split>
  </App>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
