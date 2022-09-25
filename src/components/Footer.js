import "./Footer.css";

const Footer = () => {
  return (
    <div className="copyright">Copyright © {new Date().getFullYear()} {" "}
     <a href="https://github.com/helloukey" target="_blank" rel="noreferrer" className="copyright-link">Kunal Ukey</a>
    </div>
  )
}
export default Footer