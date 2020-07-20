/**
 * main.js
 *
 * @author nisse
 * @version 2020.07.20
 * @description
 */
import { NReact, Component } from './NReact.js';

class MyComponent extends Component{
  render() {
    return <div><span>hello</span>
      <div>{this.children}</div></div>
  }
}

let a = (
  <MyComponent name="1111"><span>hahah</span></MyComponent>
);
console.log(`main`);
// document.body.appendChild(a);
NReact.render(a, document.body);
