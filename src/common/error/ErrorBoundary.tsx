import React, {Component} from 'react'

interface ErrorPropType {

}
interface ErrorState {
    hasError: boolean
}

export default class ErrorBoundary extends React.Component<ErrorPropType, ErrorState> {
    constructor(props:ErrorPropType) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error:Error, info:any) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
    //   logErrorToMyService(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
        
      }
      return this.props.children;
    }
  }