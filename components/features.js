import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import FeatureItem from './feature-item'
import Risk from './graphics/risk'
import Context from './graphics/context'
import Value from './graphics/value'

export default function Features() {
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
  return (
    <section className="max-w-6xl mx-auto my-[7.5rem] font-serif mb-[150px]">
      <motion.h2
          variants={titleAnimation}
          ref={ref}
          initial="hidden"
          animate={control}
          className="text-center text-white text-[32px] md:text-5xl mb-12 md:mb-[5.5rem] max-w-3xl mx-auto leading-[1.05] font-medium"
       >
         Build a single source of truth and drive transformation
       </motion.h2>

       {/* Not ideal, would rather they stack and animate as a whole */}
       <div>
         <ul>
            <FeatureItem>
              <svg className="absolute hidden md:block top-0 right-0" width="653" height="251" viewBox="0 0 653 251" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5" filter="url(#filter0_f_132_7031)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M426.984 -472.818C505.84 -464.183 588.056 -441.354 635.107 -377.521C678.001 -319.329 644.122 -241.501 650.554 -169.508C658.267 -83.1879 739.357 20.216 675.922 79.299C611.98 138.854 513.4 51.8135 426.984 38.7231C363.569 29.1167 289.159 58.9042 243.575 13.8056C197.917 -31.3659 227.37 -106.222 216.511 -169.508C201.053 -259.593 115.527 -353.607 167.644 -428.712C219.596 -503.579 336.368 -482.741 426.984 -472.818Z" fill="url(#paint0_radial_132_7031)"/>
                </g>
                <defs>
                  <filter id="filter0_f_132_7031" x="0.451553" y="-633.748" width="850.097" height="884.221" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="75.2742" result="effect1_foregroundBlur_132_7031"/>
                  </filter>
                  <radialGradient id="paint0_radial_132_7031" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(91.7715 -170.156) rotate(27.1615) scale(464.859 437.292)">
                    <stop stopColor="#E359FF"/>
                    <stop offset="1" stopColor="#FB3D5D"/>
                  </radialGradient>
                </defs>
              </svg>

              <div className="grid grid-cols-12 items-center">
                <div className="col-span-12 md:col-span-6">
                  <Risk className="w-full h-auto" />
                </div>

                <div className="relative z-20 col-span-12 md:col-span-6 p-8 md:py-0 md:px-20">
                  <h4 className="uppercase text-sm flex items-center gap-2 text-hubble-red font-medium mb-5">
                    <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.9102 10.7104C16.2669 11.3537 15.5052 11.6753 14.625 11.6753C13.7448 11.6753 12.9831 11.3537 12.3398 10.7104C11.6966 10.0672 11.375 9.3055 11.375 8.42529C11.375 8.42529 11.375 8.40837 11.375 8.37451C11.375 8.34066 11.375 8.3068 11.375 8.27295C11.6458 8.37451 11.9336 8.42529 12.2383 8.42529C12.8815 8.42529 13.4401 8.18831 13.9141 7.71436C14.388 7.2404 14.625 6.6818 14.625 6.03857C14.625 5.73389 14.5742 5.44613 14.4727 5.17529C14.5065 5.17529 14.5234 5.17529 14.5234 5.17529C14.5573 5.17529 14.5911 5.17529 14.625 5.17529C15.5052 5.17529 16.2669 5.49691 16.9102 6.14014C17.5534 6.78337 17.875 7.54508 17.875 8.42529C17.875 9.3055 17.5534 10.0672 16.9102 10.7104ZM29.0977 9.28857C29.1992 9.52555 29.25 9.77946 29.25 10.0503C29.25 10.3211 29.1992 10.575 29.0977 10.812C27.6758 13.5203 25.6784 15.7039 23.1055 17.3628C20.5326 18.9878 17.7057 19.8003 14.625 19.8003C12.5938 19.8003 10.6302 19.4279 8.73438 18.6831C6.8724 17.9045 5.21354 16.855 3.75781 15.5347C2.30208 14.1805 1.10026 12.6063 0.152344 10.812C0.0507812 10.575 0 10.3211 0 10.0503C0 9.77946 0.0507812 9.52555 0.152344 9.28857C1.57422 6.58024 3.57161 4.41357 6.14453 2.78857C8.71745 1.12972 11.5443 0.300293 14.625 0.300293C17.7057 0.300293 20.5326 1.12972 23.1055 2.78857C25.6784 4.41357 27.6758 6.58024 29.0977 9.28857ZM19.1953 3.85498C17.9427 2.56852 16.4193 1.92529 14.625 1.92529C12.8307 1.92529 11.2904 2.56852 10.0039 3.85498C8.7513 5.10758 8.125 6.63102 8.125 8.42529C8.125 10.2196 8.7513 11.7599 10.0039 13.0464C11.2904 14.299 12.8307 14.9253 14.625 14.9253C16.4193 14.9253 17.9427 14.299 19.1953 13.0464C20.4818 11.7599 21.125 10.2196 21.125 8.42529C21.125 6.63102 20.4818 5.10758 19.1953 3.85498ZM7.00781 15.9917C9.34375 17.4474 11.8828 18.1753 14.625 18.1753C17.3672 18.1753 19.8893 17.4474 22.1914 15.9917C24.5273 14.536 26.3385 12.5555 27.625 10.0503C27.0156 8.83154 26.0677 7.59587 24.7812 6.34326C23.4948 5.0568 22.2422 4.10889 21.0234 3.49951C22.1745 4.95524 22.75 6.59717 22.75 8.42529C22.75 10.6597 21.9544 12.5724 20.3633 14.1636C18.7721 15.7547 16.8594 16.5503 14.625 16.5503C12.3906 16.5503 10.4779 15.7547 8.88672 14.1636C7.29557 12.5724 6.5 10.6597 6.5 8.42529C6.5 6.59717 7.07552 4.95524 8.22656 3.49951C7.00781 4.10889 5.75521 5.0568 4.46875 6.34326C3.18229 7.59587 2.23438 8.83154 1.625 10.0503C2.91146 12.5555 4.70573 14.536 7.00781 15.9917Z" fill="#FB3D5D"/>
                    </svg>
                    see
                  </h4>
                  <h3 className="text-white text-3xl mb-8">Eliminate risk</h3>
                  <p className="text-lg pb-20 mb:pb-0">We provide visibility into your organization’s environment. Giving you knowledge you don’t currently have — a single source of truth to eliminate risk.</p>
                </div>
              </div>
            </FeatureItem>

            <FeatureItem delay="0.25">
              <svg className="absolute hidden md:block top-0 right-0" width="779" height="289" viewBox="0 0 779 289" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5" filter="url(#filter0_f_132_15815)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M332.861 68.082C260.767 35.6189 188.767 -6.90088 159.192 -63.0844C132.23 -114.303 181.881 -151.509 192.33 -198.88C204.858 -255.679 152.373 -348.362 225.494 -363.671C299.199 -379.102 371.862 -290.686 450.037 -252.835C507.405 -225.058 584.125 -218.224 616.614 -174.297C649.155 -130.298 604.342 -93.4393 600.045 -50.0121C593.93 11.8048 652.733 100.118 586.574 129.361C520.624 158.51 415.708 105.387 332.861 68.082Z" fill="url(#paint0_radial_132_15815)"/>
                </g>
                <defs>
                  <filter id="filter0_f_132_15815" x="0.720482" y="-516.008" width="778.209" height="804.319" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="75.2742" result="effect1_foregroundBlur_132_15815"/>
                  </filter>
                  <radialGradient id="paint0_radial_132_15815" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(717.07 -6.82264) rotate(-141.027) scale(437.204 310.524)">
                    <stop stopColor="#E359FF"/>
                    <stop offset="1" stopColor="#8655FF"/>
                  </radialGradient>
                </defs>
              </svg>

              <div className="grid grid-cols-12 items-center">
                <div className="col-span-12 md:col-span-6">
                  <Context className="w-full h-auto" />
                </div>

                <div className="relative z-20 col-span-12 md:col-span-6 p-8 md:py-0 md:px-20">
                  <h4 className="uppercase text-sm flex items-center gap-2 text-hubble-purple font-medium mb-5">
                    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.8984 11.8628C27.0495 12.8107 27.625 14.0125 27.625 15.4683C27.625 16.2808 27.4219 17.0425 27.0156 17.7534C26.6094 18.4644 26.0508 19.0399 25.3398 19.48C25.4076 20.6987 25.0013 21.7482 24.1211 22.6284C23.2747 23.5086 22.2422 23.9318 21.0234 23.8979C20.7865 24.3719 20.4648 24.7782 20.0586 25.1167C19.6862 25.4552 19.2461 25.7091 18.7383 25.8784C18.2643 26.0815 17.7734 26.1831 17.2656 26.1831C15.8099 26.1831 14.6589 25.5907 13.8125 24.4058C12.9661 25.5907 11.8151 26.1831 10.3594 26.1831C9.58073 26.1831 8.85286 25.98 8.17578 25.5737C7.4987 25.1675 6.97396 24.6089 6.60156 23.8979C5.38281 23.9318 4.35026 23.5086 3.50391 22.6284C2.65755 21.7482 2.2513 20.6987 2.28516 19.48C1.57422 19.0399 1.01562 18.4644 0.609375 17.7534C0.203125 17.0425 0 16.2808 0 15.4683C0 14.0125 0.575521 12.8107 1.72656 11.8628C1.35417 10.644 1.42188 9.56071 1.92969 8.61279C2.47135 7.66488 3.09766 6.97087 3.80859 6.53076C3.74089 5.54899 4.02865 4.66878 4.67188 3.89014C5.34896 3.07764 6.19531 2.62061 7.21094 2.51904C7.51562 1.80811 7.98958 1.24951 8.63281 0.843262C9.27604 0.403158 9.98698 0.183105 10.7656 0.183105C12.0182 0.183105 13.0339 0.690918 13.8125 1.70654C14.5911 0.690918 15.6068 0.183105 16.8594 0.183105C17.3672 0.183105 17.8581 0.284668 18.332 0.487793C18.806 0.657064 19.2122 0.927897 19.5508 1.30029C19.9232 1.63883 20.2109 2.04508 20.4141 2.51904C21.4297 2.62061 22.2591 3.07764 22.9023 3.89014C23.5794 4.66878 23.8672 5.54899 23.7656 6.53076C24.5104 6.97087 25.1367 7.66488 25.6445 8.61279C26.1862 9.56071 26.2708 10.644 25.8984 11.8628ZM13 21.9175V4.04248C13 3.63623 12.8984 3.26383 12.6953 2.92529C12.4922 2.58675 12.2214 2.31592 11.8828 2.11279C11.5443 1.90967 11.1719 1.80811 10.7656 1.80811C10.3932 1.80811 10.0547 1.87581 9.75 2.01123C9.47917 2.11279 9.25911 2.29899 9.08984 2.56982C8.92057 2.8068 8.78516 3.04378 8.68359 3.28076C8.61589 3.48389 8.53125 3.77165 8.42969 4.14404L7.76953 4.09326C7.1263 4.09326 6.56771 4.31331 6.09375 4.75342C5.65365 5.19352 5.43359 5.71826 5.43359 6.32764C5.43359 6.46305 5.51823 6.85238 5.6875 7.49561C5.14583 7.69873 4.70573 7.91878 4.36719 8.15576C4.02865 8.35889 3.74089 8.66357 3.50391 9.06982C3.26693 9.47607 3.14844 9.96696 3.14844 10.5425C3.14844 10.9826 3.36849 11.6427 3.80859 12.5229C3.33464 12.7938 2.97917 13.0138 2.74219 13.1831C2.50521 13.3524 2.2513 13.6401 1.98047 14.0464C1.74349 14.4526 1.625 14.9266 1.625 15.4683C1.625 16.2808 1.84505 16.9071 2.28516 17.3472C2.72526 17.7873 3.33464 18.1597 4.11328 18.4644C3.97786 19.1076 3.91016 19.5138 3.91016 19.6831C3.91016 20.394 4.16406 21.0034 4.67188 21.5112C5.21354 22.019 5.83984 22.2729 6.55078 22.2729C6.65234 22.2729 7.02474 22.2222 7.66797 22.1206C7.9388 22.8993 8.26042 23.4917 8.63281 23.8979C9.03906 24.3381 9.61458 24.5581 10.3594 24.5581C11.1042 24.5581 11.7305 24.3042 12.2383 23.7964C12.7461 23.2886 13 22.6623 13 21.9175ZM23.5117 18.4644C24.0195 18.2612 24.4258 18.0581 24.7305 17.855C25.069 17.6519 25.3568 17.3472 25.5938 16.9409C25.8646 16.5347 26 16.0438 26 15.4683C26 15.1974 25.9661 14.9435 25.8984 14.7065C25.8646 14.4696 25.7799 14.2664 25.6445 14.0972C25.5091 13.894 25.3906 13.7248 25.2891 13.5894C25.1875 13.4539 25.0352 13.3185 24.832 13.1831C24.6289 13.0138 24.4596 12.8953 24.3242 12.8276C24.2227 12.7599 24.0534 12.6584 23.8164 12.5229C24.2565 11.6089 24.4766 10.9487 24.4766 10.5425C24.4766 9.72998 24.2565 9.10368 23.8164 8.66357C23.3763 8.22347 22.75 7.83415 21.9375 7.49561C22.1068 6.85238 22.1914 6.46305 22.1914 6.32764C22.1914 5.71826 21.9544 5.19352 21.4805 4.75342C21.0404 4.31331 20.4987 4.09326 19.8555 4.09326L19.1953 4.14404C19.026 3.39925 18.7721 2.82373 18.4336 2.41748C18.0951 2.01123 17.5703 1.80811 16.8594 1.80811C16.25 1.80811 15.7253 2.02816 15.2852 2.46826C14.8451 2.90837 14.625 3.43311 14.625 4.04248V21.9175C14.625 22.6623 14.8789 23.2886 15.3867 23.7964C15.8945 24.3042 16.5208 24.5581 17.2656 24.5581C18.0104 24.5581 18.569 24.3381 18.9414 23.8979C19.3477 23.4917 19.6862 22.8993 19.957 22.1206C20.6003 22.2222 20.9727 22.2729 21.0742 22.2729C21.7852 22.2729 22.3945 22.019 22.9023 21.5112C23.444 21.0034 23.7148 20.394 23.7148 19.6831C23.7148 19.5138 23.6471 19.1076 23.5117 18.4644Z" fill="#E359FF"/>
                    </svg>
                    understand
                  </h4>
                  <h3 className="text-white text-3xl mb-8">Gain context</h3>
                  <p className="text-lg pb-20 mb:pb-0">Unlike other asset management tools, we bring context to existing data — providing the insights needed for a resilient business</p>
                </div>
              </div>
            </FeatureItem>

            <FeatureItem delay="0.5">
              <svg className="absolute hidden md:block top-0 right-0" width="594" height="272" viewBox="0 0 594 272" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5" filter="url(#filter0_f_132_24612)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M685.687 408.692C690.053 487.899 680.966 572.74 625.679 629.589C575.277 681.415 492.959 660.708 422.985 678.818C339.085 700.531 250.321 797.428 181.667 744.499C112.464 691.148 182.227 579.67 181.021 492.278C180.137 428.144 138.591 359.602 175.635 307.261C212.739 254.836 291.402 271.662 352.063 250.608C438.412 220.638 517.187 120.9 599.798 160.045C682.148 199.065 680.671 317.672 685.687 408.692Z" fill="url(#paint0_radial_132_24612)"/>
                </g>
                <defs>
                  <filter id="filter0_f_132_24612" x="0.46228" y="0.518387" width="836.726" height="910.136" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="75.2742" result="effect1_foregroundBlur_132_24612"/>
                  </filter>
                  <radialGradient id="paint0_radial_132_24612" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(667.702 70.63) rotate(157.495) scale(546.8 514.374)">
                    <stop stopColor="#0091FF"/>
                    <stop offset="1" stopColor="#3AFCFC"/>
                  </radialGradient>
                </defs>
              </svg>

              <div className="grid grid-cols-12 items-center">
                <div className="col-span-12 md:col-span-6">
                  <Value className="w-full h-auto" />
                </div>

                <div className="relative z-20 col-span-12 md:col-span-6 p-8 md:py-0 md:px-20">
                  <h4 className="uppercase text-sm flex items-center gap-2 text-hubble-light font-medium mb-5">
                    <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.5 2.05811H9.75C7.51562 2.05811 5.60286 2.85368 4.01172 4.44482C2.42057 6.03597 1.625 7.94873 1.625 10.1831C1.625 12.4175 2.42057 14.3302 4.01172 15.9214C5.60286 17.5125 7.51562 18.3081 9.75 18.3081H19.5C21.7344 18.3081 23.6471 17.5125 25.2383 15.9214C26.8294 14.3302 27.625 12.4175 27.625 10.1831C27.625 7.94873 26.8294 6.03597 25.2383 4.44482C23.6471 2.85368 21.7344 2.05811 19.5 2.05811ZM19.5 0.433105C22.2083 0.433105 24.5104 1.38102 26.4062 3.27686C28.3021 5.17269 29.25 7.47477 29.25 10.1831C29.25 12.8914 28.3021 15.1935 26.4062 17.0894C24.5104 18.9852 22.2083 19.9331 19.5 19.9331H9.75C7.04167 19.9331 4.73958 18.9852 2.84375 17.0894C0.947917 15.1935 0 12.8914 0 10.1831C0 7.47477 0.947917 5.17269 2.84375 3.27686C4.73958 1.38102 7.04167 0.433105 9.75 0.433105H19.5ZM19.5 15.8706C17.7734 15.8706 16.3516 15.2274 15.2344 13.9409C14.2865 12.8576 13.8125 11.605 13.8125 10.1831C13.8125 8.62581 14.3711 7.28857 15.4883 6.17139C16.6055 5.0542 17.9427 4.49561 19.5 4.49561C21.0573 4.49561 22.3945 5.0542 23.5117 6.17139C24.6289 7.28857 25.1875 8.62581 25.1875 10.1831C25.1875 11.7404 24.6289 13.0776 23.5117 14.1948C22.3945 15.312 21.0573 15.8706 19.5 15.8706Z" fill="#3AFCFC"/>
                    </svg>
                    Enable
                  </h4>
                  <h3 className="text-white text-3xl mb-8">Unlock value</h3>
                  <p className="text-lg pb-20 mb:pb-0">Turn insights into action. Unlock value and drive digital transformation across your business with asset intelligence workflows.</p>
                </div>
              </div>
            </FeatureItem>
         </ul>
       </div>
    </section>
  )
}
