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
                        zengo
                    </h1>

                    {/* paragraph */}
                    <div className="flex justify-center mt-20 sm:mt-24 md:mt-32 px-6">
                        <p className="max-w-4xl text-[22px] sm:text-[30px] md:text-[42px leading-tight tracking-[-1px]">
                            A meditation app that uses AI to customize your mindfulness practice and track your progress
                        </p>
                    </div>
                </div>

                <div className=" px-6 sm:px-10 md:px-14">

                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#fd0] text-sm tracking-widest">
                            00
                        </span>

                        <div className="flex-1 h-[1px] bg-[#fd0]"></div>
                    </div>

                    <img
                        src="https://framerusercontent.com/images/B4iHZ4n8YkDGgjtcjPiGagMwMzA.jpg?width=1920&height=1440"
                        alt="preview"
                        className="w-full h-[740px] object-cover"
                    />
                </div>



                <div className="mx-auto px-6 sm:px-10 md:px-14 py-20 md:py-32 w-full
grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* LEFT */}
                    <div>
                        <h2 className="text-[#fd0] *:text-[20px] mb-6">problem</h2>

                        <p className="text-white/70 text-[20px] leading-relaxed max-w-[370px]">
                            In today's fast-paced and stressful world, finding time for mindfulness and meditation can be challenging. Many individuals struggle with maintaining a consistent meditation practice due to a lack of guidance, personalized approaches, and difficulty tracking progress. Existing meditation apps often offer generic content that fails to cater to individuals' specific needs, making it difficult to cultivate a sustainable and effective mindfulness routine.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div>
                        <h2 className="text-[#fd0] text-xl mb-6">solution</h2>

                        <p className="text-white/70 text-lg leading-relaxed max-w-[370px]">
                            Zengo is a revolutionary meditation app that addresses the aforementioned challenges by utilizing artificial intelligence to customize mindfulness practices and track users' progress. By leveraging AI algorithms, Zengo offers personalized meditation sessions tailored to users' unique goals, preferences, and skill levels. The app's advanced tracking features provide valuable insights into users' meditation journey, enabling them to monitor their progress and make informed adjustments to optimize their mindfulness practice.
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
                                    Zengo's journey began with the vision of empowering individuals to harness the transformative power of mindfulness in their daily lives. The founders recognized the growing need for personalized and accessible meditation experiences to help individuals combat stress and enhance their overall well-being. They assembled a team of meditation experts, AI engineers, and user experience designers to bring their vision to life.
                                </p>
                                <img src="https://framerusercontent.com/images/wVMUBIghdesyWXNco9PoSHUZfF4.jpg?scale-down-to=2048&width=2560&height=1920"
                                    alt="preview"
                                     className="w-full h-[260px] sm:h-[320px] md:h-[670px] object-cover pt-15" />


                                <p className="text-[#ffffff80] text-[20px] pt-10 max-w-[760px]">The team embarked on extensive research and development to create an app that seamlessly integrates artificial intelligence with mindfulness practices. They understood that customization was crucial for users to connect deeply with their meditation practice, and thus, they developed a sophisticated AI system capable of adapting to users' evolving needs. Zengo's algorithm analyzes users' preferences, goals, and previous meditation experiences to generate personalized sessions, ensuring that each practice caters to individual requirements.</p>

                                <p className="text-[#ffffff80] text-[20px] pt-5 max-w-[760px]">Since its launch, Zengo has made a profound impact on users seeking a more personalized and effective meditation experience. Individuals have embraced the app's AI-powered features, finding solace in the customized meditation sessions that align with their specific needs and objectives. Zengo's progress tracking tools have empowered users to monitor their journey, celebrate milestones, and make data-driven adjustments to enhance their practice. The app's user-friendly interface, combined with its AI capabilities, has transformed the way users approach mindfulness, making it more accessible and impactful in their daily lives.</p>

                            </div>
                        </div>

                        {/* RIGHT (Scrolling Content) */}
                      <div ref={rightRef} className="flex flex-col gap-8 lg:gap-10 mt-10 lg:mt-0">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-[#fd0] mb-1 text-[14px] font-light">year</h3>

                                    <div className="flex-1 h-[1px] bg-[#fd0]"></div>
                                </div>
                                <p className="text-2xl text-[#fd0] text-[20px] font-light">2023</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-[#fd0] mb-1 text-[14px] font-light">timeframe</h3>

                                    <div className="flex-1 h-[1px] bg-[#fd0]"></div>
                                </div>
                                <p className="text-2xl text-[#fd0] text-[20px] font-light">16 days</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-[#fd0] mb-1 text-[14px] font-light">tools</h3>

                                    <div className="flex-1 h-[1px] bg-[#fd0]"></div>
                                </div>
                                <p className="text-2xl text-[#fd0] text-[20px] font-light">Framer</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-[#fd0] mb-1 text-[14px] font-light">category</h3>

                                    <div className="flex-1 h-[1px] bg-[#fd0]"></div>
                                </div>
                                <p className="text-2xl text-[#fd0] text-[20px] font-light">Personal Project</p>
                            </div>

                        </div>

                    </div>


                </div>
                <div className="px-6 sm:px-10 lg:px-14 mt-20 lg:mt-30">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#fd0] text-sm tracking-widest">
                            01
                        </span>


                        <div className="flex-1 h-[1px] bg-[#fd0]"></div>
                    </div>
                    <img
                        src="https://framerusercontent.com/images/T98lUciooLglyWU2yZQkrIELo0.png?width=2048&height=1536"
                        alt="preview"
                        className="w-full h-[770px] object-cover"
                    />

                    <p className='w-[250px] pt-4 text-[#ffffff80]' >A user engages in a personalized meditation session on Zengo, guided by AI algorithms tailored to their unique preferences and goals.</p>
                </div>

                <div className="px-6 sm:px-10 lg:px-14 mt-20 lg:mt-30">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#fd0] text-sm tracking-widest">
                            02
                        </span>

                        <div className="flex-1 h-[1px] bg-[#fd0]"></div>
                    </div>
                    <img
                        src="https://framerusercontent.com/images/ij9RqZFXpaPZe9XXtWuun1Zpi8.png?width=2048&height=1536"
                        alt="preview"
                        className="w-full h-[670px] object-cover"
                    />

                    <p className='w-[250px] pt-4 text-[#ffffff80]'>Zengo's progress tracking feature allows users to visualize their meditation journey, providing valuable insights and motivation for continuous growth.</p>
                </div>


                <div className="px-6 sm:px-10 lg:px-14 mt-20 lg:mt-30">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#fd0] text-sm tracking-widest">
                            03
                        </span>

                        <div className="flex-1 h-[1px] bg-[#fd0]"></div>
                    </div>
                    <img
                        src="https://framerusercontent.com/images/UNAGgqrOPhmfic6ft9XHKQIJXQ.png?width=2048&height=1536"
                        alt="preview"
                        className="w-full h-[700px] object-cover"
                    />

                    <p className='w-[260px] pt-4 text-[#ffffff80]'>A satisfied user reflects on the positive impact Zengo has had on their mindfulness practice, crediting the app's AI customization and progress tracking for their enhanced well-being.</p>
                </div>


                <div className="px-6 sm:px-10 lg:px-14 py-20 sm:py-24 lg:py-32 bg-black">
                    {/* <p className="text-white/40 mb-10 text-sm tracking-widest">see also</p> */}

                    <div className="flex items-center gap-2 mb-3 pb-5">
                        <span className="text-[#fff] text-sm tracking-widest">
                            see also
                        </span>

                        <div className="flex-1 h-[1px] bg-[#fff]"></div>
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
                                    <p className="text-sm  text-[#1f00ff] ">
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

                        <a href="#" className="group w-full">
                            <div className="flex items-center justify-between bg-[#2e3538]  overflow-hidden p-3">

                                 <div className="w-[120px] sm:w-[180px] md:w-[260px]">
                                    <img
                                        src="https://framerusercontent.com/images/v2Cxh5gAzf3y5i5rvV7stpdreY.jpg?width=1920&height=1440"
                                        className="w-full h-[90px] sm:h-[120px] md:h-auto md:aspect-[2/0.6] object-cover"
                                    />
                                </div>

                                <div className="flex-1 px-6">
                                    <p className="text-sm text-green-400/60">
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

                        {/* card 4 */}

                        <a href="#" className="group w-full">
                            <div className="flex items-center justify-between bg-[#333]   overflow-hidden p-3">


                                 <div className="w-[120px] sm:w-[180px] md:w-[260px]">
                                    <img
                                        src="https://framerusercontent.com/images/ju62vkEreDoQkpYoSbxnVoVcnzo.jpg?width=1920&height=1440"
                                        className="w-full h-[90px] sm:h-[120px] md:h-auto md:aspect-[2/0.6] object-cover"
                                    />
                                </div>

                                <div className="flex-1 px-6 ">
                                    <p className="text-[#949494] text-sm">
                                        Brending and Identify
                                    </p>
                                    <h3 className="text-[#949494] text-xl md:text-2xl ">
                                        roverride
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

