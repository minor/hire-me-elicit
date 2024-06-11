import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <body className="body-2">
      <div className="page-wrapper">
        <div
          data-w-id="fad2625c-8da2-e6ce-c9fa-a5ec34c573cc"
          data-animation="over-right"
          data-collapse="small"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="nav w-nav"
        >
          <div className="nav-container container">
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a
                href="/welcome"
                aria-current="page"
                className="w-nav-brand w--current"
              >
                <img
                  src="https://cdn.prod.website-files.com/6516f50e7a19045d3d7b12f2/6516f90b0fdb35054731f016_svgexport-1%20(18).svg"
                  loading="lazy"
                  alt=""
                  className="logo"
                />
              </a>
              <div className="nav-left pr-[48rem]"></div>
              <div className="nav-right">
                <a
                  href="/users/auth?show=signin"
                  data-analytics="navbar-signin-clicked"
                  className="nav-link sign-in w-nav-link"
                >
                  Sign In
                </a>
                <a
                  data-analytics="navbar-signup-clicked"
                  href="/users/auth?show=signup"
                  className="button w-inline-block"
                >
                  <div className="text-block-6">Sign Up</div>
                </a>
              </div>
            </nav>
            <div className="w-nav-button">
              <div className="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
        <div className="w-slider-mask">
          <div className="w-slide">
            <div className="hero-section">
              <div className="hero-content">
                <h1 className="hero-heading">
                  Why you should hire me{" "}
                  <span className="bg-gradient-to-r from-rose-500/75 via-fuchsia-500/75 to-indigo-500/75 bg-clip-text text-transparent">
                    as <span className="italic">your</span> intern
                  </span>
                </h1>
                <div className="hero-subheading">
                  cuz i'm him bro like actually.
                  <br />
                </div>
                <div className="buttons-row">
                  <a href="#faq" className="button cta-button w-inline-block">
                    <div className="text-base font-medium">Here's Why</div>
                  </a>
                </div>
              </div>
              <div className="hero-logos">
                <div className="label">
                  Trusted by Researchers At
                  <br />
                </div>
                <div
                  data-delay="4000"
                  data-animation="slide"
                  className="logos-slider w-slider"
                  data-autoplay="false"
                  data-easing="ease"
                  data-hide-arrows="false"
                  data-disable-swipe="false"
                  data-autoplay-limit="0"
                  data-nav-spacing="3"
                  data-duration="500"
                  data-infinite="true"
                >
                  <div className="mask w-slider-mask">
                    <div className="slide w-slide">
                      <div className="logos-row">
                        <div className="logo-block">
                          <img
                            src="https://cdn.prod.website-files.com/6516f50e7a19045d3d7b12f2/6595751c6261700387113567_gov.svg"
                            loading="lazy"
                            width="120"
                            alt=""
                          />
                        </div>
                        <div className="logo-block">
                          <img
                            src="https://cdn.prod.website-files.com/6516f50e7a19045d3d7b12f2/65957355f4393f8cdc9d9d36_bayer.svg"
                            loading="lazy"
                            width="60"
                            alt=""
                          />
                        </div>
                        <div className="logo-block">
                          <img
                            src="https://cdn.prod.website-files.com/6516f50e7a19045d3d7b12f2/6595751b941538c4918f506a_goog.svg"
                            loading="lazy"
                            width="100"
                            alt=""
                          />
                        </div>
                        <div className="logo-block">
                          <img
                            src="https://cdn.prod.website-files.com/6516f50e7a19045d3d7b12f2/65957355535215a416e16e76_stanford.svg"
                            loading="lazy"
                            width="110"
                            alt=""
                          />
                        </div>
                        <div className="logo-block">
                          <img
                            src="https://cdn.prod.website-files.com/6516f50e7a19045d3d7b12f2/6595751c854d356716e99e7e_astraz.svg"
                            loading="lazy"
                            width="130"
                            alt=""
                          />
                        </div>
                        <div className="logo-block">
                          <img
                            src="https://cdn.prod.website-files.com/6516f50e7a19045d3d7b12f2/659573551e941013c0279514_worldbank.svg"
                            loading="lazy"
                            width="80"
                            alt=""
                            className="image-15"
                          />
                        </div>
                        <div className="logo-block">
                          <img
                            src="https://cdn.prod.website-files.com/6516f50e7a19045d3d7b12f2/6595751ffc301bf4ea80b06e_mckin.svg"
                            loading="lazy"
                            width="120"
                            alt=""
                          />
                        </div>
                        <div className="logo-block">
                          <img
                            src="https://cdn.prod.website-files.com/6516f50e7a19045d3d7b12f2/6595751b6e4f88dea4457be8_nasaa.svg"
                            loading="lazy"
                            width="90"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-video-wrapper">
                <div className="green-gradient"></div>
                <div className="w-embed">
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover z-[-100] m-auto absolute top-[-100%] bottom-[-100%] left-[-100%] right-[-100%] bg-cover"
                    style={{ backgroundPosition: "50%" }}
                  >
                    <source
                      src="https://d34p663dzicvaw.cloudfront.net/65ae8ba51dff7302e1a82996_output.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support HTML5 video.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="Skills" className="section lite">
          <div
            data-w-id="4a6101fe-9ad1-9bbe-664a-795ef7079f2f"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            className="container opacity-100"
          >
            <div className="section-header-wrap">
              <div className="label">Skills</div>
              <h2 className="section-heading">Here's what I'm good at</h2>
            </div>
            <div
              data-delay="4000"
              data-animation="cross"
              className="testimonial-slider w-slider"
              data-autoplay="false"
              data-easing="ease"
              data-hide-arrows="false"
              data-disable-swipe="false"
              data-autoplay-limit="0"
              data-nav-spacing="3"
              data-duration="500"
              data-infinite="true"
              role="region"
              aria-label="carousel"
            >
              <div className="w-slider-mask" id="w-slider-mask-1">
                <div
                  className="w-slide opacity-100"
                  aria-label="1 of 2"
                  role="group"
                  style={{ transform: "translateX(0px)" }}
                >
                  <div className="testimonial-row">
                    <div className="testimonial-block">
                      <div className="testimonial-text">
                        i'm good at full-stack?
                      </div>
                    </div>
                    <div className="testimonial-block center">
                      <div className="testimonial-text">
                        i'm like really into ml and nlp
                      </div>
                    </div>
                    <div className="testimonial-block">
                      <div className="testimonial-text">
                        i'm a grinder, learn fast, and want to ship fast
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="FAQ" className="section">
          <div className="flex-top container flex">
            <div className="sticky-side">
              <div className="label">FAQ</div>
              <h2 className="section-heading">
                Common questions.
                <br />
                Great answers.
              </h2>
              <div className="section-subheading">
                Have more questions?{" "}
                <a
                  href="/cdn-cgi/l/email-protection#5f363139301f3a33363c362b713c3032"
                  className="link"
                >
                  Send me an email! I'll get back to you ASAP!
                </a>
                <br />
              </div>
            </div>
            <div className="faq-side">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl">
                    Why do you want to work at Elicit?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-xl">
                    Why should we hire you?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl">
                    What are some ideas you have for Elicit you might want to
                    work on?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-xl">
                    What are some things we should know about you as a
                    developer?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-xl">
                    What are some ideas you have for Elicit you might want to
                    work on?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl">
                    When can you start?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    ASAP. I can be in the office as early as tomorrow.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div
          data-w-id="6fa0a1cc-1877-d6f6-7f74-2f2e546daa75"
          className="section tall dark"
        >
          <div className="sticky-section">
            <div className="container flex">
              <div className="section-header-wrap left">
                <h2 className="section-heading large">
                  Research for the machine intelligence age
                  <br />
                </h2>
                <div
                  data-w-id="b89cb29d-8797-170f-be9d-8106be6da70b"
                  className="sidenotes"
                >
                  1. In a survey of users, 10% of respondents said that Elicit
                  saves them 5 or more hours each week.
                </div>
                <div
                  data-w-id="c3b05dc4-0f08-f1fd-d7d1-153abf9cc5d7"
                  className="sidenotes"
                >
                  2. In pilot projects, we were able to save research groups 50%
                  in costs and more than 50% in time by automating data
                  extraction work they previously did manually.
                </div>
              </div>
              <div className="stats-row">
                <div
                  data-w-id="7f6413a5-e1a9-1ca7-e1bd-6e0977871ade"
                  className="stats-block slim"
                >
                  <div className="stats-number">5</div>
                  <div className="text-block-3">
                    Elicit&#x27;s users save up to{" "}
                    <strong>
                      <em>5 hours</em>
                    </strong>{" "}
                    per week<sup>1</sup>
                    <br />
                  </div>
                </div>
                <div
                  data-w-id="ceaf27af-efb2-f49a-8c39-0cbf74d2ca0f"
                  className="stats-block"
                >
                  <div className="stats-number">125</div>
                  <div className="text-block-10">
                    Search across{" "}
                    <strong>
                      <em>125 million</em>
                    </strong>{" "}
                    academic papers using natural language
                    <br />
                  </div>
                </div>
                <div
                  data-w-id="31827212-9974-7399-d01c-be0d00c20379"
                  className="stats-block"
                >
                  <div className="stats-number">50%</div>
                  <div className="text-block-11">
                    Extract details from papers at
                    <strong>
                      <em> 50%</em>
                    </strong>{" "}
                    of the time and cost of doing it manually <sup>2</sup>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section footer">
          <div
            data-w-id="14365f74-4fbd-3216-b04f-b373e84a46e6"
            className="container flex"
          >
            <div className="left-footer">
              <img
                src="https://cdn.prod.website-files.com/6516f50e7a19045d3d7b12f2/651b55580e577d6fc7fb6779_elicitwhitelogo.svg"
                loading="lazy"
                alt=""
                className="footer-logo"
              />
              <div className="footer-subheading">
                Automate time-consuming research tasks like summarizing papers,
                extracting data, and synthesizing your findings.
              </div>
              <div className="footer-icons">
                <a
                  href="https://www.linkedin.com/company/elicit-research/mycompany/verification/"
                  className="footer-social w-inline-block"
                >
                  <div className="social-icon w-embed">
                    <svg
                      width="420"
                      height="420"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.94043 5.00002C6.94016 5.53046 6.7292 6.03906 6.35394 6.41394C5.97868 6.78883 5.46986 6.99929 4.93943 6.99902C4.409 6.99876 3.90039 6.78779 3.52551 6.41253C3.15062 6.03727 2.94016 5.52846 2.94043 4.99802C2.9407 4.46759 3.15166 3.95899 3.52692 3.5841C3.90218 3.20922 4.411 2.99876 4.94143 2.99902C5.47186 2.99929 5.98047 3.21026 6.35535 3.58552C6.73024 3.96078 6.9407 4.46959 6.94043 5.00002V5.00002ZM7.00043 8.48002H3.00043V21H7.00043V8.48002ZM13.3204 8.48002H9.34043V21H13.2804V14.43C13.2804 10.77 18.0504 10.43 18.0504 14.43V21H22.0004V13.07C22.0004 6.90002 14.9404 7.13002 13.2804 10.16L13.3204 8.48002V8.48002Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://github.com/elicit"
                  className="footer-social gh w-inline-block"
                >
                  <div className="social-icon gh w-embed">
                    <svg
                      width="420"
                      height="420"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.475 2 2 6.475 2 12C1.99887 14.0993 2.65882 16.1456 3.88622 17.8487C5.11362 19.5517 6.84615 20.8251 8.838 21.488C9.338 21.575 9.525 21.275 9.525 21.012C9.525 20.775 9.512 19.988 9.512 19.15C7 19.613 6.35 18.538 6.15 17.975C6.037 17.687 5.55 16.8 5.125 16.562C4.775 16.375 4.275 15.912 5.112 15.9C5.9 15.887 6.462 16.625 6.65 16.925C7.55 18.437 8.988 18.012 9.562 17.75C9.65 17.1 9.912 16.663 10.2 16.413C7.975 16.163 5.65 15.3 5.65 11.475C5.65 10.387 6.037 9.488 6.675 8.787C6.575 8.537 6.225 7.512 6.775 6.137C6.775 6.137 7.612 5.875 9.525 7.163C10.3391 6.93706 11.1802 6.82334 12.025 6.825C12.875 6.825 13.725 6.937 14.525 7.162C16.437 5.862 17.275 6.138 17.275 6.138C17.825 7.513 17.475 8.538 17.375 8.788C18.012 9.488 18.4 10.375 18.4 11.475C18.4 15.313 16.063 16.163 13.838 16.413C14.2 16.725 14.513 17.325 14.513 18.263C14.513 19.6 14.5 20.675 14.5 21.013C14.5 21.275 14.688 21.587 15.188 21.487C17.173 20.8168 18.8979 19.541 20.1199 17.8392C21.3419 16.1373 21.9994 14.0951 22 12C22 6.475 17.525 2 12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com/elicitorg?lang=en"
                  className="footer-social x w-inline-block"
                >
                  <div className="social-icon w-embed">
                    <svg
                      width="420"
                      height="420"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.1623 5.65593C21.3989 5.99362 20.5893 6.2154 19.7603 6.31393C20.634 5.79136 21.288 4.96894 21.6003 3.99993C20.7803 4.48793 19.8813 4.82993 18.9443 5.01493C18.3149 4.34151 17.4807 3.89489 16.5713 3.74451C15.6618 3.59413 14.7282 3.74842 13.9156 4.18338C13.1029 4.61834 12.4567 5.30961 12.0774 6.14972C11.6981 6.98983 11.607 7.93171 11.8183 8.82893C10.1554 8.74558 8.52863 8.31345 7.04358 7.56059C5.55854 6.80773 4.24842 5.75097 3.1983 4.45893C2.82659 5.09738 2.63125 5.82315 2.6323 6.56193C2.6323 8.01193 3.3703 9.29293 4.4923 10.0429C3.82831 10.022 3.17893 9.84271 2.5983 9.51993V9.57193C2.5985 10.5376 2.93267 11.4735 3.54414 12.221C4.15562 12.9684 5.00678 13.4814 5.9533 13.6729C5.33691 13.84 4.6906 13.8646 4.0633 13.7449C4.33016 14.5762 4.8503 15.3031 5.55089 15.824C6.25147 16.3449 7.09743 16.6337 7.9703 16.6499C7.10278 17.3313 6.10947 17.8349 5.04718 18.1321C3.98488 18.4293 2.87442 18.5142 1.7793 18.3819C3.69099 19.6114 5.91639 20.264 8.1893 20.2619C15.8823 20.2619 20.0893 13.8889 20.0893 8.36193C20.0893 8.18193 20.0843 7.99993 20.0763 7.82193C20.8952 7.23009 21.6019 6.49695 22.1633 5.65693L22.1623 5.65593Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCrk6FdO_Bg_Xcll270F2xDQ"
                  className="footer-social yt w-inline-block"
                >
                  <div className="social-icon w-embed">
                    <svg
                      width="420"
                      height="420"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498V6.498ZM10 15.5L16 12L10 8.5V15.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  href="http://elicit.com/link/slack"
                  target="_blank"
                  className="footer-social slack w-inline-block"
                >
                  <div className="social-icon w-embed">
                    <svg
                      width="420"
                      height="420"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.52677 14.514C6.52493 15.035 6.31707 15.5342 5.94855 15.9025C5.58004 16.2708 5.08079 16.4784 4.55977 16.48C4.03858 16.4784 3.53918 16.2707 3.17064 15.9021C2.8021 15.5336 2.59436 15.0342 2.59277 14.513C2.59277 13.43 3.47677 12.545 4.55977 12.545H6.52777V14.513L6.52677 14.514ZM7.51877 14.514C7.51877 13.431 8.40277 12.546 9.48577 12.546C10.5688 12.546 11.4538 13.431 11.4538 14.514V19.441C11.4522 19.9624 11.2443 20.4619 10.8755 20.8305C10.5068 21.1991 10.0071 21.4067 9.48577 21.408C8.96458 21.4064 8.46518 21.1987 8.09664 20.8301C7.7281 20.4616 7.52036 19.9622 7.51877 19.441V14.514ZM9.48577 6.52702C8.96475 6.52517 8.46561 6.31731 8.09729 5.9488C7.72896 5.58028 7.52135 5.08104 7.51977 4.56002C7.51977 3.47702 8.40377 2.59302 9.48677 2.59302C10.5698 2.59302 11.4548 3.47702 11.4548 4.56002V6.52802H9.48577V6.52702ZM9.48577 7.51902C10.5688 7.51902 11.4538 8.40302 11.4538 9.48602C11.4525 10.0076 11.2447 10.5074 10.8759 10.8761C10.5071 11.2449 10.0073 11.4527 9.48577 11.454H4.55977C4.03841 11.4524 3.53886 11.2446 3.17029 10.8758C2.80172 10.507 2.59409 10.0074 2.59277 9.48602C2.59277 8.40302 3.47677 7.51902 4.55977 7.51902H9.48677H9.48577ZM17.4728 9.48602C17.4728 8.40302 18.3578 7.51902 19.4408 7.51902C20.5238 7.51902 21.4078 8.40302 21.4078 9.48602C21.4065 10.0074 21.1988 10.507 20.8303 10.8758C20.4617 11.2446 19.9621 11.4524 19.4408 11.454H17.4728V9.48602V9.48602ZM16.4808 9.48602C16.4795 10.0074 16.2718 10.507 15.9033 10.8758C15.5347 11.2446 15.0351 11.4524 14.5138 11.454C13.9922 11.4527 13.4924 11.2449 13.1236 10.8761C12.7549 10.5074 12.5471 10.0076 12.5458 9.48602V4.56002C12.5458 3.47702 13.4308 2.59302 14.5138 2.59302C15.5968 2.59302 16.4808 3.47702 16.4808 4.56002V9.48702V9.48602ZM14.5138 17.473C15.5968 17.473 16.4808 18.358 16.4808 19.441C16.4792 19.9622 16.2714 20.4616 15.9029 20.8301C15.5344 21.1987 15.035 21.4064 14.5138 21.408C13.9924 21.4067 13.4928 21.1991 13.124 20.8305C12.7552 20.4619 12.5474 19.9624 12.5458 19.441V17.473H14.5138ZM14.5138 16.481C13.9924 16.4797 13.4928 16.2721 13.124 15.9035C12.7552 15.5349 12.5474 15.0354 12.5458 14.514C12.5458 13.431 13.4308 12.546 14.5138 12.546H19.4408C20.5238 12.546 21.4078 13.431 21.4078 14.514C21.4062 15.0352 21.1984 15.5346 20.8299 15.9031C20.4614 16.2717 19.962 16.4794 19.4408 16.481H14.5138V16.481Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="right-footer">
              <div className="footer-col">
                <h1 className="footer-heading">Solutions</h1>
                <a href="/solutions/systematic-reviews" className="footer-link">
                  Systematic Reviews
                </a>
                <a href="/solutions/heor" className="footer-link">
                  Health Economics &amp; Outcomes Research
                </a>
                <a href="/solutions/medical-affairs" className="footer-link">
                  Medical Affairs
                </a>
                <a href="/solutions/clinical-trials" className="footer-link">
                  Clinical Trial Design
                </a>
              </div>
              <div className="footer-col">
                <h1 className="footer-heading">Product</h1>
                <a href="/welcome#Features" className="footer-link">
                  Features
                </a>
                <a href="/welcome#Testimonials" className="footer-link">
                  Testimonials
                </a>
                <a href="/welcome#Pricing" className="footer-link">
                  Pricing
                </a>
                <a href="/welcome#FAQ" className="footer-link">
                  FAQs
                </a>
                <a href="https://support.elicit.com/" className="footer-link">
                  Help and Guides
                </a>
                <a href="/users/auth?show=signup" className="footer-link">
                  Sign Up
                </a>
              </div>
              <div className="footer-col">
                <h1 className="footer-heading">Company</h1>
                <a href="/team" className="footer-link">
                  Team
                </a>
                <a href="/careers" className="footer-link">
                  Careers
                </a>
                <a href="https://blog.elicit.com/" className="footer-link">
                  Blog
                </a>
                <a href="/operations/terms" className="footer-link">
                  Terms of Service
                </a>
                <a href="/operations/privacy" className="footer-link">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
