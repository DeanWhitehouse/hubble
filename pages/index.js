import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image'
import Hero from '../components/hero'
import LogoCarousel from '../components/logo-carousel'
import LinkBlock from '../components/link-block'
import UseCases from '../components/use-cases'
import Features from '../components/features'

const titleAnimation = {
  visible: { opacity: 1, y: 0, transition: {duration: .5} },
  hidden: { opacity: 0, y: 50 },
}

export default function Home() {

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
    <>
      <Hero />

      <section className="max-w-6xl mx-auto mt-6 mt:my-[7.5rem] -mt-16 px-4 md:px-0 grid grid-cols-1 md:grid-cols-4 gap-6 relative font-serif font-medium">
        <LinkBlock href="#">
          <svg className="mb-3" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5963 39.9707C7.29697 37.3557 8.59477 34.939 10.3876 32.9105C12.1805 30.8821 14.4195 29.2972 16.9286 28.2807C19.4377 27.2641 22.1484 26.8435 24.8476 27.052C27.5467 27.2604 30.1607 28.0923 32.4839 29.4821" stroke="#EAFFFF" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M29 32.9923V27.4671C29 27.2674 29.0718 27.0759 29.1997 26.9347C29.3276 26.7935 29.501 26.7141 29.6818 26.7141L36.5 25C36.5 25 38.5778 25.5224 39.9091 25.8571C41.2404 26.1918 43.3182 26.7141 43.3182 26.7141C43.499 26.7141 43.6724 26.7935 43.8003 26.9347C43.9282 27.0759 44 27.2674 44 27.4671V32.9923C44 40.8988 37.9233 43.5154 36.7131 43.9578C36.5756 44.0141 36.4244 44.0141 36.2869 43.9578C35.0767 43.5154 29 40.8988 29 32.9923Z" fill="#8655FF"/>
            <path d="M33.25 14C33.25 19.1086 29.1086 23.25 24 23.25C18.8914 23.25 14.75 19.1086 14.75 14C14.75 8.89137 18.8914 4.75 24 4.75C29.1086 4.75 33.25 8.89137 33.25 14Z" stroke="#EAFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h4 className="text-xl mb-3">I’m a CISO</h4>
          <p>Report confidently on the state of your assets and data.</p>
        </LinkBlock>

        <LinkBlock href="#" delay={.15}>
          <svg className="mb-3" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5963 39.9707C7.29697 37.3557 8.59477 34.939 10.3876 32.9105C12.1805 30.8821 14.4195 29.2972 16.9286 28.2807C19.4377 27.2641 22.1484 26.8435 24.8476 27.052C27.5467 27.2604 30.1607 28.0923 32.4839 29.4821" stroke="#EAFFFF" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M33.25 14C33.25 19.1086 29.1086 23.25 24 23.25C18.8914 23.25 14.75 19.1086 14.75 14C14.75 8.89137 18.8914 4.75 24 4.75C29.1086 4.75 33.25 8.89137 33.25 14Z" stroke="#EAFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M40.93 29.298L43.0359 29.5989C43.4568 30.3299 43.7812 31.1123 44.001 31.9267L42.7105 33.6449C42.5293 33.8861 42.4348 34.0581 42.4405 34.3597C42.4466 34.681 42.537 35.1253 42.73 35.3822L44.001 37.0744C43.7822 37.8891 43.4577 38.6717 43.0359 39.4022L40.9216 39.7042C40.6177 39.7476 40.4228 39.8042 40.2076 40.0231C39.9856 40.2491 39.7468 40.6239 39.702 40.9375L39.4022 43.0359C38.6712 43.4568 37.8887 43.7812 37.0744 44.001L35.3695 42.7205C35.1207 42.5336 34.8116 42.4515 34.5005 42.4515C34.1894 42.4515 33.8803 42.5336 33.6316 42.7205L31.9267 44.001C31.112 43.7822 30.3294 43.4577 29.5989 43.0359L29.298 40.9295C29.2538 40.6207 29.105 40.3372 28.8844 40.1166C28.6638 39.896 28.3804 39.7472 28.0715 39.7031L25.9652 39.4022C25.5443 38.6712 25.2198 37.8887 25 37.0744L26.2906 35.3562C26.4718 35.115 26.5663 34.943 26.5605 34.6413C26.5544 34.3201 26.464 33.8758 26.2711 33.6189L25 31.9267C25.2188 31.112 25.5433 30.3294 25.9652 29.5989L28.0715 29.298C28.3804 29.2538 28.6638 29.105 28.8844 28.8844C29.105 28.6638 29.2538 28.3804 29.298 28.0715L29.5989 25.9652C30.3299 25.5443 31.1123 25.2198 31.9267 25L33.6316 26.2806C33.8803 26.4674 34.1894 26.5495 34.5005 26.5495C34.8116 26.5495 35.1207 26.4674 35.3695 26.2806L37.0744 25C37.8891 25.2188 38.6717 25.5433 39.4022 25.9652L39.7031 28.0719C39.7472 28.3801 39.9008 28.6639 40.121 28.8841C40.3416 29.1047 40.6212 29.2539 40.93 29.298ZM34.4999 38.9118C36.9365 38.9118 38.9118 36.9365 38.9118 34.4999C38.9118 32.0633 36.9365 30.0881 34.4999 30.0881C32.0633 30.0881 30.0881 32.0633 30.0881 34.4999C30.0881 36.9365 32.0633 38.9118 34.4999 38.9118Z" fill="#8655FF"/>
          </svg>
          <h4 className="text-xl mb-3">I’m a CIO</h4>
          <p>Understand, quantify, and mitigate underlying risk.</p>
        </LinkBlock>

        <LinkBlock href="#" delay={.3}>
          <svg className="mb-3" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5963 39.9707C7.48569 36.6514 9.33263 33.6674 11.9068 31.391C14.4809 29.1145 17.6683 27.6462 21.0714 27.1693C24.4745 26.6924 27.9427 27.228 31.0434 28.7093C34.1441 30.1905 36.7401 32.5519 38.5076 35.4988" stroke="#EAFFFF" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M33.25 14C33.25 19.1086 29.1086 23.25 24 23.25C18.8914 23.25 14.75 19.1086 14.75 14C14.75 8.89137 18.8914 4.75 24 4.75C29.1086 4.75 33.25 8.89137 33.25 14Z" stroke="#EAFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M40 37.3264C42.3649 36.2029 44 33.7924 44 31C44 27.134 40.866 24 37 24C33.134 24 30 27.134 30 31C30 33.7924 31.6351 36.2029 34 37.3264V38.0455C34 38.5726 34.4274 39 34.9545 39H39.0455C39.5726 39 40 38.5726 40 38.0455V37.3264Z" fill="#8655FF"/>
            <path d="M34.375 41.1367H39.625V42.5685C39.625 43.3593 38.984 44.0004 38.1932 44.0004H35.8068C35.016 44.0004 34.375 43.3593 34.375 42.5685V41.1367Z" fill="#8655FF"/>
          </svg>
          <h4 className="text-xl mb-3">I’m a Security Operator</h4>
          <p>Get answers to questions for every investigation.</p>
        </LinkBlock>

        <LinkBlock href="#" delay={.45}>
          <svg className="mb-3" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5963 39.9707C7.3236 37.2563 8.69388 34.757 10.5912 32.6842C12.4886 30.6113 14.8572 29.0259 17.4968 28.0619C20.1364 27.0979 22.9693 26.7838 25.756 27.146C28.5426 27.5083 31.201 28.5363 33.5064 30.1431" stroke="#EAFFFF" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M33.25 14C33.25 19.1086 29.1086 23.25 24 23.25C18.8914 23.25 14.75 19.1086 14.75 14C14.75 8.89137 18.8914 4.75 24 4.75C29.1086 4.75 33.25 8.89137 33.25 14Z" stroke="#EAFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M34.3288 34.6751C36.706 34.6751 38.6332 32.748 38.6332 30.3707C38.6332 27.9935 36.706 26.0664 34.3288 26.0664C31.9516 26.0664 30.0245 27.9935 30.0245 30.3707C30.0245 32.748 31.9516 34.6751 34.3288 34.6751Z" fill="#8655FF"/>
            <path d="M39.698 44.0047C42.0752 44.0047 44.0023 42.0775 44.0023 39.7003C44.0023 37.3231 42.0752 35.396 39.698 35.396C37.3208 35.396 35.3937 37.3231 35.3937 39.7003C35.3937 42.0775 37.3208 44.0047 39.698 44.0047Z" fill="#8655FF"/>
            <path d="M28.945 44.0047C31.3222 44.0047 33.2493 42.0775 33.2493 39.7003C33.2493 37.3231 31.3222 35.396 28.945 35.396C26.5677 35.396 24.6406 37.3231 24.6406 39.7003C24.6406 42.0775 26.5677 44.0047 28.945 44.0047Z" fill="#8655FF"/>
          </svg>
          <h4 className="text-xl mb-3">I’m an IT Operator</h4>
          <p>Understand the entire landscape of your assets.</p>
        </LinkBlock>
      </section>

      <LogoCarousel />
      <Features />
      <UseCases />
    </>
  )
}
