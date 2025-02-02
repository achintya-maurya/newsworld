import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    const { setCategory } = this.props;
    const categories = [
      "technology",
      "business",
      "health",
      "sports",
      "entertainment",
    ];

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <span className="badge bg-light text-dark fs-4">
              News{" "}
              <span className="badge bg-danger text-light fst-italic border">
                World
              </span>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              {categories.map((category) => (
                <li className="nav-item" key={category}>
                  <button
                    className="btn nav-link"
                    style={{ cursor: "pointer" }} // Ensures the hand cursor
                    onClick={() => setCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
