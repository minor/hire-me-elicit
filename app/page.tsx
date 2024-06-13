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
        <div className="nav w-nav">
          <div className="nav-container container">
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a
                href="/"
                className="mr-0 text-[#313848] text-lg font-medium whitespace-nowrap"
              >
                <img
                  className="w-8 mb-2"
                  src="/elicit.svg"
                  loading="lazy"
                  alt=""
                />{" "}
                Elicit Hire Me
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
                  Simply put: I'm fascinated by the work Elicit is doing & I{" "}
                  <span className="font-medium">really</span> want to help make
                  it better. Also, I'm interested in theoretical ML and would
                  love tinkering with LLMs.
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
                <div className="logos-slider w-slider">
                  <div className="mask w-slider-mask">
                    <div className="slide w-slide">
                      <div className="logos-row">
                        <div className="logo-block">
                          <img
                            src="https://1000logos.net/wp-content/uploads/2022/07/Northeastern-University-Logo-1922-500x281.png"
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
                        i'm good at full-stack? tbh way better with front-end
                        but really trying to learn the back-end this summer too
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
                Answers to the
                <br />
                questions you have.
              </h2>
              <div className="section-subheading">
                Have more questions?{" "}
                <a
                  href="/cdn-cgi/l/email-protection#5f363139301f3a33363c362b713c3032"
                  className="link"
                >
                  Send me an email!
                </a>{" "}
                I'll probably respond within an hour.
              </div>
            </div>
            <div className="faq-side">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-xl">
                    Why do you want to work at Elicit?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-xl">
                    Why should we hire you?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-xl">
                    What are some ideas you have for Elicit you might want to
                    work on?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-xl">
                    What are some things we should know about you as a
                    developer?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-xl">
                    What are some ideas you have for Elicit you might want to
                    work on?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left text-xl">
                    Why'd you reach out so late? What's your history with
                    Elicit?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    ASAP. I can be in the office as early as tomorrow.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left text-xl">
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
              <div className="label">Don't trust me? Ask Halo.</div>
              <h2 className="section-heading">
                Hey Halo, what's Saurish good at?
              </h2>
            </div>
            <div>Insert chat bot here</div>
            <div>Insert resume</div>
            <div>link cover letter</div>

            <iframe
              src="https://drive.google.com/file/d/1RbQat82Q4NSpJ_OHcbH_Tci5m8spGBS4/preview"
              width="640"
              height="480"
              className="mx-auto"
              allow="autoplay"
            />
            <p className="text-center mt-4">
              Here's a{" "}
              <a href="https://docs.google.com/document/d/1xgodWEKQ2UvUIkv7RprkNBc6jRQQfpbNq8JIp_pcJo8/edit">
                link
              </a>{" "}
              to my cover letter as well. Hand-written. No GPT.
            </p>
          </div>
        </div>
        <div className="section tall dark">
          <div className="pt-40 pb-28">
            <div className="container flex">
              <div className="section-header-wrap left">
                <h2 className="section-heading large">
                  How Elicit Benefits with Me
                  <br />
                </h2>
                <div className="sidenotes">
                  1. In a thought experiment conducted by me (maybe a little bit
                  biased), everyone at the Elicit team said that having an
                  intern was a good idea! Morale boosts and the overall
                  productivity is increased — and I'll keep the Slack chats
                  interesting!
                </div>
                <div className="sidenotes">
                  Not to mention... who doesn't want a gen-Z teenager pushing
                  buggy code to prod! (I would never do this, but again, it's a
                  thought experiment so why not have fun with it?)
                </div>
              </div>
              <div className="stats-row">
                <div className="stats-block slim">
                  <div className="stats-number">4</div>
                  <div className="text-block-3">
                    Elicit employees (namely: James, Luke, Panda, and Justin!)
                    save up to{" "}
                    <strong>
                      <em>10-15 hours</em>
                    </strong>{" "}
                    per week
                    <br />
                  </div>
                </div>
                <div className="stats-block">
                  <div className="stats-number">20</div>
                  <div className="text-block-10">
                    more PR's pushed each week (ambitious I know, but hey,
                    what's a startup without ambition)
                    <br />
                  </div>
                </div>
                <div
                  data-w-id="31827212-9974-7399-d01c-be0d00c20379"
                  className="stats-block"
                >
                  <div className="stats-number">50%</div>
                  <div className="text-block-11">
                    More fun and productivity at the office! <sup>1</sup>
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-24 text-center font-medium text-4xl text-[#E1E9D6]">
              Thanks for considering me! Hope to chat soon :)
            </p>
          </div>
        </div>
        <footer className="section footer">
          <h3 className="text-[#cbdd87bf] text-center font-light text-base">
            hacked together with ♡ by{" "}
            <a
              className="underline text-[#cbdd87bf] text-base hover:text-[#cbdd81ff]"
              href="https://saurish.com/"
            >
              saurish
            </a>{" "}
            |{" "}
            <a
              className="underline text-[#cbdd87bf] text-base hover:text-[#cbdd81ff]"
              href="https://saurish.com/"
            >
              github repo for this site
            </a>
          </h3>
        </footer>
      </div>
    </body>
  );
}
