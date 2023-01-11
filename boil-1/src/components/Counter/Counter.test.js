import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Button from "../Button/Button"
import Counter from './Counter'



it("", () => {

})

it("should increament count value when clicked on inceament button", () => {
    render(<Counter />)
    const incButton = screen.getByTestId("plus-button")
    fireEvent.click(incButton)
    fireEvent.click(incButton)
    fireEvent.click(incButton)
    expect(screen.getByTestId("count-value")).toHaveTextContent("3")
    const decButton = screen.getByTestId("minus-button")
    fireEvent.click(decButton)
    fireEvent.click(decButton)
    fireEvent.click(decButton)
    expect(screen.getByTestId("count-value")).toHaveTextContent("0")
})


afterEach(() => {
    cleanup()
})