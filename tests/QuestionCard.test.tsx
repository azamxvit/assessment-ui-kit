import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import QuestionCard from './QuestionCard'

const mockQuestion = {
  id: '1',
  content: '<p>What is 2 + 2?</p>',
  options: [
    { id: 'a', text: '3' },
    { id: 'b', text: '4' },
    { id: 'c', text: '5' },
  ],
  correctAnswerId: 'b',
  explanation: 'Math is easy.'
}

describe('QuestionCard Component', () => {
  it('renders question and options', () => {
    render(<QuestionCard question={mockQuestion} onNext={() => {}} />)
    
    expect(screen.getByText('What is 2 + 2?')).toBeInTheDocument()
    
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
  })

  it('selects an option when clicked', () => {
    render(<QuestionCard question={mockQuestion} onNext={() => {}} />)
    
    const option = screen.getByText('4')
    fireEvent.click(option)
    
    const checkBtn = screen.getByRole('button', { name: /check answer/i })
    expect(checkBtn).not.toBeDisabled()
  })

  it('shows success state on correct answer', async () => {
    render(<QuestionCard question={mockQuestion} onNext={() => {}} />)
    
    fireEvent.click(screen.getByText('4'))
    
    fireEvent.click(screen.getByRole('button', { name: /check answer/i }))
    
    await waitFor(() => {
      expect(screen.getByText('Explanation')).toBeInTheDocument()
    })
    
    expect(screen.getByRole('button', { name: /next question/i })).toBeInTheDocument()
  })
})