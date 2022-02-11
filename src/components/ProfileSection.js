import profilepic from '../assets/profile-pic.png';
import SectionHeader from './SectionHeader';
const ProfileSection = () => {
  return (
    <section className='container mx-auto mt-16'>
      <div className=' text-center'>
        <SectionHeader heading='Profile' text='Mengenal saya secara singkat' />
      </div>
      <div className='flex mt-6 justify-center sm:flex-col lg:flex-row'>
        <div className='lg:mr-10 sm:mr-0'>
          <img src={profilepic} alt="profile-picture" className='sm:mx-auto' />
        </div>
        <div className='lg:w-5/12 leading-relaxed sm:w-full sm:px-4 sm:text-center sm:mt-4 lg:mt-0 lg:text-left'>
          <p className='text-lg'> Aliquam blandit leo lorem, nec vehicula mi accumsan posuere. Duis condimentum ornare ante a posuere. Aliquam sem magna, sodales quis congue vel, congue nec nisi. Aenean nec lorem et dolor aliquet ullamcorper eu at sapien. Sed pretium mauris dui. Phasellus mollis accumsan tempus. Proin laoreet hendrerit ligula, id lacinia eros. Aenean consequat, felis eu malesuada lobortis, augue nisl faucibus ligula, id viverra mi erat at nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ac aliquet eros.</p>

          <p className='text-lg mt-6'> Aliquam a fringilla metus. Fusce ut tortor ut sem sagittis convallis. Morbi et augue sed nisl fermentum dictum eget ut nisl. Mauris ut dolor posuere augue porta lobortis nec sed lacus. Curabitur dignissim ac lorem in tempor. Morbi id dui quis ex malesuada mattis. Suspendisse potenti. Nulla euismod diam ut risus mollis, id vehicula nulla dictum.</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
