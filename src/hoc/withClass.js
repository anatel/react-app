import React, {Component} from 'react';

//**OPTIONS FOR CODE REUSE:


//**REGULAR COMPONENT WRAPPER
// const withClass = (props) => (
//   <div className={props.classes}>
//     {props.children}
//   </div>
// )
//

//**HOC WITH FUNCTIONAL COMPONENT
// const withClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent {...props}/>
//     </div>
//   )
// }

//**HOC WITH STATEFUL COMPONENT - USING ANONYMOUS CLASS
// const withClass = (WrappedComponent, className) => {
//   return class extends Component {
//     render() {
//       return (
//         <div className={className}>
//           <WrappedComponent {...this.props}/>
//         </div>
//       )
//     }
//   }
// }


//**HOC WITH STATEFUL COMPONENT - USING FORWARD REF
const withClass = (WrappedComponent, className) => {
  const WithClass = class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} ref={this.props.forwardedRef}/>
        </div>
      )
    }
  }

  return React.forwardRef((props, ref) => {
    return <WithClass {...props} forwardedRef={ref} />
  })
}
export default withClass;