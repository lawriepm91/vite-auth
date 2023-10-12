import { RouterProvider } from 'react-router-dom'
import { useRouter } from './useRouter'
import { Nav } from '../layouts/Nav'

export function Router() {
  const { routes } = useRouter()
  return (
    <>
      <Nav />
      <RouterProvider router={routes} />
    </>
  )
}
