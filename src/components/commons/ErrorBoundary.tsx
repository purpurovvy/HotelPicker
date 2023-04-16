/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component, ReactNode } from "react";
import { UnknownError } from "./UnknownError";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <UnknownError />;
    }
    return children;
  }
}

export default ErrorBoundary;
