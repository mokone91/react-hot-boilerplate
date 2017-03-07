import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

const Main = () => <h2>Main</h2>
const Sandwiches = () => <h2>Sandwiches</h2>
const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>

const Tacos = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li><Link to="/tacos/bus">Bus</Link></li>
      <li><Link to="/tacos/cart">Cart</Link></li>
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route}/>
    ))}
  </div>
)

const routes = [
  { path: '/sandwiches',
    component: Sandwiches
  },
  { path: '/tacos',
    component: Tacos,
    routes: [
      { path: '/tacos/bus',
        component: Bus
      },
      { path: '/tacos/cart',
        component: Cart
      }
    ]
  }
]

const RouteWithSubRoutes = (route) => (
  <Route exact path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props}/>
  )}/>
)

export default function appRouter({routes}) {

  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">/</Link></li>
          <li><Link to="/auth">auth</Link></li>
          <li><Link to="/auth/login">auth/login</Link></li>
          <li><Link to="/auth/register">auth/register</Link></li>
        </ul>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
      </div>
    </Router>
  );
}