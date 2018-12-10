import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      navActivated: false,
    }

    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    this.setState(previousState => ({
      navActivated: !previousState.navActivated,
    }))
  }

  render() {
    return (
      <header className="flex items-center flex-no-shrink justify-between bg-purple-darker p-6 shadow">
        <div className="flex items-center flex-no-shrink mr-6">
          <Link to="/" className="text-white no-underline flex items-center">
            <svg
              className="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-semibold text-xl tracking-tight">
              {this.props.siteTitle}
            </span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-orange-lightest border-orange-lighst hover:text-white hover:border-white"
            onClick={this.toggleNav}
          >
            <svg
              className="fill-current text-orange-lightest h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            this.state.navActivated ? 'block' : 'hidden'
          } w-full lg:block w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="lg:flex-grow">
            <Link to="/blog" className="text-white no-underline">
              Blog
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
