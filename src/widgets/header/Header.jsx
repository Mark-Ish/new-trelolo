import "./style/HeaderWc.css"
import { Heading } from "../../shared/ui/Heading"
import { Profile } from "../../entities/profileForHeader/Profile"

export const Header = () => {
  return (
    <div className="textHeader">
      <Heading />
      <Profile />
    </div>
  )
}
