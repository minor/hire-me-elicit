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
            <nav role="navigation" className="hidden md:flex">
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
                <a href="#faq" className="button w-inline-block">
                  <div className="text-block-6">Learn Why</div>
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
                  Simply put: I&apos;m fascinated by the work Elicit is doing &
                  I <span className="font-medium">really</span> want to help
                  make it better. Also, I&apos;m interested in theoretical ML
                  and would love tinkering with LLMs.
                  <br />
                </div>
                <a href="#faq" className="button cta-button w-inline-block">
                  <div className="text-base font-medium">Here&apos;s Why</div>
                </a>
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
                            src="https://seeklogo.com/images/N/northeastern-university-logo-CD40BD15B7-seeklogo.com.png"
                            loading="lazy"
                            width="120"
                            className="-mt-3"
                            alt=""
                          />
                        </div>
                        <div className="logo-block">
                          <img
                            src="https://logonoid.com/images/princeton-university-logo.png"
                            loading="lazy"
                            width="120"
                            alt=""
                          />
                        </div>
                        <div className="logo-block">
                          <img
                            src="https://collegefoundation.org/wp-content/uploads/2022/05/Stanford-Logo.png"
                            loading="lazy"
                            width="120"
                            alt=""
                          />
                        </div>
                        <div className="logo-block">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/en/2/21/UCSD_School_of_Medicine_logo.png"
                            loading="lazy"
                            width="200"
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
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            className="container opacity-100"
          >
            <div className="section-header-wrap">
              <div className="label">Skills</div>
              <h2 className="section-heading">
                Here&apos;s what I&apos;m good at
              </h2>
            </div>
            <div className="testimonial-slider w-slider">
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
                        <span className="font-medium">
                          Full-stack development
                        </span>
                        : I have more experience with frontend (Next.js /
                        Tailwind) but have recently been building with and
                        exploring Python-based backends (would love to explore
                        Node though!). Built{" "}
                        <a
                          href="https://x.com/saurishhh/status/1792699172279448019"
                          className="text-xl"
                        >
                          Synthify
                        </a>
                        , an AI-powered synthetic data generation platform.
                        Currently interested in LLM memory and releasing a
                        package soon to personalize LLM models easily with
                        enhanced memory storage (better than LangChain and
                        OpenAI). Also have scripts written up to accurately
                        detect when LLM hallucination has happened, and would
                        like to implement this into an easily callable API.
                      </div>
                    </div>
                    <div className="testimonial-block center">
                      <div className="testimonial-text">
                        <span className="font-medium">Research</span>: Been
                        conducting research at top-level labs for the past four
                        years (even{" "}
                        <a
                          href="https://www.medrxiv.org/content/10.1101/2022.04.03.22273365v1"
                          className="text-xl"
                        >
                          preprinted a paper
                        </a>{" "}
                        and presented at{" "}
                        <a href="https://www.opam.net/" className="text-xl">
                          OPAM
                        </a>
                        ) Right now, I&apos;m really into theoretical machine
                        learning and NLP. Been through all Tier 1 and half-way
                        through Tier 2 on the{" "}
                        <a
                          href="https://github.com/elicit/machine-learning-list"
                          className="text-xl"
                        >
                          ML list posted by Andreas
                        </a>
                        . I&apos;m one of the organizers of the AI Alignment
                        group at Princeton and I&apos;ve done research on
                        transformers and state space models. I wrote up a blog
                        post (unreleased) about these topics, which you can find{" "}
                        <a href="" className="text-xl">
                          here
                        </a>
                        . I&apos;d love to research more at Elicit. :)
                      </div>
                    </div>
                    <div className="testimonial-block">
                      <div className="testimonial-text">
                        <span className="font-medium">Work Ethic</span>:
                        I&apos;m a grinder because I&apos;m really ambitious and
                        I know I have to grind to make an impact in the world. I
                        believe in the importance of shipping fast while
                        maintaining high-quality standards, and I want to focus
                        my time on building products that users love to use and
                        would actually help them in their research settings. I
                        don&apos;t work by the clock — i.e. I hate being defined
                        or predisposed to a 9-5, I work to get things done and
                        ship. I&apos;m not perfect, but I can assure you:
                        I&apos;ll put all my energy into trying to get tasks
                        done with an OCD-like attention to detail and
                        high-quality code.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="faq" className="section">
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
                  href="mailto:saurishs1215@gmail.com?subject=From%20Elicit"
                  className="link"
                >
                  Send me an email!
                </a>{" "}
                I&apos;ll probably respond within an hour.
              </div>
            </div>
            <div className="faq-side">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-xl">
                    Why do you want to work at Elicit?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    The answer is three-fold:
                    <br />
                    a) the mission: I&apos;m a researcher and want to see how
                    applications of AI can help improve the speed and depth of
                    research in academia;
                    <br />
                    b) the company: I think the work environment at Elicit
                    sounds amazing and as someone interested in AI safety and
                    LLMs for their future, this would be an awesome place to
                    grow and learn (don&apos;t worry, I don&apos;t need
                    hand-holding though!);
                    <br />
                    c) I&apos;m a builder by nature and I like shipping fast and
                    iterating through different designs — something only an
                    early-stage startup environment would be able to support. I
                    think Elicit could be that place for me!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-xl">
                    We already have interns, why should we hire another?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    A) I know how to get stuff done and{" "}
                    <span className="italic">fast</span> — just replicated your
                    landing page in TailwindCSS and Next.js (and the bulk of it
                    was done in a day).
                    <br />
                    B) I can help ship a user-centric feature out a week — I
                    basically built my own &quot;chat with papers&quot; feature
                    on this website (like Charlie) and it only took me an hour
                    or two to figure out.
                    <br />
                    C) I do LLM research (see{" "}
                    <a href="underline" className="underline">
                      this write-up
                    </a>{" "}
                    I did on transformers and state space models) and would want
                    to help forward AI safety research / LLM research at Elicit.
                    I want to research more. Ironically, the PI of the lab at
                    Princeton that I work at also got his PhD underneath Josh
                    Tenenbaum!
                    <br />
                    D) I do the dirty work — I&apos;m always to willing to put
                    in the effort and make sure things are done well and
                    efficiently.
                    <br />
                    E) I learn fast — even if it&apos;s an area that I&apos;m
                    not that well-versed in. I want to learn a lot this summer,
                    and I&apos;ll absorb information fast to make Elicit a
                    better product!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-xl">
                    What are some ideas for Elicit you might want to work on?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    1) I really want to work on collaborative research in Elicit
                    and understanding what that looks like (i.e., maybe it
                    involves using{" "}
                    <a href="https://liveblocks.io/">Liveblocks</a> — I&apos;m
                    not 100% sure, but it would be an amazing feature for Elicit
                    Plus users + it&apos;s a cool challenge and I&apos;d like to
                    explore it!)
                    <br />
                    2)A 0-100 pipeline: sometimes the search box can be
                    intimidating and I don&apos;t really know what to ask. How
                    about build something that probes an idea out of the user
                    and turns it into an actual meaningful product: 0 -&gt; 100.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-xl">
                    Why&apos;d you reach out so late? What&apos;s your history
                    with Elicit?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    I&apos;ve been interested in Elicit for a{" "}
                    <span className="italic">long</span> time. I first came
                    across it in March when I used it for a literature review
                    for my English class, and I&apos;ve been meaning to reach
                    out (no joke, I have an email draft from March). But at the
                    time, I didn&apos;t have the technical skills necessary to
                    be useful for the team, and I didn&apos;t want to waste
                    anyone&apos;s time. Over the past three months, I&apos;ve
                    coded a lot of hobby projects, and finally reached a state
                    where I think I can <span className="italic">actually</span>{" "}
                    contribute to Elicit&apos;s mission as an intern.
                    That&apos;s why I waited. I hope I didn&apos;t wait too
                    long.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-xl">
                    When can you start?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    ASAP. I can be in the office as early as Monday morning.
                    I&apos;m located in San Jose, but happy to commute to
                    Oakload via BART (preferably 3x a week)! I start school
                    September 3, so there&apos;s still at least a good 10 weeks
                    I can work in-person.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div id="Skills" className="section lite">
          <div
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            className="container opacity-100"
          >
            <div className="section-header-wrap">
              <div className="label">Don&apos;t trust me? Ask Halo.</div>
              <h2 className="section-heading">
                Hey Halo, what&apos;s Saurish good at?
              </h2>
              <div className="testimonial-text">
                Halo is trained on my resume and my cover letter — ask it any
                questions, and it should be able to help you or at the very
                least infer.
              </div>
            </div>
            <div id="halo" className=""></div>

            <div className="flex justify-center items-center">
              <iframe
                src="https://drive.google.com/file/d/1RbQat82Q4NSpJ_OHcbH_Tci5m8spGBS4/preview"
                className="md:w-[640px] md:h-[480px] h-[360px] w-[320px]"
                allow="autoplay"
              />
            </div>
            <p className="text-center mt-4">
              Here&apos;s a{" "}
              <a
                href="https://docs.google.com/document/d/1xgodWEKQ2UvUIkv7RprkNBc6jRQQfpbNq8JIp_pcJo8/edit"
                className="underline"
              >
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
                  productivity is increased — and I&apos;ll keep the Slack chats
                  interesting!
                </div>
                <div className="sidenotes">
                  Not to mention... who doesn&apos;t want a gen-Z teenager
                  pushing buggy code to prod! (I would never do this, but again,
                  it&apos;s a thought experiment so why not have fun with it?)
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
                    more PR&apos;s pushed each week (ambitious I know, but hey,
                    what&apos;s a startup without ambition)
                    <br />
                  </div>
                </div>
                <div className="stats-block">
                  <div className="stats-number">50%</div>
                  <div className="text-block-11">
                    More fun and productivity at the office! <sup>1</sup>
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[#e1e9d666] mx-4 mt-12 text-center font-light text-base md:hidden">
              1. In a thought experiment conducted by me (maybe a little bit
              biased), everyone at the Elicit team said that having an intern
              was a good idea! Morale boosts and the overall productivity is
              increased — and I&apos;ll keep the Slack chats interesting!
              <br />
              <br />
              Not to mention... who doesn&apos;t want a gen-Z teenager pushing
              buggy code to prod! (I would never do this, but again, it&apos;s a
              thought experiment so why not have fun with it?)
            </p>
            <p className="mt-24 mx-4 text-center font-medium text-4xl text-[#E1E9D6]">
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
