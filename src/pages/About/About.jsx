import HeroImg from "@/assets/images/portfolio_photo.jpeg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Problem Solver
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
                  Hello! I’m Ishita Bansal, a Full-Stack Engineer focused on
                  building scalable, real-world web applications. I work
                  primarily with React, Next.js, Node.js, and modern cloud
                  tools, and I enjoy turning complex problems into clean,
                  efficient solutions.
                </p>
                <br/>
                <p className="text-white">
                  I’ve built projects ranging from AI-powered platforms to
                  cloud-based deployment pipelines, with hands-on experience in
                  authentication systems, databases, and real-time services. My
                  work emphasizes performance, reliability, and practical
                  usability rather than just visuals.
                </p>
                <br/>

                <p className="text-white">
                  I’m actively strengthening my backend and system design skills
                  while continuing to deepen my understanding of data
                  structures, algorithms, and core CS fundamentals. I believe in
                  learning by building and solving problems that actually
                  matter.
                  <br />
                  <br />
                  Driven by curiosity and consistency, I aim to grow into a
                  well-rounded software engineer who ships meaningful products
                  and contributes value through thoughtful engineering.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
