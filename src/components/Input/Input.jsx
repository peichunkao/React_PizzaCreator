import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  color: #6e7790;
  font-size: 22px;
  margin: 0;
  margin-bottom: 10px;
  font-weight: 300;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  margin-top: 10px;
  height: 30px;
  width: 200px;
`

const Input = ({ lebel, content }) => (
  <>
    <Container>
      <Title>{lebel}</Title>
      <StyledInput placeholder={content}></StyledInput>
    </Container>
  </>
)

{
  /* Input.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
} */
}

export default Input
