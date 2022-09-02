import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image'
import ArrowRightIcon from './icons/arrow-right'
import VulnerabilityImage from '../public/images/vulnerability-manage.png'

export default function UseCases() {
  const titleAnimation = {
    visible: { opacity: 1, y: 0, transition: {duration: .5} },
    hidden: { opacity: 0, y: 50 },
  }

  const control = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const contentHeaderAnimation = {
    visible: { opacity: 1, y: 0, transition: {duration: .5, delay: .15} },
    hidden: { opacity: 0, y: 50 },
  }
  const contentHeaderControl = useAnimation()
  const [contentHeaderRef, contentHeaderInView] = useInView()
  useEffect(() => {
    if (contentHeaderInView) {
      contentHeaderControl.start("visible");
    } else {
      contentHeaderControl.start("hidden");
    }
  }, [contentHeaderControl, contentHeaderInView]);

  const contentAnimation = {
    visible: { opacity: 1, y: 0, transition: {duration: .5, delay: .5} },
    hidden: { opacity: 0, y: 50 },
  }
  const contentControl = useAnimation()
  const [contentRef, contentInView] = useInView()
  useEffect(() => {
    if (contentInView) {
      contentControl.start("visible");
    } else {
      contentControl.start("hidden");
    }
  }, [contentControl, contentInView]);

  return (
    <section className="max-w-6xl mx-auto my-[7.5rem] text-center font-serif">
      <motion.h2
          variants={titleAnimation}
          ref={ref}
          initial="hidden"
          animate={control}
          className="text-white text-[32px] px-12 md:px-0 md:text-5xl mb-6 md:mb-[5.5rem] max-w-3xl mx-auto leading-[1.05] font-medium"
       >
         Customize to your use case
       </motion.h2>

       <div className="transform translate-y-1/2 -mt-8 z-20 relative">
         <motion.nav
            variants={contentHeaderAnimation}
            ref={contentHeaderRef}
            initial="hidden"
            animate={contentHeaderControl}
            className="inline-block max-w-full mx-auto md:rounded-[10px] bg-gradient-to-r from-hubble-mist/10 via-hubble-mist/20 to-hubble-mist/10 py-0.5 md:p-0.5"
          >
            <ul className="flex gap-8 md:gap-12 items-center bg-hubble-dark p-1.5 md:rounded-[8px] whitespace-nowrap overflow-auto md:overflow-hidden">
              <li className="rounded-[6px] bg-hubble-brand px-6 py-3">Vulnerability Management</li>
              <li className="cursor-pointer rounded-[6px] transition-colors hover:bg-hubble-brand px-6 py-3">Security Operations</li>
              <li className="cursor-pointer rounded-[6px] transition-colors hover:bg-hubble-brand px-6 py-3">Data Governance</li>
              <li className="cursor-pointer rounded-[6px] transition-colors hover:bg-hubble-brand px-6 py-3">IT Blind Spots</li>
            </ul>
         </motion.nav>
       </div>

       <motion.div
            variants={contentAnimation}
            ref={contentRef}
            initial="hidden"
            animate={contentControl}
            className="rounded-[10px] bg-gradient-to-r from-hubble-mist/10 via-hubble-mist/20 to-hubble-mist/10 p-0.5 relative z-10"
       >
         <div className="bg-hubble-dark overflow-hidden rounded-[8px] pt-8 pb-0 px-8 md:pt-6 relative">
           <div className="z-10 transition-opacity absolute top-0 right-0 bottom-0 left-0 bg-cover bg-no-repeat bg-right-top mix-blend-soft-light bg-[url('/images/use-case-overlay.png')] opacity-20" />
           <div className="z-0 absolute w-60 h-60 blur-[74.2588px] bg-radial opacity-50 -top-1/3 left-1/4"></div>
           <div className="grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 lg:grid-cols-12 lg:pt-0">
             <div className="lg:col-start-2 lg:col-end-7 z-20 text-left">
               <h3 className="text-[2rem] mb-10 font-medium">Vulnerability Management</h3>
               {/* Added padding to achieve text alignment due to differing container widths in build/design, ideally I would update the default containers in Tailwind to match the design */}
               <p className="text-xl pr-8 mb-10">Asset visibility from Hubble can be easily integrated with leading vulnerability management platforms to continuously improve scan coverage and performance.</p>
                <Link href="#">
                  {/* Not ideal transition */}
                  <a className="inline-flex gap-2 items-center font-bold group relative">
                     <span className="relative z-20 transition-all left-0 group-hover:left-3">Learn more</span>
                     <span className="transition-all absolute right-0 top-0 h-full w-[32px] bg-hubble-brand p-2.5 rounded-full z-0 group-hover:w-full" />
                     <span className="bg-hubble-brand p-2.5 rounded-full z-10"><ArrowRightIcon className="w-3" /></span>
                  </a>
                </Link>
             </div>

              <div className="lg:col-span-6 z-10 relative">
                <svg width="912" height="350" className="absolute bottom-0 right-0 z-0" viewBox="0 0 912 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5" filter="url(#filter0_f_1_18818)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M728.865 454.708C735.194 533.782 728.214 618.823 674.354 677.026C625.254 730.086 542.448 711.428 472.944 731.267C389.609 755.055 303.276 854.124 233.33 802.915C162.825 751.297 229.801 638.123 226.428 550.787C223.952 486.695 180.719 419.205 216.454 365.961C252.246 312.632 331.301 327.501 391.422 304.949C477.001 272.846 553.278 171.185 636.834 208.268C720.127 245.233 721.592 363.841 728.865 454.708Z" fill="url(#paint0_radial_1_18818)"/>
                  </g>
                  <defs>
                    <filter id="filter0_f_1_18818" x="0.912552" y="0.242432" width="929.889" height="1017.17" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_18818"/>
                    </filter>
                    <radialGradient id="paint0_radial_1_18818" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(702.499 117.196) rotate(156.073) scale(546.8 514.374)">
                      <stop stopColor="#0091FF"/>
                      <stop offset="1" stopColor="#3AFCFC"/>
                    </radialGradient>
                  </defs>
                </svg>
                <div className="w-full relative z-10">
                  <Image
                    src={VulnerabilityImage}
                    alt="Screenshot of Hubble Platform"
                    layout="responsive"
                    priority={true}
                  />
                </div>
              </div>
            </div>
         </div>
       </motion.div>
    </section>
  )
}
