import NavbarClient from "@/components/NavbarClient"

function userlayout({ children }) {
  return <>
  <NavbarClient/>
  { children }
  </>
}

export default userlayout