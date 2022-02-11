import SectionHeader from "./SectionHeader";
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section className='mt-16 container mx-auto text-center'>
      <SectionHeader heading='Projects' text='Beberapa projects bikinan saya' />
      <div className='flex flex-wrap container mt-6 sm:flex-col lg:flex-row'>
        <ProjectCard projectimg={project1} heading='Hasten' text='Eksplorasi Landing Page' />
        <ProjectCard projectimg={project2} heading='Resources' text='Eksplorasi Resources Page' />
        <ProjectCard projectimg={project2} heading='Resources' text='Eksplorasi Resources Page' />
        <ProjectCard projectimg={project1} heading='Hasten' text='Eksplorasi Landing Page' />
        <ProjectCard projectimg={project2} heading='Resources' text='Eksplorasi Resources Page' />
        <ProjectCard projectimg={project2} heading='Resources' text='Eksplorasi Resources Page' />
      </div>
    </section>
  );
};

export default ProjectSection;
