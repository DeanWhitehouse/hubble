import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function FeatureItem({ delay = 0, children }) {
  const className = 'block text-center font-bold bg-hubble-brand leading-tight py-4 px-10 rounded-md bg-opacity-100 transition-colors hover:bg-opacity-50';

  const animation = {
    visible: { y: 0, transition: {duration: .5, delay: delay} },
    hidden: { y: 150 },
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
    <motion.li 
      variants={animation}
      ref={ref}
      initial="hidden"
      animate={control}
      className="-mb-20"
     >
      <div className="rounded-[10px] bg-gradient-to-r from-hubble-mist/10 via-hubble-mist/20 to-hubble-mist/10 p-0.5 relative overflow-hidden">
        <div className="bg-hubble-dark overflow-hidden rounded-[8px] relative font-serif">
          <div className="z-10 absolute top-0 right-0 bottom-0 left-0 bg-cover bg-no-repeat bg-right-top mix-blend-soft-light bg-[url('/images/feature-overlay.png')] opacity-20" />
          { children }
        </div>
      </div>
     </motion.li>
  )
}
