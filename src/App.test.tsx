import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { describe, expect, test } from 'vitest'

describe('App', () => {
  test('renders main heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /get started/i })
    ).toBeInTheDocument()
  })

  test('renders instruction text', () => {
    render(<App />)

    expect(screen.getByText(/edit/i)).toBeInTheDocument()
    expect(screen.getByText('src/App.tsx')).toBeInTheDocument()
    expect(screen.getByText('HMR')).toBeInTheDocument()
  })

  test('renders counter with initial value 0', () => {
    render(<App />)

    expect(
      screen.getByRole('button', { name: /count is 0/i })
    ).toBeInTheDocument()
  })

  test('increments counter after click', async () => {
    const user = userEvent.setup()

    render(<App />)

    const button = screen.getByRole('button', { name: /count is 0/i })

    await user.click(button)

    expect(
      screen.getByRole('button', { name: /count is 1/i })
    ).toBeInTheDocument()
  })

  test('renders documentation section', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /documentation/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/your questions, answered/i)).toBeInTheDocument()
  })

  test('renders social section', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /connect with us/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/join the vite community/i)).toBeInTheDocument()
  })

  test('renders external links', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /explore vite/i })).toHaveAttribute(
      'href',
      'https://vite.dev/'
    )

    expect(screen.getByRole('link', { name: /learn more/i })).toHaveAttribute(
      'href',
      'https://react.dev/'
    )

    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      'https://github.com/vitejs/vite'
    )

    expect(screen.getByRole('link', { name: /discord/i })).toHaveAttribute(
      'href',
      'https://chat.vite.dev/'
    )
  })
})