import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
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
        {path:'Contact',element:<Contact/>},
        {path:'Portfolio',element:<Portfolio/>}
      ]
    }
  ])
  return (
    <RouterProvider router={Route}/>
  )
}
