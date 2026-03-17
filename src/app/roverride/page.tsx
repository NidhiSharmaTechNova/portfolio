


"use client"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


export default function Page() {


    const divRef = useRef<HTMLDivElement>(null!)
    const rightRef = useRef<HTMLDivElement>(null!)
    const lastParaRef = useRef<HTMLParagraphElement>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            ScrollTrigger.matchMedia({

                // Desktop / tablet
                "(min-width: 1024px)": () => {
                    ScrollTrigger.create({
                        trigger: divRef.current,
                        start: "top+=30 top",
                        endTrigger: lastParaRef.current,
                        end: "bottom bottom",
                        pin: rightRef.current,
                        pinSpacing: false,
                        scrub: true,
                    });
                },

                // Mobile (no animation)
                "(max-width: 1023px)": () => {
                    ScrollTrigger.getAll().forEach(t => t.kill());
                }

            });

        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="grid h-full w-full grid-cols-12 max-w-[1600px] mx-auto">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="relative">
                            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                        </div>
                    ))}
                </div>
            </div>
            <main className="min-h-screen bg-black text-white flex flex-col">



                <div className="h-auto lg:h-[100vh] pb-20">
                    {/* heading */}
                    <h1 className="pt-16 pl-6 sm:pl-10 md:pl-14 text-[40px] sm:text-[60px md:text-[80px] font-medium tracking-[-1px]">
                    roverride
                    </h1>

                    {/* paragraph */}
                     <div className="flex justify-center mt-20 sm:mt-24 md:mt-32 px-6">
                        <p className="max-w-4xl text-[22px] sm:text-[30px] md:text-[42px leading-tight tracking-[-1px]">
                           An on-demand dog walking and pet sitting service that connects busy pet owners with trusted local caregivers
                        </p>
                    </div>
                </div>

                <div className=" px-6 sm:px-10 md:px-14">

                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#333] text-sm tracking-widest">
                            00
                        </span>

                        <div className="flex-1 h-[1px] bg-[#333]"></div>
                    </div>

                    <img
                        src="https://framerusercontent.com/images/ju62vkEreDoQkpYoSbxnVoVcnzo.jpg?width=1920&height=1440"
                        alt="preview"
                        className="w-full h-[770px] object-cover"
                    />
                </div>



                  <div className="mx-auto px-6 sm:px-10 md:px-14 py-20 md:py-32 w-full
grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* LEFT */}
                    <div>
                        <h2 className="text-[#333] text-[20px] mb-6">problem</h2>

                        <p className="text-white/70 text-[20px] leading-relaxed max-w-[370px]">
                            Pet owners with busy schedules often struggle to find reliable and trusted caregivers to meet the needs of their beloved pets. Finding a convenient and on-demand dog walking and pet sitting service can be challenging, leaving pet owners feeling anxious and guilty about leaving their pets alone for extended periods. Existing options may lack the necessary transparency and reliability, making it difficult for pet owners to find peace of mind while away from their furry companions.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div>
                        <h2 className="text-[#333] text-xl mb-6">solution</h2>

                        <p className="text-white/70 text-lg leading-relaxed max-w-[370px]">
                            RoverRide is a groundbreaking on-demand dog walking and pet sitting service that addresses the aforementioned challenges by connecting busy pet owners with trusted local caregivers. Through a user-friendly mobile app, RoverRide offers a convenient platform where pet owners can easily book and schedule pet care services. The service ensures that pets receive the attention and care they need, while pet owners can confidently go about their daily responsibilities, knowing their furry friends are in capable hands.
                        </p>
                    </div>

                </div>


                 <div
                    ref={divRef}
                    className="relative px-6 sm:px-10 lg:px-14 pb-0 pt-20 sm:pt-24 lg:pt-30"
                >


                     <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-14 lg:gap-20">

                        {/* LEFT (Pinned) */}
                        <div className="flex flex-col gap-8 lg:gap-10 mt-10 lg:mt-0 lg:sticky lg:top-32">
                            <div className="max-w-[940px]">
                                <p className="text-white text-[22px] sm:text-[26px] md:text-[32px] leading-tight">
                                    RoverRide was born out of the founders' passion for pets and their own personal experiences as busy pet owners. They recognized the challenges faced by individuals who strive to provide the best care for their pets while juggling demanding schedules. With a shared vision of creating a reliable and accessible pet care solution, the founders assembled a team of dedicated professionals from the pet care industry and technology experts.
                                </p>
                                <img src="https://framerusercontent.com/images/hXNxNIsMQHy4h36kwr4q2nUpAzI.jpg?scale-down-to=2048&width=2560&height=1920"
                                    alt="preview"
                                     className="w-full h-[260px] sm:h-[320px] md:h-[670px] object-cover pt-15"  />

                                <p className="text-[#ffffff80] text-[20px] pt-10 max-w-[760px]">Driven by their mission, the team developed the RoverRide mobile app, which revolutionizes the way pet owners connect with local caregivers. The app provides a platform where pet owners can easily browse and choose from a network of trusted and verified caregivers based on their location and specific needs. RoverRide's rigorous vetting process ensures that each caregiver is experienced, reliable, and passionate about animal care, giving pet owners peace of mind.</p>

                                <p className="text-[#ffffff80] text-[20px] pt-5 max-w-[760px]">Since its launch, RoverRide has transformed the lives of pet owners and their furry companions. Users have praised the convenience and reliability of the service, appreciating the ease with which they can schedule dog walks or pet sitting sessions with qualified caregivers. Pet owners can track their pets' activities and receive real-time updates through the app, fostering a sense of connectedness even when physically apart. RoverRide has not only simplified pet care for busy individuals but has also created a thriving community of pet lovers who share a common goal of providing the best care for their four-legged family members.</p>

                            </div>
                        </div>

                        {/* RIGHT (Scrolling Content) */}
                        <div ref={rightRef} className="flex flex-col gap-8 lg:gap-10 mt-10 lg:mt-0">

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-[#333] mb-1 text-[14px] font-light">year</h3>

                                    <div className="flex-1 h-[1px] bg-[#333]"></div>
                                </div>
                                <p className="text-2xl text-[#333] text-[20px] font-light">2023</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-[#333] mb-1 text-[14px] font-light">timeframe</h3>

                                    <div className="flex-1 h-[1px] bg-[#333]"></div>
                                </div>
                                <p className="text-2xl text-[#333] text-[20px] font-light">16 days</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-[#333] mb-1 text-[14px] font-light">tools</h3>

                                    <div className="flex-1 h-[1px] bg-[#333]"></div>
                                </div>
                                <p className="text-2xl text-[#333] text-[20px] font-light">Framer</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-[#333] mb-1 text-[14px] font-light">category</h3>

                                    <div className="flex-1 h-[1px] bg-[#333]"></div>
                                </div>
                                <p className="text-2xl text-[#333] text-[20px] font-light">Personal Project</p>
                            </div>

                        </div>

                    </div>


                </div>
                <div className="px-6 sm:px-10 lg:px-14 mt-20 lg:mt-30">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#333] text-sm tracking-widest">
                            01
                        </span>


                        <div className="flex-1 h-[1px] bg-[#333]"></div>
                    </div>
                    <img
                        src="https://framerusercontent.com/images/NcYFQFsgtc1AAIqqJHeGICYEicQ.png?width=2048&height=1536"
                        alt="preview"
                        className="w-full h-[770px] object-cover"
                    />

                    <p className='w-[250px] pt-4 text-[#ffffff80]' >A happy dog enjoys a leisurely walk with a trusted RoverRide caregiver, giving busy pet owners peace of mind while they attend to their responsibilities.</p>
                </div>

                <div className="px-6 sm:px-10 lg:px-14 mt-20 lg:mt-30">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#333] text-sm tracking-widest">
                            02
                        </span>

                        <div className="flex-1 h-[1px] bg-[#333]"></div>
                    </div>
                    <img
                        src="https://framerusercontent.com/images/uUEsldkXBKyUIKXZbrgVOVsh3w.png?width=2048&height=1536"
                        alt="preview"
                        className="w-full h-[770px] object-cover"
                    />

                    <p className='w-[250px] pt-4 text-[#ffffff80]'>A pet owner views real-time updates and photos of their pet's activities through the RoverRide app, maintaining a sense of connection and reassurance.</p>
                </div>


                 <div className="px-6 sm:px-10 lg:px-14 mt-20 lg:mt-30">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#333] text-sm tracking-widest">
                            03
                        </span>

                        <div className="flex-1 h-[1px] bg-[#333]"></div>
                    </div>
                    <img
                        src="https://framerusercontent.com/images/K8ioJ8YDZdlO9sN5xXKR9SWHhDA.png?width=2048&height=1536"
                        alt="preview"
                        className="w-full h-[700px] object-cover"
                    />

                    <p className='w-[250px] pt-4 text-[#ffffff80]'>A satisfied pet owner expresses gratitude for the reliable and trusted caregivers provided by RoverRide, ensuring their pets receive the love and care they deserve.</p>
                </div>


                <div className="px-6 sm:px-10 lg:px-14 py-20 sm:py-24 lg:py-32 bg-black">
                    {/* <p className="text-white/40 mb-10 text-sm tracking-widest">see also</p> */}

                    <div className="flex items-center gap-2 mb-3 pb-5">
                        <span className="text-[#5c5a5a] text-sm tracking-widest">
                            see also
                        </span>

                        <div className="flex-1 h-[1px] bg-[#5c5a5a]"></div>
                    </div>


                    <div className="flex flex-col gap-6">

                        <a href="#" className="group w-full">
                            <div className="flex items-center justify-between bg-[#ff6200]  overflow-hidden p-3">

                                <div className="w-[120px] sm:w-[180px] md:w-[260px]">
                                    <img
                                        src="https://framerusercontent.com/images/cak7U7dY4h898WLby7suvljdOcA.jpg?width=1920&height=1329"
                                        className="w-full h-[90px] sm:h-[120px] md:h-auto md:aspect-[2/0.6] object-cover"
                                    />
                                </div>

                                <div className="flex-1 px-6">
                                    <p className="text-[11px] sm:text-sm text-black">
                                        UI/UX
                                    </p>
                                    <h3 className=" text-black text-xl md:text-2xl ">
                                        snackify
                                    </h3>
                                </div>

                                <div className="ml-6 flex-shrink-0">
                                    <div className="w-15 h-20 flex items-center justify-center">
                                        <svg
                                            className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] -rotate-45 transition-all duration-500 group-hover:rotate-0"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.4"
                                        >
                                            <path d="M5 11h11" />
                                            <path d="M11 5l6 6-6 6" />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </a>

                        {/* CARD 1 */}
                        <a href="#" className="group w-full">
                            <div className="flex items-center justify-between  bg-white overflow-hidden p-3">

                                {/* LEFT IMAGE */}
                                <div className="w-[120px] sm:w-[180px] md:w-[260px]">
                                    <img
                                        src="https://framerusercontent.com/images/xKHWSysrgFe1ub1CxmcYLHQdpc.jpg?width=1920&height=1440"
                                        className="w-full h-[90px] sm:h-[120px] md:h-auto md:aspect-[2/0.6] object-cover"
                                    />
                                </div>

                                {/* CENTER TEXT */}
                                <div className="flex-1 px-6">
                                    <p className="text-[11px] sm:text-sm  text-[#1f00ff] ">
                                        Branding and Identity
                                    </p>
                                    <h3 className=" text-[#1f00ff]  text-xl md:text-2xl">
                                        aquaflow
                                    </h3>
                                </div>

                                {/* RIGHT ARROW */}
                                <div className="ml-6 flex-shrink-0">
                                    <div className="w-15 h-20 flex items-center justify-center text-blue-400">
                                        <svg
                                            className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] -rotate-45 transition-all duration-500 group-hover:rotate-0"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.4"
                                        >
                                            <path d="M5 11h11" />
                                            <path d="M11 5l6 6-6 6" />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </a>

                        {/* CARD 2 */}

                        <a href="#" className="group w-full">
                            <div className="flex items-center justify-between bg-[#2e3538]  overflow-hidden p-3">

                                <div className="w-[120px] sm:w-[180px] md:w-[260px]">
                                    <img
                                        src="https://framerusercontent.com/images/v2Cxh5gAzf3y5i5rvV7stpdreY.jpg?width=1920&height=1440"
                                        className="w-full h-[90px] sm:h-[120px] md:h-auto md:aspect-[2/0.6] object-cover"
                                    />
                                </div>

                                <div className="flex-1 px-6">
                                    <p className="text-[11px] sm:text-sm text-green-400/60">
                                        UI/UX
                                    </p>
                                    <h3 className=" text-green-300 text-xl md:text-2xl ">
                                        snackify
                                    </h3>
                                </div>

                                <div className="ml-6 flex-shrink-0">
                                    <div className="w-15 h-20 flex items-center justify-center">
                                        <svg
                                            className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] -rotate-45 transition-all duration-500 group-hover:rotate-0"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.4"
                                        >
                                            <path d="M5 11h11" />
                                            <path d="M11 5l6 6-6 6" />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </a>

                        {/* CARD 3 */}
                        <a href="#" className="group w-full">
                            <div className="flex items-center justify-between bg-yellow-400   overflow-hidden p-3">


                                <div className="w-[120px] sm:w-[180px] md:w-[260px]">
                                    <img
                                        src="https://framerusercontent.com/images/B4iHZ4n8YkDGgjtcjPiGagMwMzA.jpg?width=1920&height=1440"
                                        className="w-full h-[90px] sm:h-[120px] md:h-auto md:aspect-[2/0.6] object-cover"
                                    />
                                </div>

                                <div className="flex-1 px-6">
                                    <p className="text-[#3d3b54] text-[11px] sm:text-sm">
                                        Personal Project
                                    </p>
                                    <h3 className="text-[#3d3b54] text-xl md:text-2xl">
                                        zengo
                                    </h3>
                                </div>

                                <div className="ml-6 flex-shrink-0">
                                    <div className="w-15 h-20 flex items-center justify-center">
                                        <svg
                                            className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] -rotate-45 transition-all duration-500 group-hover:rotate-0"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.4"
                                        >
                                            <path d="M5 11h11" />
                                            <path d="M11 5l6 6-6 6" />
                                        </svg>
                                    </div>
                                </div>


                            </div>
                        </a>

                    </div>

                </div >

                <div className="px-6 sm:px-10 lg:px-14 py-20">

                    <div className="flex items-center gap-2 mb-4">

                        <span className="text-[#5c5a5a] text-xs sm:text-sm tracking-widest">
                            .say hello
                        </span>

                        <div className="flex-1 h-[1px] bg-[#5c5a5a]"></div>

                    </div>


                    <h3 className="max-w-4xl text-[22px] sm:text-[30px] md:text-[36px] lg:text-[42px] leading-tight tracking-[-1px] pt-10 sm:pt-16 lg:pt-20">

                        i'm open for freelance projects, feel free to email me to see how can we collaborate

                    </h3>

                </div>

            </main >
        </>
    )
}
