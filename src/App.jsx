import { useState } from "react";

import "./App.css";

// Assets
import drawers from "./assets/drawers.jpg";
import michelle from "./assets/avatar-michelle.jpg";
import facebook from "./assets/icon-facebook.svg";
import twitter from "./assets/icon-twitter.svg";
import pinterest from "./assets/icon-pinterest.svg";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-manrope bg-grey min-h-screen px-5 grid place-items-center">
      <main className="bg-white rounded-xl shadow-lg lg:shadow-xl max-w-[52rem] lg:flex lg:space-x-4">
        <div className="max-h-64 lg:max-h-full overflow-hidden basis-[50rem]">
          <img
            src={drawers}
            alt="hero image"
            className="w-full object-cover lg:h-full transition duration-500 hover:scale-110"
          />
        </div>

        <div className="flex-2 lg:pb-4">
          <section className="my-8 px-8">
            <h1 className="text-lg lg:text-xl text-blue-dark font-bold">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className="mt-4 text-blue-desaturated text-md lg:text-base">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </section>

          <section className="px-8 py-4 lg:pt-0 relative">
            <div className="flex justify-between items-center space-x-4 ">
              <img
                src={michelle}
                alt="avatar"
                className="h-12 w-12 rounded-full"
              />

              <div className="flex-1">
                <h3 className="text-base font-bold text-blue-dark">
                  Michelle Appleton
                </h3>
                <h4 className="text-md text-blue-grayish">28 Jun 2023</h4>
              </div>

              <div
                className={`h-10 w-10 grid place-items-center rounded-full z-40 cursor-pointer relative ${
                  isOpen ? "bg-blue-desaturated" : "bg-grey"
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                  <path
                    fill={isOpen ? "#fff" : "#6E8098"}
                    d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                  />
                </svg>

                {/* Desktoop */}
                {isOpen && (
                  <div className="absolute -top-[80px] shadow-xl">
                    <div className="bg-blue-dark w-64 items-center justify-around px-8 py-4 rounded-xl hidden lg:flex relative">
                      <p className="text-blue-grayish uppercase font-thin tracking-[0.3rem]">
                        Share
                      </p>
                      <a href="#">
                        <img src={facebook} alt="facebook icon" />
                      </a>
                      <a href="#">
                        <img src={twitter} alt="twitter icon" />
                      </a>
                      <a href="#">
                        <img src={pinterest} alt="pinterest icon" />
                      </a>

                      {/* Triangle */}
                      <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-blue-dark absolute -bottom-3 left-auto right-auto"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Share icons section */}
            {isOpen && (
              <>
                {/* Mobile */}
                <div className="w-full bg-blue-dark absolute inset-0 flex items-center lg:hidden">
                  <div className="flex space-x-4 items-center pl-8">
                    <p className="text-blue-grayish uppercase font-thin tracking-[0.3rem]">
                      Share
                    </p>
                    <a href="#">
                      <img src={facebook} alt="facebook icon" />
                    </a>
                    <a href="#">
                      <img src={twitter} alt="twitter icon" />
                    </a>
                    <a href="#">
                      <img src={pinterest} alt="pinterest icon" />
                    </a>
                  </div>
                </div>
              </>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
