import "./Footer.css";

const Footer = () => {
  return (
    <div className="copyright" data-cy="footer-copyright-div">Copyright © {new Date().getFullYear()} {" "}
     <a href="https://github.com/helloukey" target="_blank" rel="noreferrer" className="copyright-link" data-cy="footer-copyright-link">Kunal Ukey</a>
    </div>
  )
}
export default Footer