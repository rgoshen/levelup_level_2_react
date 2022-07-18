# Level 2 React

![react](assets/images/reactjs.png)
[React Docs](https://reactjs.org/docs/getting-started.html) |
[React Spring](https://react-spring.dev/)

## TOC

- [Level 2 React](#level-2-react)
  - [TOC](#toc)
  - [Basic Toggle Component](#basic-toggle-component)
  - [Understanding Render Props](#understanding-render-props)
  - [Children Render Props](#children-render-props)
  - [Fragments in React](#fragments-in-react)
  - [Creating A Reusable Portal](#creating-a-reusable-portal)
  - [Creating A Reuseable Modal](#creating-a-reuseable-modal)
  - [Improving Our Modal](#improving-our-modal)
  - [Creating A Reuseable Icon Component](#creating-a-reuseable-icon-component)
  - [Index Files for Organization](#index-files-for-organization)
  - [Elements Module & Absolute Imports](#elements-module--absolute-imports)
  - [Building Design Utilities](#building-design-utilities)
  - [React Context API](#react-context-api)
  - [Updating Context](#updating-context)
  - [Basic Transitions With React Spring](#basic-transitions-with-react-spring)
  - [React Spring Basics Part 2](#react-spring-basics-part-2)
  - [Animating Modal](#animating-modal)
  - [Native Mode for Perfomant Animations](#native-mode-for-perfomant-animations)
  - [Animated Draggable Components](#animated-draggable-components)
  - [Native Dragging Animation](#native-dragging-animation)
  - [Interpolation Indepth](#interpolation-indepth)
  - [Using Position To Interpolate Color](#using-position-to-interpolate-color)
  - [Event With Gestures Based Interface](#event-with-gestures-based-interface)

## Basic Toggle Component

_src/components/toggle/BasicToggleButton.jsx_

```javascript
import React, { useState } from 'react';

export default function BasicToggleButton(props) {
  const [isToggled, setToggled] = useState(false);
  const onToggle = () => setToggled(!isToggled);
  return (
    <div>
      {isToggled && props.children}
      <button onClick={onToggle}>Show/Hide</button>
    </div>
  );
}
```

- not very flexible

[toc](#toc)

## Understanding Render Props

Render Prop is just passing in a property to the component to render

_src/components/toggle/BasicToggle.jsx_

```javascript
import React, { useState } from 'react';

export default function BasicToggleButton({ render }) {
  const [isToggled, setToggled] = useState(false);
  const onToggle = () => setToggled(!isToggled);
  return (
    <div>
      {render({
        isToggled,
        onToggle,
      })}
    </div>
  );
}
```

The proper named `render` can be named anything you would like

_src/App.js_

```javascript
import './App.css';

// components
import BasicToggle from './components/toggle/BasicToggle';

function App() {
  return (
    <div className='App'>
      <div className='toggle'>
        <BasicToggle
          render={({ isToggled, onToggle }) => (
            <div>
              {isToggled && <p>Show me</p>}

              <button onClick={onToggle}>Show / Hide</button>
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default App;
```

[toc](#toc)

## Children Render Props

_src/components/toggle/BasicToggle.jsx_

```javascript
import { useState } from 'react';

export default function BasicToggle({ children }) {
  const [isToggled, setToggled] = useState(false);
  const onToggle = () => setToggled(!isToggled);
  return children({
    isToggled,
    onToggle,
  });
}
```

_src/App.js_

```javascript
import './App.css';

// components
import BasicToggle from './components/toggle/BasicToggle';

function App() {
  return (
    <div className='App'>
      <div className='toggle'>
        <BasicToggle>
          {({ isToggled, onToggle }) => (
            <div>
              {isToggled && <p>Show me</p>}
              <button onClick={onToggle}>Show / Hide</button>
            </div>
          )}
        </BasicToggle>
      </div>
    </div>
  );
}

export default App;
```

[toc](#toc)

## Fragments in React

_src/App.js_

```javascript
import './App.css';

// components
import BasicToggle from './components/toggle/BasicToggle';

function App() {
  return (
    <div className='App'>
      <div className='toggle'>
        <BasicToggle>
          {({ isToggled, onToggle }) => (
            <>
              {isToggled && <p>Show me</p>}
              <button onClick={onToggle}>Show / Hide</button>
            </>
          )}
        </BasicToggle>
      </div>
    </div>
  );
}

export default App;
```

[toc](#toc)

## Creating A Reusable Portal

What is a portal?

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

`ReactDOM.createPortal(child, container)`

The first argument (child) is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element.

- have any code wrapped so it can be inserted into the DOM anywhere you choose

_src/Portal.js_

```javascript
import { Component } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal');

export default class Portal extends Component {
  constructor() {
    super();
    this.el = document.createElement('div');
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.el);
  };

  componentWillUnmount = () => {
    portalRoot.removeChild(this.el);
  };

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}
```

_src/App.js_

```javascript
import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRPC';
import Portal from './Portal';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Login</button>
              <Portal>{on && <h1>Hi, I;m in a portal</h1>}</Portal>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
```

[toc](#toc)

## Creating A Reuseable Modal

[toc](#toc)

## Improving Our Modal

[toc](#toc)

## Creating A Reuseable Icon Component

[toc](#toc)

## Index Files for Organization

[toc](#toc)

## Elements Module & Absolute Imports

[toc](#toc)

## Building Design Utilities

[toc](#toc)

## React Context API

[toc](#toc)

## Updating Context

[toc](#toc)

## Basic Transitions With React Spring

[toc](#toc)

## React Spring Basics Part 2

[toc](#toc)

## Animating Modal

[toc](#toc)

## Native Mode for Perfomant Animations

[toc](#toc)

## Animated Draggable Components

[toc](#toc)

## Native Dragging Animation

[toc](#toc)

## Interpolation Indepth

[toc](#toc)

## Using Position To Interpolate Color

[toc](#toc)

## Event With Gestures Based Interface

[toc](#toc)
