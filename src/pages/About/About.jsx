import HeroImg from "@/assets/images/IshitaPhotoCropped.jpeg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full-Stack Engineer building scalable AI-driven web systems
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4">
                <p className="text-white">
                  Hello, I’m Ishita Bansal - a full-stack developer who enjoys building systems that actually run in production, not just demos that look good on a portfolio.
                </p>
                <br />
                <p className="text-white">
                  My work focuses on modern React and Next.js frontends backed by Node.js services and cloud-native infrastructure. I’ve built AI-driven platforms, authentication-heavy applications, and automated deployment pipelines that handle real-time processes and containerized workloads.
                </p>
                <br />

                <p className="text-white">
                  I’m particularly interested in backend engineering, system design, and performance-oriented architecture. Alongside building products, I actively solve data structures and algorithm problems to strengthen my core engineering fundamentals.
                  <br />
                  <br />
                  I care about clarity in code, simplicity in architecture, and shipping solutions that deliver measurable value. My long-term goal is to grow into an engineer who can design and scale reliable systems from the ground up.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
