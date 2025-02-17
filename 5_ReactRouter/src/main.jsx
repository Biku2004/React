import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './componenets/Home/Home.jsx'
import About from './componenets/About/About.jsx'
import Contact from './componenets/Contact/Contact.jsx'
import User from './componenets/User/User.jsx'
import Github from './componenets/Github/Github.jsx'
import { githubInfoLoader } from './componenets/Github/GitInfoLoader.js'

/* 
const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      { path : "", element : <Home />},
      { path: "/about", element : <About />},
      { path: "/contacts" , element: <Contact /> }
    ]

  }
])

*/

// Another way to write the abive

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contacts' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />

      {/* Router comes with a new prop of loader which fetches the api directly wihtout using a hook
        and whenever we hover the Button it prefetches the api even before clicking the link
       */}
      <Route 
        path='github' 
        element={<Github />} 
        loader={githubInfoLoader}
        />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <RouterProvider router={router}/>

  </StrictMode>,
)
