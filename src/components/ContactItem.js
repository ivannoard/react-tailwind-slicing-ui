const ContactItem = ({ contactIcon, heading, text }) => {
  return (
    <div className='flex items-start mt-6'>
      <img src={contactIcon} alt="email-icon" className='mr-4' />
      <div>
        <h4 className='text-lg'>{heading}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ContactItem;
