import React, {Component} from 'react'

interface ErrorPropType {
    // errorCode:number
    // message:string
}
interface ErrorState {
    message: string
}

export default class Error extends React.Component<ErrorPropType, ErrorState> {
    constructor(props:ErrorPropType) {
      super(props);
      this.state = { message: '' };
    }
    
    render() {
        // const {errorCode, message} = this.props;
    //   if (message) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
        
    //   }
    }
  }