import Navbar from "@/components/Navbar"

function userlayout({ children }) {
  return <>
  <Navbar/>
  { children }
  </>
}

export default userlayout