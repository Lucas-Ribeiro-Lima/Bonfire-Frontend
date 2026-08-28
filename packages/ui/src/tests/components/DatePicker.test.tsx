import { render, screen, fireEvent } from '@testing-library/react'
import { DatePicker } from '@bonfire/ui'
import { describe, it, expect, vi } from 'vitest'

describe('DatePicker Component (Unit & Integration Tests)', () => {
  it('deve renderizar o placeholder quando nenhum valor for passado', () => {
    render(<DatePicker placeholder="Selecione uma data" />)
    expect(screen.getByText('Selecione uma data')).toBeInTheDocument()
  })

  it('deve formatar data ISO no padrão brasileiro (DD/MM/YYYY)', () => {
    render(<DatePicker value="2026-08-28T10:00:00" />)
    expect(screen.getByText('28/08/2026')).toBeInTheDocument()
  })

  it('deve abrir o popover e exibir o calendário ao clicar no gatilho', () => {
    render(<DatePicker value="2026-08-28T10:00:00" />)
    const trigger = screen.getByText('28/08/2026')
    fireEvent.click(trigger)

    // O cabeçalho com mês deve estar visível no calendário
    expect(screen.getByText(/agosto/i)).toBeInTheDocument()
    // Botão Hoje deve estar presente
    expect(screen.getByRole('button', { name: /hoje/i })).toBeInTheDocument()
  })

  it('deve disparar onChange com data ISO ao selecionar um dia', () => {
    const handleChange = vi.fn()
    render(
      <DatePicker
        value="2026-08-28T10:00:00"
        onChange={handleChange}
      />
    )

    const trigger = screen.getByText('28/08/2026')
    fireEvent.click(trigger)

    // Seleciona o dia 15 no calendário
    const day15 = screen.getByText('15')
    fireEvent.click(day15)

    expect(handleChange).toHaveBeenCalledWith(expect.stringContaining('2026-08-15'))
  })

  it('deve selecionar a data de hoje ao clicar no botão Hoje', () => {
    const handleChange = vi.fn()
    render(
      <DatePicker
        placeholder="Selecione uma data"
        onChange={handleChange}
      />
    )

    const trigger = screen.getByText('Selecione uma data')
    fireEvent.click(trigger)

    const todayButton = screen.getByRole('button', { name: /hoje/i })
    fireEvent.click(todayButton)

    const currentYear = new Date().getFullYear().toString()
    expect(handleChange).toHaveBeenCalledWith(expect.stringContaining(currentYear))
  })

  it('deve limpar o valor selecionado ao clicar no botão de limpar', () => {
    const handleChange = vi.fn()
    render(
      <DatePicker
        value="2026-08-28T10:00:00"
        onChange={handleChange}
      />
    )

    const clearButton = screen.getByTitle('Limpar data')
    fireEvent.click(clearButton)

    expect(handleChange).toHaveBeenCalledWith(null)
  })
})
