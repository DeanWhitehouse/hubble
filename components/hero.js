import Image from 'next/image'
import Button from './button';
import GhostButton from './button-ghost';
import HeroImage from '../public/images/hero.png'

export default function Hero() {
  return (
    <section className="relative">
      <div className="z-10 absolute -top-16 right-0 -scale-y-100 transform rotate-180 md:rotate-0 md:scale-y-100 md:bottom-0 md:top-auto md:left-0 md:right-auto w-[880px] h-[500px] bg-contain bg-no-repeat bg-[url('/images/hero-cluster.png')]" />
      <div className="overflow-hidden">
        <div className="mx-auto max-w-6xl relative">
          <div className="grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 lg:grid-cols-12 lg:pt-0">
            <div className="pb-4 sm:overflow-visible sm:pb-0 lg:col-span-7 z-10 px-4 md:px-0">
              <h1 className="text-5xl pr-16 md:pr-0 md:text-[4rem] leading-none font-serif font-medium mb-8">Asset intelligence at the speed of business</h1>
              <p className="text-[1.375rem] font-serif md:pr-12">Built for enterprise teams, Hubble’s Technology Intelligence Platform helps you construct a clear map of your technology asset domain and drive digital transformation.</p>

              <div className="grid grid-cols-12 gap-4 mt-12 md:w-3/4">
                <div className="col-span-12 md:col-span-7">
                  <Button href="#">Get Started</Button>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <GhostButton href="#">Why hubble?</GhostButton>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 z-0">
              <div className="w-[35rem] sm:w-auto -mt-8 md:mt-0 lg:w-[78rem]">
                <div className="relative -left-[160px] md:-left-[300px] md:-top-[30px]">
                  <Image
                    src={HeroImage}
                    alt="Screenshot of Hubble Platform"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
