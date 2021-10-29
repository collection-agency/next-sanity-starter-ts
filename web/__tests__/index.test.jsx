/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Landing from '../pages/index'

describe('Landing', () => {
  it('renders a layout', () => {
    render(<Landing />)

    const layout = screen.getByTestId('layout')

    expect(layout).toBeInTheDocument()
  })
})