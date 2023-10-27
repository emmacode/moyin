import Link from "next/link";
// import styled from "styled-components";
// import { Monoton } from "next/font/google";

// import { MobileMenu } from "./MobileMenu";
// import { useState } from "react";
// import useMediaQuery, { screens } from "@/hook/useMediaQuery";

// const monoton = Monoton({
//   subsets: ["latin"],
//   variable: "--mono-font",
//   weight: "400",
// });

// interface NavProps {
//   clicked: boolean;
// }

interface IProps {
  handleProjectScroll: () => void;
  handleContactScroll: () => void;
}

export const Header: React.FC<IProps> = ({
  handleProjectScroll,
  handleContactScroll,
}) => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const matches = useMediaQuery(`(max-width:${screens.lg})`);

  // const handleOpen = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  // const renderMobileMenu = () => {
  //   return (
  //     <div className="block lg:hidden">
  //       <MenuLabel onClick={handleOpen}>
  //         <Icon clicked={isMobileMenuOpen}>&nbsp;</Icon>
  //       </MenuLabel>
  //     </div>
  //   );
  // };

  return (
    <>
      <nav>
        <div className="flex justify-start items-center px-12 h-24">
          {/* <div>
            <Link href="/" className={monoton.className}>
              <h1 className="text-5xl text-primary">AM</h1>
            </Link>
          </div> */}
          {/* <div className="hidden lg:block"> */}
          <div className="flex flex-row">
            <ol className="flex justify-between items-center list-none">
              <li className="flex items-center">
                <button
                  className="text-xs text-primary hover:text-secondary transition-all  duration-300 ease-linear delay-0 p-2.5"
                  onClick={handleProjectScroll}
                >
                  Projects
                </button>
              </li>
              {/* <li>
                <Link
                  className="text-xs text-primary hover:text-secondary transition-all  duration-300 ease-linear delay-0 p-2.5"
                  href="#"
                >
                  About
                </Link>
              </li> */}
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
          {/* {renderMobileMenu()}
          {matches && <MobileMenu open={isMobileMenuOpen} />} */}
        </div>
      </nav>
    </>
  );
};

// export const Nav = styled.nav``;

// const MenuLabel = styled.label`
//   position: fixed;
//   top: 40px;
//   right: 48px;
//   background-color: #000;
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   cursor: pointer;
//   z-index: 1000;
//   margin-top: -19px;
//   box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
// `;

// const Icon = styled.span<NavProps>`
//   position: relative;
//   background-color: ${(props) => (props.clicked ? "transparent" : "#ef3636")};
//   width: 24px;
//   height: 1px;
//   display: inline-block;
//   margin-top: 24px;
//   margin-left: 13px;
//   transition: all 0.2s;

//   &::before,
//   &::after {
//     content: "";
//     background-color: #ef3636;
//     width: 24px;
//     height: 1px;
//     display: inline-block;

//     position: absolute;
//     right: 0;
//     transition: all 0.3s;
//   }

//   &::before {
//     top: ${(props) => (props.clicked ? "0" : "-5px")};
//     transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
//   }

//   &::after {
//     top: ${(props) => (props.clicked ? "0" : "5px")};
//     transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
//   }
// `;
