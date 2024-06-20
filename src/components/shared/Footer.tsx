import logo from "../../assets/Logo.png";
const Footer = () => {
  return (
    <footer className="footer p-[92px] bg-white text-fh-secondary mt-[60px]">
      <aside className="w-1/2">
        <img className="bg-fh-secondary rounded p-2" src={logo} alt="" />
        <p className="text-wrap">
          Whether you're celebrating a special occasion, expressing your love
          and affection, or simply looking to brighten someone's day, our
          handcrafted floral arrangements are the perfect choice.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social Media</h6>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Instagram</a>
        <a className="link link-hover">Linkedin</a>
      </nav>
    </footer>
  );
};

export default Footer;
