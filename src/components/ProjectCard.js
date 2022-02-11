const ProjectCard = ({ projectimg, heading, text }) => {
  return (
    <div className='lg:w-6/12 p-6 sm:w-full'>
      <img src={projectimg} alt="my-project" className='w-full' />
      <div>
        <h4 className='text-2xl font-semibold'>{heading}</h4>
        <p className='text-gray-400'>{text}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
