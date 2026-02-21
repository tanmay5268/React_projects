import { gsap,Expo, CSSPlugin } from "gsap";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
gsap.registerPlugin(CSSPlugin);
const Preloader = () => {
    const [counter, setCounter] = useState(0);
    const counterRef = useRef<HTMLDivElement>(null);
    // useGSAP(function () {
    //     const tl = gsap.timeline();
    //     tl.to(counterRef.current, {
    //         opacity: 0,
    //         delay: 3.5
    //     })
    // })
    const reveal = () => {
        const t1 = gsap.timeline({
            onComplete: () => {
                console.log("completed");
            },
        });
        t1.to(".follow", {
            width: "100%",
            ease: Expo.easeInOut,
            duration: 1.2,
            delay: 0.7,
        })
            .to(".hide", { opacity: 0, duration: 0.3 })
            .to(".hide", { display: "none", duration: 0.3 })
            .to(".follow", {
                // height: "100%",
                // ease: Expo.easeInOut,
                // duration: 0.7,
                // delay: 0.5,
                opacity: 0,
                duration: 0.3,

            }).to(counterRef.current, {
                opacity: 0,
                duration: 0.8,
                ease: Expo.easeInOut,
            })


    }
    useEffect(() => {
        const count = setInterval(() => {
            setCounter((counter) => {
                if (counter < 100) {
                    return counter + 1;
                } else {
                    clearInterval(count);
                    reveal();
                    return counter;
                }
            }
            );
        }, 40);
    }, []);



    return (
        <div ref={counterRef} className="pointer-events-none counter absolute z-2 h-full w-full bg-[#0d0313]">
            <AppContainer>
                <Loading>
                    <Follow className="follow"></Follow>
                    <ProgressBar
                        className="hide"
                        id="progress-bar"
                        style={{ width: counter + "%" }}
                    ></ProgressBar>
                    <Count id="count" className="hide">
                        {counter}%
                    </Count>
                </Loading>
            </AppContainer>
        </div>
    )
}

export default Preloader


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  position: relative;
`;
const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color:#0d0313;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;
const Follow = styled.div`
  position: absolute;
  background-color: #8467F3;
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
`;

const Count = styled.p`
  position: absolute;
  font-size: 130px;
  color: #fff;
  transform: translateY(-15px);
  font-weight: 500;
`;
