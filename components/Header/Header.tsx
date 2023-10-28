import Link from "next/link";

interface IProps {
  handleProjectScroll: () => void;
  handleContactScroll: () => void;
}

export const Header: React.FC<IProps> = ({
  handleProjectScroll,
  handleContactScroll,
}) => {
  return (
    <>
      <nav>
        <div className="flex justify-start items-center px-12 h-24">
          <div className="flex flex-row">
            <ol className="flex justify-between items-center list-none">
              <li className="flex items-center">
                <Link
                  href="https://v1-moyin.netlify.app/"
                  target="_blank"
                  className="text-xs text-secondary cursor-pointer p-2.5"
                  onClick={handleProjectScroll}
                >
                  V1
                </Link>
              </li>
              <li className="flex items-center">
                <button
                  className="text-xs text-primary hover:text-secondary transition-all  duration-300 ease-linear delay-0 p-2.5"
                  onClick={handleProjectScroll}
                >
                  Projects
                </button>
              </li>
              <li className="flex items-center">
                <button
                  className="text-xs text-primary hover:text-secondary transition-all  duration-300 ease-linear delay-0 p-2.5"
                  onClick={handleContactScroll}
                >
                  Contact
                </button>
              </li>
            </ol>
            <Link
              href="https://drive.google.com/file/d/1I9IdKsXSBw_CvK5IRgjaQGt7ky6coTyL/view?usp=drive_link"
              target="_blank"
              className="text-secondary rounded p-2 border border-secondary hover:border-l-4 hover:border-t-4 transition-all  ease-linear delay-0 ml-2"
            >
              My Résumé
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
