/* eslint-disable */
import React from "react"
import "./header.css"

interface HeaderProps {
  title?: String
}

 const Header = ({ title }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div>
        <a>
          <img
            src="https://seekvectorlogo.com/wp-content/uploads/2019/02/hdfc-life-vector-logo.png"
            style={{ height: 45 }}
          />
        </a>
        <h1>{title}</h1>
      </div>
      <div>
        <svg
          height="30"
          width="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M4 18L20 18"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M4 12L20 12"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M4 6L20 6"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
    </div>
  </header>
)
export default Header;