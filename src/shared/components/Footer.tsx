export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-4">
      <div className="socials flex flex-row justify-center gap-4  text-3xl">
        <a href="#" className="bx bxl-telegram hover:scale-125"></a>
        <a href="#" className="bx bx-envelope hover:scale-125"></a>
        <a href="#" className="bx bxl-discord hover:scale-125"></a>
        <a href="#" className="bx bxl-linkedin-square hover:scale-125"></a>
        <a href="#" className="bx bxl-facebook-square hover:scale-125"></a>
        <a href="#" className="bx bxs-phone hover:scale-125"></a>
      </div>
      <p>Copyright ©2024, All rights reserved.</p>
    </footer>
  );
};
