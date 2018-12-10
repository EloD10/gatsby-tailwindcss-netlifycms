import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  & > ${'p'} {
    display: flex;
    justify-content: start;
    color: #462a16;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  & > ${'h2'} {
    color: #f6993f;
  }
  & > ${'p'} > ${'img'} {
    max-width: 20rem;
  }
  & > ${'p'} > ${'em'} {
    color: #f6993f;
    font-weight: 700;
  }
`

export const HTMLContent = ({ content, className }) => (
  <Wrapper
    className={className}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
