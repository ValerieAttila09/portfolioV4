import { gsap } from "gsap"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function ShowcaseSection() {

  const sectionRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null)
  const project3Ref = useRef(null)

  
  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
    
    gsap.fromTo(sectionRef.current, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out"
    })

    projects.forEach((card, index) => {
      gsap.fromTo(card, {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
        }
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className='app-showcase' id="work">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2 className="">ON-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo & Tailwind CSS for fast user-friendly experience.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img className="rounded-md" src="/images/project_gw_2.png" alt="Library Management Platform" />
              </div>
              <h2 className="">NodeOps &mdash; AI Workflow Startrup App</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img className="rounded-md" src="/images/project_gw_3.png" alt="YC Directory" />
              </div>
              <h2 className="">Simple Notes App &mdash; Realtime App With MongoDB</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}