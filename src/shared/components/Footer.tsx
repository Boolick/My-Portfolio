export const Footer = () => {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER || "";
  const telegramUrl = import.meta.env.VITE_TELEGRAM_URL;
  const email = import.meta.env.VITE_EMAIL;
  const discordUrl = import.meta.env.VITE_DISKORD_URL;
  const githubUrl = import.meta.env.VITE_GITHUB_URL;
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;
  return (
    <footer className="flex flex-col items-center gap-4">
      <div className="socials flex flex-row justify-center gap-4  text-3xl">
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bx bxl-telegram hover:scale-125"
          aria-label="Telegram"
        ></a>
        <a
          href={email}
          className="bx bx-envelope hover:scale-125 "
          aria-label="Email"
        ></a>
        <a
          href={discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bx bxl-discord hover:scale-125"
          aria-label="Discord"
        ></a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bx bxl-github hover:scale-125"
          aria-label="GitHub"
        ></a>
        <a
          href={linkedinUrl}
          className="bx bxl-linkedin-square hover:scale-125"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <a href="#" className="bx bxl-facebook-square hover:scale-125"></a>
        <a href={phoneNumber} className="bx bxs-phone hover:scale-125"></a>
      </div>
        <span>Copyright ©2024, All rights reserved.</span>
    </footer>
  );
};

export default Footer;
