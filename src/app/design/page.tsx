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
                        snackify
                    </h1>

                    {/* paragraph */}
                    <div className="flex justify-center mt-20 sm:mt-24 md:mt-32 px-6">
                        <p className="max-w-4xl text-[22px] sm:text-[30px] md:text-[42px leading-tight tracking-[-1px]">
                            A healthy snack subscription service that curates personalized snack boxes based on your dietary preferences
                        </p>
                    </div>
                </div>

                <div className=" px-6 sm:px-10 md:px-14">

                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#2e3538] text-sm tracking-widest">
                            00
                        </span>

                        <div className="flex-1 h-[1px] bg-[#2e3538]"></div>
                    </div>

                    <img
                        src="https://framerusercontent.com/images/v2Cxh5gAzf3y5i5rvV7stpdreY.jpg?width=1920&height=1440"
                        alt="preview"
                        className="w-full h-[670px] object-cover"
                    />
                </div>



                 <div className="mx-auto px-6 sm:px-10 md:px-14 py-20 md:py-32 w-full
grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* LEFT */}
                    <div>
                        <h2 className="text-[#2e3538] text-[20px] mb-6">problem</h2>

                        <p className="text-white/70 text-[20px] leading-relaxed max-w-[370px]">
                            Finding healthy and convenient snack options that align with one's dietary preferences can be a challenge in today's fast-paced lifestyle. Many individuals struggle to navigate the overwhelming array of snack choices available, often resorting to unhealthy options due to limited time and information. Existing snack subscription services often lack personalization, leaving consumers with limited control over the snacks they receive and hindering their ability to maintain a balanced and nourishing diet.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div>
                        <h2 className="text-[#2e3538] text-xl mb-6">solution</h2>

                        <p className="text-white/70 text-lg leading-relaxed max-w-[370px]">
                            Snackify is a game-changing healthy snack subscription service that solves the aforementioned challenges by curating personalized snack boxes tailored to individuals' specific dietary preferences. By leveraging advanced algorithms and an extensive selection of high-quality snacks, Snackify offers a convenient and customized solution for health-conscious consumers. With Snackify, individuals can discover new and exciting snacks that align with their dietary needs, fostering a balanced and enjoyable snacking experience.
                        </p>
                    </div>

                </div>


                <div ref={divRef}   className="relative px-6 sm:px-10 lg:px-14 pb-0 pt-20 sm:pt-24 lg:pt-30">

                    <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-14 lg:gap-20">

                        {/* LEFT (Pinned) */}
                       <div className="flex flex-col gap-8 lg:gap-10 mt-10 lg:mt-0 lg:sticky lg:top-32">
                            <div className="max-w-[940px]">
                               <p className="text-white text-[22px] sm:text-[26px] md:text-[32px] leading-tight">
                                    The idea for Snackify was sparked by the founders' shared passion for healthy living and the recognition of the challenges individuals face in making nutritious snack choices. They understood the importance of snacking in maintaining overall well-being and sought to create a service that would revolutionize the way people approach snacking. The founders envisioned a platform that would empower individuals to snack smartly and conveniently, without compromising on taste or their unique dietary requirements.
                                </p>
                                <img src="https://framerusercontent.com/images/tIJLQaKMWYO3KwzZwjFMsSU0CE.jpg?scale-down-to=2048&width=2560&height=1920"
                                    alt="preview"
                                    className="w-full h-[260px] sm:h-[320px] md:h-[670px] object-cover pt-15" />

                                <p className="text-[#ffffff80] text-[20px] pt-10 max-w-[760px]">Driven by their vision, the founders assembled a team of nutritionists, culinary experts, and tech enthusiasts to develop Snackify. The team delved into extensive research, analyzing various dietary preferences, nutritional needs, and snack options available in the market. Armed with this knowledge, they built a sophisticated algorithm that would curate personalized snack boxes, taking into account individuals' dietary restrictions, preferences, and health goals.</p>

                                <p className="text-[#ffffff80] text-[20px] pt-5 max-w-[760px]">Since its launch, Snackify has witnessed a significant impact on individuals seeking healthier snacking options. Customers have embraced the convenience and personalization offered by Snackify, allowing them to discover a diverse range of nutritious snacks perfectly suited to their needs. The service has not only simplified the snacking experience but also encouraged individuals to explore new flavors, ingredients, and brands they may have otherwise overlooked. With each snack box, Snackify promotes healthy habits, making it easier for customers to maintain a balanced diet and achieve their wellness goals.</p>

                            </div>
                        </div>

                        {/* RIGHT (Scrolling Content) */}
                        <div ref={rightRef} className="flex flex-col gap-8 lg:gap-10 mt-10 lg:mt-0">

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-[#2e3538] mb-1 text-[14px] font-light">year</h3>

                                    <div className="flex-1 h-[1px] bg-[#2e3538]"></div>
                                </div>
                                <p className="text-2xl text-[#2e3538] text-[20px] font-light">2023</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-[#2e3538] mb-1 text-[14px] font-light">timeframe</h3>

                                    <div className="flex-1 h-[1px] bg-[#2e3538]"></div>
                                </div>
                                <p className="text-2xl text-[#2e3538] text-[20px] font-light">16 days</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-[#2e3538] mb-1 text-[14px] font-light">tools</h3>

                                    <div className="flex-1 h-[1px] bg-[#2e3538]"></div>
                                </div>
                                <p className="text-2xl text-[#2e3538] text-[20px] font-light">Framer</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-[#2e3538] mb-1 text-[14px] font-light">category</h3>

                                    <div className="flex-1 h-[1px] bg-[#2e3538]"></div>
                                </div>
                                <p className="text-2xl text-[#2e3538] text-[20px] font-light">Personal Project</p>
                            </div>

                        </div>

                    </div>


                </div>
                <div className="px-6 sm:px-10 lg:px-14 mt-20 lg:mt-30">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#2e3538] text-sm tracking-widest">
                            01
                        </span>


                        <div className="flex-1 h-[1px] bg-[#2e3538]"></div>
                    </div>
                    <img
                        src="https://framerusercontent.com/images/V15DGkuEbiGqfPFAmjUE8ilfCU.png?width=2048&height=1536"
                        alt="preview"
                        className="w-full h-[670px] object-cover"
                    />

                    <p className='w-[250px] pt-4 text-[#ffffff80]' >A Snackify box filled with an assortment of personalized healthy snacks, curated to match individual dietary preferences.</p>
                </div>

                <div className="px-6 sm:px-10 lg:px-14 mt-20 lg:mt-30">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#2e3538] text-sm tracking-widest">
                            02
                        </span>

                        <div className="flex-1 h-[1px] bg-[#2e3538]"></div>
                    </div>
                    <img
                        src="https://framerusercontent.com/images/icAeWqesKZD0D2LCmjTm4zqXs.png?width=2048&height=1536"
                        alt="preview"
                        className="w-full h-[670px] object-cover"
                    />

                    <p className='w-[250px] pt-4 text-[#ffffff80]'>A satisfied customer enjoys a delicious and nourishing snack from their Snackify subscription, knowing it aligns perfectly with their dietary needs.</p>
                </div>


                <div className="px-6 sm:px-10 lg:px-14 mt-20 lg:mt-30">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#2e3538] text-sm tracking-widest">
                            03
                        </span>

                        <div className="flex-1 h-[1px] bg-[#2e3538]"></div>
                    </div>
                    <img
                        src="https://framerusercontent.com/images/CUfI4XRLekG5oZoSeoQD1jpudWk.png?width=2048&height=1536"
                        alt="preview"
                        className="w-full h-[700px] object-cover"
                    />

                    <p className='w-[250px] pt-4 text-[#ffffff80]'>Snackify's advanced algorithm ensures that each personalized snack box is thoughtfully curated, offering a delightful and nutritious snacking experience.</p>
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
                                    <h3 className=" text-black text-[16px] sm:text-xl md:text-2xl ">
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
                                    <h3 className=" text-[#1f00ff]  text-[16px] sm:text-xl md:text-2xl">
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
                                    <p className="text-[11px] sm:text-sm text-[#949494]">
                                        Brending and Identify
                                    </p>
                                     <h3 className="text-[#949494] text-[16px] sm:text-xl md:text-2xl">
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




