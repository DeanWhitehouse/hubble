import ArrowRightIcon from './icons/arrow-right'
import Marquee from "react-fast-marquee";

export default function Banner() {
  // Not idea approach but done for speed, ideally would develop bespoke code to iterate the amount needed to fill the screen and loop
  // Creates issue on wider screens due to larger/inconsistent gaps 
  const announcements = [...Array(4)].map((number, index) => {
    return(
      <p className="flex items-center gap-4 py-0 p-[50px]" key={index}>
        <span className="font-medium">Latest News</span>
        Hubble announces it’s latest announcement
        <ArrowRightIcon className="w-3" />
      </p>
    )
  })

  return (
    <aside className="bg-hubble-brand bg-opacity-100 transition-colors uppercase hover:bg-opacity-50 leading-none font-serif">
      <a href="#" target="_blank" rel="nofollow noindex" className="block py-2.5" title="Latest News: Hubble announces it’s latest announcement">
        {/* https://www.npmjs.com/package/react-fast-marquee */}
        <Marquee pauseOnHover={false} gradient={false} speed={50}>
          { announcements }
        </Marquee>
      </a>
    </aside>
  )
}
