import React, { Component } from "react";

export default class Navbar extends Component {
  // Added a loading state to track when a category is being loaded
  state = { loading: false };

  // Function to handle category selection and show the loader
  handleCategoryClick = async (category) => {
    this.setState({ loading: true }); // Set loading to true when a category is clicked
    await this.props.setCategory(category); // Wait for category update (assuming setCategory is async)
    this.setState({ loading: false }); // Reset loading state after category update
  };

  render() {
    const { loading } = this.state; // Extract loading state
    const categories = [
      "technology",
      "business",
      "health",
      "sports",
      "entertainment",
    ];

    return (
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
                  style={{ cursor: "pointer" }}
                  onClick={() => this.handleCategoryClick(category)} // Updated onClick to use the new function
                  disabled={loading} // Disable button while loading
                >
                  {loading ? (
                    // Show a spinner when loading
                    <span className="spinner-border spinner-border-sm"></span>
                  ) : (
                    // Show category name when not loading
                    category.charAt(0).toUpperCase() + category.slice(1)
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}
