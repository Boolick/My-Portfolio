
export const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="assets/logo.png" />
        <a href="#">AsmrProg</a>
      </div>
      <div className="nav-links">
        <a className="selected" href="index.html">
          Home
        </a>
        <a href="works.html">Works</a>
        <a href="single-work.html">Single Work</a>
        <a href="blog.html">Blog</a>
        <a href="about.html">About</a>
      </div>
    </nav>
  );
};
