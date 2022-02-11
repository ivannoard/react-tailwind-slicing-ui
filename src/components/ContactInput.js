const ContactInput = ({ tag, subject, type }) => {
  return (
    <>
      <label htmlFor={tag} className='font-semibold text-lg'>{subject}</label>
      {type === 'input' ? (<input type="text" name={tag} id={tag} className='block h-8 w-full' />) : (
        <textarea className='block w-full h-28' name={tag} id={tag}></textarea>)}

    </>
  );
};

export default ContactInput;
