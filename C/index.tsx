import { NavMobileProvider } from "./nav-mobile-context";



export function AppContext({children}: {children: React.ReactNode}) {
  return (
    <>
      <NavMobileProvider>
        {children}
      </NavMobileProvider>
    </>
  )
}