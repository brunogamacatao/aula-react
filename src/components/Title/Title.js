'use strict'

import React, { PropTypes } from 'react'

import style from './title.styl'

const Title = ({ children }) => (
  <h1 className={style.title}>{children}</h1>
)

Title.propTypes = {
  children: PropTypes.node.isRequired
}

export default Title
