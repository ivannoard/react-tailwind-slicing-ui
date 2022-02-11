const SectionHeader = ({ heading, text }) => {
  return (
    <>
      <h4 className='font-mono font-semibold text-2xl'>{heading}</h4>
      <p className='text-slate-400'>{text}</p>
    </>
  );
};

export default SectionHeader;
