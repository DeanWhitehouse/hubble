import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from 'next/link';

export default function LinkBlock({ href, delay = 0, children }) {
  const className = 'block text-center font-bold bg-hubble-brand leading-tight py-4 px-10 rounded-md bg-opacity-100 transition-colors hover:bg-opacity-50';

  const animation = {
    visible: { opacity: 1, y: 0, transition: {duration: .5, delay: delay} },
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
  return (
    <motion.div 
      variants={animation}
      ref={ref}
      initial="hidden"
      animate={control}
     >
      <div className="rounded-[10px] bg-gradient-to-r from-hubble-mist/10 via-hubble-mist/20 to-hubble-mist/10 flex p-0.5 relative overflow-hidden">
        <Link href={href}>
          <a className="block group">
            {/* Padding adjusted from design to achieve desired line structure */}
            <div className="bg-hubble-dark px-6 py-8 overflow-hidden rounded-[8px]">
              <div className="z-10 transition-opacity absolute opacity-0 top-0 right-0 bottom-0 left-0 bg-cover bg-no-repeat bg-right-top mix-blend-soft-light bg-[url('/images/box-hover.png')] group-hover:opacity-20" />
              <div className="z-0 absolute transition-all ease-in duration-300 w-60 h-60 blur-[77.6471px] -top-72 -right-72 bg-radial opacity-50 group-hover:-top-1/2 group-hover:-right-1/2" />

              <svg className="absolute top-8 transition-all ease-in duration-400 -right-full group-hover:right-6" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.28125 1.29688C9.53906 1.06771 9.78255 1.06771 10.0117 1.29688L19.0781 10.4062C19.3359 10.6354 19.3359 10.8646 19.0781 11.0938L10.0117 20.2031C9.78255 20.4323 9.53906 20.4323 9.28125 20.2031L8.98047 19.8594C8.7513 19.6302 8.7513 19.3867 8.98047 19.1289L16.6719 11.4805H0.515625C0.171875 11.4805 0 11.3086 0 10.9648V10.5352C0 10.1914 0.171875 10.0195 0.515625 10.0195H16.6719L8.98047 2.37109C8.7513 2.11328 8.7513 1.86979 8.98047 1.64062L9.28125 1.29688Z" fill="white"/>
              </svg>

              <div className="relative z-20">
                { children }
              </div>
            </div>
          </a>
        </Link>
      </div>
     </motion.div>
  )
}
