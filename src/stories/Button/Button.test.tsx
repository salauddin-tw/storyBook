import React from "react"
import { render } from "@testing-library/react"
import { Button } from "./Button"

describe("Button test", () => {
  it("should render button", () => {
    const { container } = render(<Button label="test" />)
    expect(container).toMatchSnapshot()
  })
})
