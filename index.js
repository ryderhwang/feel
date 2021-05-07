import { registerRootComponent } from 'expo';
import React from 'react';
import Application from './App.js';

class App extends React.Component {
    render() {
        return <Application />;
    }
}

registerRootComponent(App);
