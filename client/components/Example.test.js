/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect } from '@jest/globals'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import renderer from 'react-test-renderer'

import Example from './Example'
require('regenerator-runtime/runtime')

// Structural test using snapshots
test('Example - client -  snapshot testing using testing-library', () => {
  const { asFragment } = render(<Example title='changed title' />)

  expect(asFragment()).toMatchSnapshot()
})

test('Example - client - snapshot testing using react-test-renderer', () => {
  const app = renderer.create(<Example />)

  expect(app.toJSON()).toMatchSnapshot()
})

test('Example - client - UI testing', () => {
  render(<Example title='UI testing' />)
  const paragraph = screen.getByText('The text you entered', { exact: false })
  expect(paragraph.textContent).toMatch('')

  const textbox = screen.getByRole('textbox')
  userEvent.type(textbox, 'abcdef')

  const button = screen.getByRole('button')
  userEvent.click(button)

  expect(paragraph.textContent).toMatch('ABCDEF')
  expect(paragraph.textContent).not.toMatch('abcdefq')
})
