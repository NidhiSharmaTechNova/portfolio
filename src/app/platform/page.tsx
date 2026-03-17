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
                    
                    <h1 className="pt-16 pl-6 sm:pl-10 md:pl-14 text-[40px] sm:text-[60px md:text-[80px] font-medium tracking-[-1px]">
                        bizz buzz
                    </h1>


                  
                    <div className="flex justify-center mt-20 sm:mt-24 md:mt-32 px-6">
                        <p className="max-w-4xl text-[22px] sm:text-[30px] md:text-[42px leading-tight tracking-[-1px]">
                            A social media platform for entrepreneurs to network and collaborate
                        </p>
                    </div>
                </div>

                <div className=" px-6 sm:px-10 md:px-14">

                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#ff6200] text-sm tracking-widest">
                            00
                        </span>

                        <div className="flex-1 h-[1px] bg-[#ff6200]"></div>
                    </div>

                    <img
                        src="https://framerusercontent.com/images/cak7U7dY4h898WLby7suvljdOcA.jpg?width=1920&height=29"
                        alt="preview"
                        className="w-full h-[670px] object-cover"

                    />
                </div>



                
                <div className="mx-auto px-6 sm:px-10 md:px-14 py-20 md:py-32 w-full
grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* LEFT */}
                    <div>
                        <h2 className="text-orange-500 text-[20px] mb-6">problem</h2>

                        <p className="text-white/70 text-[20px] leading-relaxed max-w-[370px]">
                            Entrepreneurs face numerous challenges in today's competitive business landscape.
                            Limited access to a centralized platform for networking and collaboration hinders
                            their ability to connect, share ideas, and form strategic partnerships.

                            Existing social media platforms lack a dedicated space tailored to the unique needs
                            of entrepreneurs, making it difficult for them to harness the full potential of their
                            networks and scale their ventures effectively.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div>
                        <h2 className="text-orange-500 text-xl mb-6">solution</h2>

                        <p className="text-white/70 text-lg leading-relaxed max-w-[370px]">
                            Bizz Buzz is a groundbreaking social media platform designed specifically for
                            entrepreneurs, addressing the aforementioned challenges head-on.

                            It offers a range of features, including industry-specific groups, resource sharing,
                            project collaboration tools, and tailored matchmaking algorithms, fostering meaningful
                            connections and facilitating valuable collaborations within the entrepreneurial community.
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
                                {/* <p className="text-white text-[32px] leading-tight"> */}
                                <p className="text-white text-[22px] sm:text-[26px] md:text-[32px] leading-tight">
                                    From its inception, Bizz Buzz aimed to revolutionize the way entrepreneurs network and collaborate. Inspired by the struggles faced by entrepreneurs in their personal journeys, the platform's founders embarked on a mission to create a solution that would empower entrepreneurs worldwide. They envisioned a space where like-minded individuals could come together, share experiences, exchange knowledge, and forge partnerships that transcend traditional boundaries.
                                </p>
                                <img src="https://framerusercontent.com/images/cak7U7dY4h898WLby7suvljdOcA.jpg?width=1920&height=29"
                                    alt="preview"
                                    className="w-full h-[260px] sm:h-[320px] md:h-[670px] object-cover pt-15" />

                                <p className="text-[#ffffff80] text-[20px] pt-10 max-w-[760px]">Bizz Buzz's journey began with a small team of dedicated individuals who believed in the power of entrepreneurship and the impact it could have on the world. They meticulously analyzed the pain points faced by entrepreneurs, conducting in-depth market research and engaging with the community to understand their needs. Armed with this knowledge, they set out to build a social media platform that would bridge the gap between entrepreneurs and provide them with a supportive ecosystem.</p>

                                <p className="text-[#ffffff80] text-[20px] pt-5 max-w-[760px]">Throughout the development process, the team worked tirelessly to ensure that Bizz Buzz catered to the unique requirements of entrepreneurs. They incorporated cutting-edge technology, intuitive user interfaces, and robust security measures to create a platform that would be both user-friendly and safe. Their vision was to empower entrepreneurs to connect with potential collaborators, access valuable resources, and gain exposure to new opportunities, ultimately propelling their businesses to new heights.</p>

                                <p ref={lastParaRef} className="text-[#ffffff80] text-[20px] pt-5 max-w-[760px]">Since its launch, Bizz Buzz has witnessed a remarkable journey of growth and success. Entrepreneurs from various industries have flocked to the platform, drawn by its vibrant and supportive community. Users have harnessed the power of Bizz Buzz to forge strategic partnerships, discover innovative solutions, and tap into a vast network of like-minded individuals. Through its diverse range of features and user-centric approach, Bizz Buzz continues to empower entrepreneurs worldwide, fueling their dreams and driving economic growth.</p>

                            </div>
                        </div>

                        {/* RIGHT (Scrolling Content) */}
                       
                        <div ref={rightRef} className="flex flex-col gap-8 lg:gap-10 mt-10 lg:mt-0">

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-[#ff6200] mb-1 text-[14px] font-light">year</h3>

                                    <div className="flex-1 h-[1px] bg-[#ff6200]"></div>
                                </div>
                                <p className="text-2xl text-[#ff6200] text-[20px] font-light">2023</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-[#ff6200] mb-1 text-[14px] font-light">timeframe</h3>

                                    <div className="flex-1 h-[1px] bg-[#ff6200]"></div>
                                </div>
                                <p className="text-2xl text-[#ff6200] text-[20px] font-light">16 days</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-[#ff6200] mb-1 text-[14px] font-light">tools</h3>

                                    <div className="flex-1 h-[1px] bg-[#ff6200]"></div>
                                </div>
                                <p className="text-2xl text-[#ff6200] text-[20px] font-light">Framer</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-[#ff6200] mb-1 text-[14px] font-light">category</h3>

                                    <div className="flex-1 h-[1px] bg-[#ff6200]"></div>
                                </div>
                                <p className="text-2xl text-[#ff6200] text-[20px] font-light">Personal Project</p>
                            </div>

                        </div>

                    </div>


                </div>
                
                <div className="px-6 sm:px-10 lg:px-14 mt-20 lg:mt-30">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#ff6200] text-sm tracking-widest">
                            01
                        </span>


                        <div className="flex-1 h-[1px] bg-[#ff6200]"></div>
                    </div>
                    <img
                        src="https://framerusercontent.com/images/HIEeaOIwQ8XrhlrLfyEHzZFo4.png?scale-down-to=2048&width=2560&height=1772"
                        alt="preview"
                        className="w-full h-[670px] object-cover"
                    />

                    <p className='w-[250px] pt-4 text-[#ffffff80]' >Entrepreneurs engaging in a lively discussion during a Bizz Buzz networking event.</p>
                </div>


                <div className="px-6 sm:px-10 lg:px-14 mt-20 lg:mt-30">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#ff6200] text-sm tracking-widest">
                            02
                        </span>

                        <div className="flex-1 h-[1px] bg-[#ff6200]"></div>
                    </div>
                    <img
                        src="https://framerusercontent.com/images/QYq4MflBOuNeL4UKpMmK5Ryr4Y.png?scale-down-to=2048&width=2560&height=1772"
                        alt="preview"
                        className="w-full h-[670px] object-cover"
                    />

                    <p className='w-[250px] pt-4 text-[#ffffff80]'>A user shares valuable insights and experiences with fellow entrepreneurs through Bizz Buzz's industry-specific groups.</p>
                </div>


                <div className="px-6 sm:px-10 lg:px-14 mt-20 lg:mt-30">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#ff6200] text-sm tracking-widest">
                            03
                        </span>

                        <div className="flex-1 h-[1px] bg-[#ff6200]"></div>
                    </div>
                    <img
                        src="https://framerusercontent.com/images/UXVO6nUmCpOneaLr4eUrEqAni8.png?scale-down-to=2048&width=2560&height=1772"
                        alt="preview"
                        className="w-full h-[700px] object-cover"
                    />

                    <p className='w-[250px] pt-4 text-[#ffffff80]'>Bizz Buzz's advanced matchmaking algorithms help entrepreneurs discover potential collaborators based on their specific needs and expertise.</p>
                </div>


              


                <div className="px-6 sm:px-10 lg:px-14 py-20 sm:py-24 lg:py-32 bg-black">
                   

                    <div className="flex items-center gap-2 mb-3 pb-5">
                        <span className="text-[#5c5a5a] text-xs sm:text-sm  tracking-widest">
                            see also
                        </span>

                        <div className="flex-1 h-[1px] bg-[#5c5a5a]"></div>
                    </div>


                    <div className="flex flex-col gap-6">

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
                                <div className="flex-1 px-6 sm:px-6">
                                  
                                
                                    <p className="text-[11px] sm:text-sm text-[#1f00ff]">
Branding and Identity
                                    </p>
                                    
                                    <h3 className="text-[#1f00ff] text-[16px] sm:text-xl md:text-2xl">
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
                                    <p className="text-[11px] sm:text-sm text-[#7be06d]">
                                        UI/UX
                                    </p>
                                    
                                    <h3 className="text-green-300 text-[16px] sm:text-xl md:text-2xl">
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
                                    
                                    <p className="text-[11px] sm:text-sm text-[#3d3b54]">
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



