import SectionHeader from "./SectionHeader";
import email from "../assets/email-icon.svg"
import twitter from "../assets/twitter-icon.svg"
import phone from "../assets/phone-icon.svg"
import ContactItem from "./ContactItem";
import ContactInput from "./ContactInput";

const ContactSection = () => {
  return (
    <section className='container mx-auto mt-16 bg-slate-200'>
      <div className='flex flex-wrap sm:flex-col lg:flex-row'>
        <div className='lg:w-6/12 lg:border-2 lg:border-r-black p-12 sm:w-full'>
          <SectionHeader heading='Contact' text='Beberapa cara menghubungi saya' />
          <ContactItem contactIcon={email} heading='Mail' text='ivannovaa.24@gmail.com' />
          <ContactItem contactIcon={twitter} heading='Twitter' text='@spendinglife' />
          <ContactItem contactIcon={phone} heading='Phone' text='0812345678' />
        </div>
        <div className='lg:w-6/12 p-12 sm:w-full'>
          <div className='flex -mx-4'>
            <div className='w-6/12 px-4'>
              <ContactInput tag='name' subject='Name' type='input' />
            </div>
            <div className='w-6/12 px-4'>
              <ContactInput tag='email' subject='Email' type='input' />
            </div>
          </div>
          <div className='mt-6'>
            <ContactInput tag='subject' subject='Subject' className='w-full h-8' type='input' />
          </div>
          <div className='mt-6'>
            <ContactInput tag='message' subject='message' type='textarea' className='block w-full h-28' />
          </div>
          <button className='bg-black text-white font-semibold lg:float-right py-3 px-5 mt-6 sm:w-full'>Submit</button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
