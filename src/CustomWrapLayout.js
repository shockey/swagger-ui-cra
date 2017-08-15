import React from "react"
import PropTypes from "prop-types"

export default class CustomWrapLayout extends React.Component {
  render() {
    let { getComponent, specSelectors } = this.props

    const BaseLayout = getComponent("BaseLayout")

    const isSpecEmpty = !specSelectors.specStr()

    if(isSpecEmpty) {
      return <h4>No spec provided.</h4>
    }

    return (
      <div className='swagger-ui'>
        <div>
          This div will appear above the rest of Swagger-UI
        </div>
        <BaseLayout />
      </div>
    )
  }
}
