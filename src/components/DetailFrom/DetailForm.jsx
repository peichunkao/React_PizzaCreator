import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Section from '../Section/Section'
import Input from '../Input'

const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const DetailForm = () => (
  <>
    <Section title='Enter your details'>
      <Form>
        <Input lebel='NAME' content='John Smith'></Input>
        <Input lebel='EMAIL' content='Enter your email'></Input>
        <Input lebel='CONFIRM' content='Confirm your email'></Input>
        <Input lebel='ADDRESS' content='44 Pizza Street'></Input>
        <Input lebel='POSTCODE' content='PI3 3IS'></Input>
        <Input lebel='CONTACT NUMBER' content='01234 567 890'></Input>
      </Form>
    </Section>
  </>
)

// DetailForm.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired
// }

export default DetailForm
