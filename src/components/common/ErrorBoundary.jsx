import { Component } from "react";

class ErrorBoundary extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {
    console.error(
      "App error:",
      error,
      info
    );
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-screen">
          <section className="error-card">
            <h1>Something went wrong</h1>
            <p>
              The app hit an unexpected error. Please reload and try again.
            </p>

            <button
              type="button"
              className="primary-btn"
              onClick={this.handleReload}
            >
              Reload App
            </button>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
