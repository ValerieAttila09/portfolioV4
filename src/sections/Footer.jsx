import { socialImgs } from "../constants";

export default function FooterSection() {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <a href="/">Visit My Blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" target="_blank" href={img.url} key={img.url}>
              <img src={img.imgPath} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            &copy; {new Date().getFullYear()} Valerie Attila Al-fath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}