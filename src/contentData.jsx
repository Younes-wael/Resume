// contentData.js (or contentData.jsx if you prefer using a separate component)
import './contentData.css';
import { FaEnvelope, FaPhone, FaGithub, FaUser, FaLaptopCode, FaBriefcase, FaGraduationCap, FaAddressBook, FaReact, FaJs, FaHtml5, FaCss3, FaPython  } from 'react-icons/fa';
import { SiQt, SiGit,SiOpera, SiC } from 'react-icons/si';
const CPlusPlusIcon = () => (
    <svg width="20" height="20" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="50" fontSize="50" fontFamily="Arial" fill="currentColor">C++</text>
    </svg>
);

export const contentData = [
    {
        id: "about",
        title: "About Me",
        icon: <FaUser />,  // Icon for About section
        content: (
            <>
                <p>Ever since I was a kid, I've been curious about the inner workings of technology. I was the kind of child who would dismantle toys
                    just to examine the chips inside, imagining that I was "fixing" them. That curiosity has only grown over the years, and it now drives
                    my studies and work in computer science. There’s nothing quite like the satisfaction of solving a tough problem or completing a project —
                    it’s the sense of accomplishment that keeps me moving forward.</p>
                <p>I'm a multilingual person, born and raised in Tunisia, where I attended top schools. Due to historical and cultural influences, mastering
                    foreign languages became essential, as all scientific subjects were taught in French or English. My journey to Germany has been one of my
                    proudest achievements. Arriving here with no family or support system was challenging, but I quickly adapted, learning the language and
                    beginning my studies at TU Darmstadt. However, after a semester, I realized that I was more drawn to hands-on, practical learning, which
                    led me to transfer to Hochschule Darmstadt, where I’ve found a great fit.</p>
                <p>Adaptability has become one of my strongest traits. After just one year in Germany, I took on my first office job as a receptionist, a role
                    I had no prior experience in and one that challenged me to bridge language and cultural gaps. This role taught me a lot about client service
                    and provided a solid start in my professional journey.</p>
                <p>Looking ahead, my goal is to gain as much experience as possible and one day lead a German company branch in Tunisia, managing projects
                    between the two countries. My journey in computer science was inspired by my high school IT teacher, whose passion for the
                    subject was contagious. His influence played a huge part in my decision to pursue this field, and he remains an inspiration.</p>
                <p>Outside of work and studies, I like to stay active. I enjoy going to the gym, boxing, and playing chess. And, like any student in his
                    twenties, I make sure to balance the hard work with fun by spending time with friends and going to parties when I can.</p>
            </>
        )
    },
    {
        id: "skills",
        title: "Skills",
        icon: <FaLaptopCode />,  // Icon for Skills section
        content: (
            <>
                <h3>Programming languages:</h3>
                <ul style={{paddingLeft: '20px'}}>
                    <li><SiC  /> C++</li>
                    <li><FaReact /> React</li>
                    <li><FaJs /> JavaScript</li>
                    <li><FaHtml5 /> HTML </li>
                    <li><FaCss3 /> CSS </li>
                    <li><FaPython /> Python </li>
                </ul>
                <h3>Frameworks/Tools:</h3>
                <ul style={{paddingLeft: '20px'}}>
                    <li><SiQt/> Qt Frameworks</li>
                    <li><SiGit/> Git</li>
                    <li><SiOpera/> Opera Cloud</li>
                    <li>Ms Office</li>
                </ul>
                <h3>Other:</h3>
                <ul style={{paddingLeft: '20px'}}>
                    <li>Customer service</li>
                    <li>Office management</li>

                </ul>
            </>


        )
    },
    {
        id: "experience",
        title: "Experience",
        icon: <FaBriefcase />,  // Icon for Experience section
        content: (showMore) => (
            <>
                <h4>Receptionist</h4>
                <p>Mercure Hotel Frankfurt Airport Langen</p>
                <span>2023 - Today</span>

                {/* Conditional content for "Show More" */}
                {showMore && (
                    <ul>
                        <p></p>
                        <li><p>Efficient use of cloud-based systems (Opera Cloud) for managing check-in/check-out
                            processes and bookings.</p></li>
                        <li><p>Database management and booking coordination: handling reservations and room bookings
                            utilizing database systems to optimize workflows.</p></li>
                        <li><p>Problem-solving-oriented support: assisting guests via phone and email with a focus on
                            quick, effective solutions and excellent customer service.</p></li>
                        <li><p>Coordination with external partners: ensuring smooth integration of transport services
                            to optimize business processes.</p></li>
                        <li><p>Experience with IT systems and training: applying and providing training in office
                            and IT systems (MS Office, Opera Cloud) to manage guest data and internal processes.</p></li>


                    </ul>
                )}
            </>
        )
    },
    {
        id: "education",
        title: "Education",
        icon: <FaGraduationCap />,  // Icon for Education section
        content: (showMore) =>  (
            <>


                <h4>Bachelor in Computer Science</h4>
                <h5>TU Darmstadt</h5>
                <span>2022-2023</span>
                <h5>Darmstadt University of Applied Sciences</h5>
                <span>2023-Today</span>
                <h4>Highschool</h4>
                <h5>Pioneer School of Ariana</h5>
                <span>2018-2021</span>
                {/* Conditional content for "Show More" */}
                {showMore && (
                    <ul>
                        <p></p>
                        <p>The Pioneer School of Ariana is one of Tunisia's most prestigious
                            secondary schools, known for its rigorous academic standards and competitive environment.
                            Located on Avenue de l'Indépendance in Ariana, Tunisia, LPA has a consistent 100% success rate in
                            the Baccalaureate exam. Established on September 15, 1983, the school was part of a national
                            initiative to consolidate top-performing students in specialized institutions. Originally,
                            scientific subjects were taught in English but soon transitioned to French, aligning with the country's
                            broader educational language policies. Admission to LPA is selective, with students entering at age 15 after
                            ranking among the highest in the national 9th-grade examination, underscoring the school's elite status.</p>



                    </ul>
                )}
            </>
        )
    },
    {
        id: "contact",
        title: "Contact",
        icon: <FaAddressBook   />,  // Icon for Contact section
        content: (
            <>
                <div className="contact-methods">
                    <a href="mailto:younes-wael@outlook.com" className="contact-link">
                        <FaEnvelope className="contact-icon" /> younes-wael@outlook.com
                    </a>
                    <a href="tel:+4915734685305" className="contact-link">
                        <FaPhone className="contact-icon" /> +49 1573 4685305
                    </a>

                    <a href="https://github.com/Younes-wael" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaGithub className="contact-icon" /> GitHub
                    </a>

                </div>
                <a href="mailto:younes-wael@outlook.com" className="get-in-touch">
                    Get in Touch <span className="view-more-icon">→</span>
                </a>
            </>
        )
    }
];
