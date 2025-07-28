import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-6 py-6 pb-10 ">
      <a href="https://www.instagram.com/arts__by_jay" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:scale-110 transition text-2xl " />
      </a>
     
      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaGithub className=" hover:scale-110 transition text-2xl" />
      </a>
      <a href="https://linkedin.com/in/jay-chavda-09903a27a" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className=" hover:scale-110 transition text-2xl" />
      </a>
      <a href="https://youtube.com/@alfaaz_e_jay" target="_blank" rel="noopener noreferrer">
        <FaYoutube className=" hover:scale-110 transition text-2xl" />
      </a>
    </div>
  );
};

export default SocialLinks;
