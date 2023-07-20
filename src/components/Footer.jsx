import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"

const Footer = () => {
  return (
    <div className="">
      <div>
        <a href="">
          <AiFillGithub className="fs-1" />
        </a>
        <a href="">
          <AiOutlineInstagram className="fs-1" />
        </a>
        <a href="">
          <AiOutlineTwitter className="fs-1" />
        </a>
        <a href="">
          <BsFacebook className="fs-1" />
        </a>
      </div>
      <div>CopyRight {new Date().getFullYear()}</div>
    </div>
  )
}

export default Footer
