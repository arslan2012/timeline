import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('./home/home'))
const AboutMe = lazy(() => import('./aboutMe/aboutMe'))

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about-me" component={AboutMe} />
          </Switch>
        </Suspense>
      </Router>
    )
  }
}
