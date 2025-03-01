import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout/Layout'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import Home from './Components/home/Home'

export default function App() {
  let Route = createBrowserRouter([
    {
      path:'', element: <Layout/>, children:[
        {index:true,element:<Home/>},
        {path:'About',element:<About/>},
        {path:'Portfolio',element:<Portfolio/>},
        {path:'Contact',element:<Contact/>},
      ]
    }
  ])
  return (
    <RouterProvider router={Route}/>
  )
}
