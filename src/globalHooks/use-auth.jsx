import { useSelector } from "react-redux"

export const useAuth = () => {
  const { email, id, token } = useSelector((state) => state.auth)

  return {
    isUser: !!email,
    email,
    id,
    token,
    name: email?.split("@")[0].toUpperCase(),
  }
}
