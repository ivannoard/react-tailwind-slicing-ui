
const CardSkill = ({ img, heading, text }) => {

  return (
    <>
      <div className='lg:w-4/12 p-4 sm:w-full'>
        <div className='bg-white rounded shadow-2xl flex items-center p-4 sm:justify-center'>
          <div className='mr-4'>
            <img src={img} alt="ini-gambar" className='w-16 h-16' />
          </div>
          <div>
            <h1 className='text-2xl'>{heading}</h1>
            <p className='text-gray-400'>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSkill;
