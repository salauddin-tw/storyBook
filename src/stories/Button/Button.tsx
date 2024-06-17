/* eslint-disable */
import React from "react"
import styled, { css } from "styled-components"

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large"
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

const StyledButton = styled.button<{
  $primary?: boolean
  buttonSize: "small" | "medium" | "large"
}>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 800;
  border-radius: 12px;

  cursor: pointer;
  background-color: ${(props) => (props.$primary ? "#ED1C24" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#ED1C24")};
  border-color: ${(props) => (props.$primary ? "#ED1C24" : "grey")};
  border: ${(props) => (props.$primary ? 0 : "1px solid")};
  ${({ buttonSize }) => {
    if (buttonSize === "small")
      return css`
        font-size: 12px;
        padding: 10px 16px;
      `
    else if (buttonSize === "large")
      return css`
        font-size: 16px;
        padding: 12px 32px;
      `
    else
      return css`
        font-size: 14px;
        padding: 12px 24px;
      `
  }}// &:hover {
  //   background-color: #0056b3;
  // }
`

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      $primary={primary}
      buttonSize={size}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </StyledButton>
  )
}

export default Button;