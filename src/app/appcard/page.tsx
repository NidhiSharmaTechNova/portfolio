"use client"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function page() {
    const divRef = useRef<HTMLDivElement>(null!)
    const leftRef = useRef<HTMLDivElement>(null!)
    const rightRef = useRef<HTMLDivElement>(null!)
    const lastParaRef = useRef<HTMLParagraphElement>(null)

    // useLayoutEffect(() => {
    //     const ctx = gsap.context(() => {
    //         ScrollTrigger.create({
    //             trigger: divRef.current,
    //             start: "top+=30 top",
    //             endTrigger: lastParaRef.current,
    //             end: "bottom bottom",
    //             pin: rightRef.current,
    //             pinSpacing: false,
    //             scrub: true,
    //         });

    //     });

    //     return () => ctx.revert();
    // }, []);

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
        <main className="min-h-screen bg-black text-white flex flex-col">

            {/* <h1 className="pt-20 pl-14 text-[80px] font-medium tracking-[-1px]"> */}
           <div className="h-auto lg:h-[100vh] pb-20">
             <h1 className="pt-16 pl-6 sm:pl-10 md:pl-14 text-[40px] sm:text-[60px] md:text-[80px] font-medium tracking-[-1px]">
                aquaflow
            </h1>

            {/* paragraph */}
            <div className="flex justify-center mt-20 sm:mt-24 md:mt-32 px-6">
                <p className="max-w-4xl text-[22px] sm:text-[30px] md:text-[42px leading-tight tracking-[-1px]">
                    A bottled water delivery service that sources water from the purest mountain streams.
                </p>
            </div>
           </div>


            <div className=" px-6 sm:px-10 md:px-14">

                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#fff] text-sm tracking-widest">
                        00
                    </span>

                    <div className="flex-1 h-[1px] bg-[#fff]"></div>
                </div>

                <img
                    src="https://framerusercontent.com/images/xKHWSysrgFe1ub1CxmcYLHQdpc.jpg?width=1920&height=1440"
                    alt="preview"
                    className="w-full h-[770px] object-cover"
                />
            </div>



            <div className="mx-auto px-6 sm:px-10 md:px-14 py-20 md:py-32 w-full
grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* LEFT */}
                <div>
                    <h2 className="text-[#fff] text-[20px] mb-6">problem</h2>

                    <p className="text-white/70 text-[20px] leading-relaxed max-w-[400px]">
                        Accessing clean and pure drinking water is a significant concern in today's fast-paced world. Many individuals face challenges in finding a reliable source of high-quality water. Existing bottled water options often lack transparency in their sourcing methods, leaving consumers uncertain about the purity and origin of the water they consume. Furthermore, the inconvenience of purchasing and transporting heavy water bottles adds an additional burden to individuals seeking a consistent supply of clean drinking water.
                    </p>
                </div>

                {/* RIGHT */}
                <div>
                    <h2 className="text-[#fff] text-xl mb-6">solution</h2>

                    <p className="text-white/70 text-lg leading-relaxed max-w-[370px]">
                        AquaFlow is a revolutionary bottled water delivery service that addresses the aforementioned challenges by sourcing water directly from the purest mountain streams. By ensuring transparency in the water's origin and providing convenient delivery options, AquaFlow offers a reliable solution for individuals seeking access to clean and refreshing drinking water. Through meticulous quality control processes and a commitment to sustainability, AquaFlow sets a new standard in the bottled water industry.
                    </p>
                </div>

            </div>


            <div ref={divRef} className="relative px-6 sm:px-10 lg:px-14 pb-0 pt-20 sm:pt-24 lg:pt-30">

                <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-14 lg:gap-20">

                    {/* LEFT (Pinned) */}
                    <div className="flex flex-col gap-8 lg:gap-10 mt-10 lg:mt-0 lg:sticky lg:top-32">
                        <div className="max-w-[940px]">
                            <p className="text-white text-[22px] sm:text-[26px] md:text-[32px] leading-tight">
                                Inspired by a deep appreciation for nature's purity and a desire to provide a trustworthy drinking water option, AquaFlow was born. The founders recognized the growing concern among consumers regarding the quality and sourcing of bottled water. They embarked on a mission to offer a solution that would not only provide clean water but also prioritize sustainability and environmental responsibility.
                            </p>
                            <img src="https://framerusercontent.com/images/7BxoPUcOgp62ye7CEB50cib6pc.jpg?scale-down-to=2048&width=2560&height=1920"
                                alt="preview"
                                className="w-full h-[260px] sm:h-[320px] md:h-[670px] object-cover pt-15" />

                            <p className="text-[#ffffff80] text-[20px] pt-10 max-w-[760px]">AquaFlow's journey began by meticulously identifying and partnering with pristine mountain streams known for their pure and refreshing water. Careful attention was given to ensure that the water sources were untouched by pollutants and maintained the highest quality standards. The founders understood that transparency was paramount in building trust with consumers, and they implemented rigorous testing and verification procedures to guarantee the water's purity.</p>

                            <p className="text-[#ffffff80] text-[20px] pt-5 max-w-[760px]">To make AquaFlow easily accessible to consumers, the founders established a user-friendly online platform where individuals could conveniently place orders for home or office delivery. The service offered a range of bottle sizes to cater to different needs, ensuring that consumers could enjoy fresh mountain spring water without the hassle of purchasing and transporting heavy bottles. AquaFlow's commitment to sustainability extended beyond its water sourcing; the company utilized eco-friendly packaging materials and implemented recycling initiatives to minimize its environmental footprint.</p>

                            <p ref={lastParaRef} className="text-[#ffffff80] text-[20px] pt-5 max-w-[760px]">Since its launch, AquaFlow has witnessed a remarkable response from health-conscious individuals seeking a reliable source of pure drinking water. Customers have appreciated the transparency in AquaFlow's sourcing methods, allowing them to drink with confidence and peace of mind. The convenience of doorstep delivery has alleviated the burden of carrying heavy water bottles and provided a consistent supply of refreshing water. AquaFlow's commitment to sustainability has resonated with environmentally conscious consumers, further strengthening the brand's reputation and impact.</p>

                        </div>
                    </div>

                    {/* RIGHT (Scrolling Content) */}
                    <div ref={rightRef} className="flex flex-col gap-8 lg:gap-10 mt-10 lg:mt-0">

                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <h3 className="text-[#fff] mb-1 text-[14px] font-light">year</h3>

                                <div className="flex-1 h-[1px] bg-[#fff]"></div>
                            </div>
                            <p className="text-2xl text-[#fff] text-[20px] font-light">2023</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <h3 className="text-[#fff] mb-1 text-[14px] font-light">timeframe</h3>

                                <div className="flex-1 h-[1px] bg-[#fff]"></div>
                            </div>
                            <p className="text-2xl text-[#fff] text-[20px] font-light">16 days</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <h3 className="text-[#fff] mb-1 text-[14px] font-light">tools</h3>

                                <div className="flex-1 h-[1px] bg-[#fff]"></div>
                            </div>
                            <p className="text-2xl text-[#fff] text-[20px] font-light">Framer</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <h3 className="text-[#fff] mb-1 text-[14px] font-light">category</h3>

                                <div className="flex-1 h-[1px] bg-[#fff]"></div>
                            </div>
                            <p className="text-2xl text-[#fff] text-[20px] font-light">Personal Project</p>
                        </div>

                    </div>

                </div>


            </div>
            <div className="px-6 sm:px-10 lg:px-14 mt-20 lg:mt-30">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#fff] text-sm tracking-widest">
                        01
                    </span>

                    <div className="flex-1 h-[1px] bg-[#fff]"></div>
                </div>
                <img
                    src="https://framerusercontent.com/images/jHjPdY1WxMox8X4lmrr6qyHKcig.png?width=2048&height=1536"
                    alt="preview"
                    className="w-full h-[670px] object-cover"
                />

                <p className='w-[250px] pt-4 text-[#ffffff80]' >AquaFlow's transparent and eco-friendly packaging showcases the purity of its mountain spring water.</p>
            </div>

            <div className="px-6 sm:px-10 lg:px-14 mt-20 lg:mt-30">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#fff] text-sm tracking-widest">
                        02
                    </span>

                    <div className="flex-1 h-[1px] bg-[#fff]"></div>
                </div>
                <img
                    src="https://framerusercontent.com/images/aF9FkF36vNoIPDuzF3w3AAvgM8o.png?width=2048&height=1536"
                    alt="preview"
                    className="w-full h-[670px] object-cover"
                />

                <p className='w-[250px] pt-4 text-[#ffffff80]'>A delighted customer enjoys a glass of AquaFlow's refreshing water, knowing it comes from a pristine mountain stream.</p>
            </div>


            <div className="px-6 sm:px-10 lg:px-14 mt-20 lg:mt-30">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#fff] text-sm tracking-widest">
                        03
                    </span>

                    <div className="flex-1 h-[1px] bg-[#fff]"></div>
                </div>
                <img
                    src="https://framerusercontent.com/images/6LYVOfn4moepgItDoBCBFqhwii4.png?width=2048&height=1536"
                    alt="preview"
                    className="w-full h-[670px] object-cover"
                />

                <p className='w-[250px] pt-4 text-[#ffffff80]'>AquaFlow's convenient home and office delivery service ensures that customers have access to pure mountain spring water without the hassle of carrying heavy bottles.</p>
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

                            <div className="flex-1 px-6 sm:px-6">
                                <p className="text-[11px] sm:text-sm text-black">
                                    UI/UX
                                </p>
                                <h3 className=" text-black  text-[16px] sm:text-xl md:text-2xl">
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
                                <h3 className="text-[#3d3b54] text-[16px] sm:text-xl md:text-2xl">
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

        </main>
    )
}
