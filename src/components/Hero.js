import Nav from "./Nav";
import Logo from "./Logo";
import Button from "./Button";
import HeaderContent from "./HeaderContent";

const Hero = () => {
  return (

    <div className='bg-hero sm:bg-center sm:h-[712px] md:h-[900px] md:bg-cover md:bg-bottom'>
      <div className='container mx-auto px-12'>
        <div className='flex items-center py-[61px]'>

          <div className='w-3/12'>
            <Logo />
          </div>

          <div className='w-6/12'>
            <Nav />
          </div>

          <div className='w-3/12 text-right'>
            <Button transparent='bg-transparent border-yellow-400 text-yellow-400' />
          </div>

        </div>

        <div className='text-center mt-20 xl:mt-[150px]'>
          <HeaderContent />
        </div>
      </div>
    </div>

  );
};

export default Hero;
