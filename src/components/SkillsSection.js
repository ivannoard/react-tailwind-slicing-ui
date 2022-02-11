import SectionHeader from "./SectionHeader";
import javascript from '../assets/javascript.png'
import nodejs from '../assets/nodejs.png'
import reactjs from '../assets/reactjs.png'

import CardSkill from "./CardSkill";

const SkillsSection = () => {
  return (
    <section className='mt-16 py-10 bg-slate-200'>
      <div className="container mx-auto">
        <div className='text-center'>
          <SectionHeader heading='Skills' text='Beberapa kemampuan saya' />
        </div>
        <div className='mt-6'>
          <div className='flex flex-wrap container sm:flex-col lg:flex-row'>
            <CardSkill img={javascript} heading='Javascript' text='Menengah' />
            <CardSkill img={reactjs} heading='ReactJS' text='Pemula' />
            <CardSkill img={nodejs} heading='Node JS' text='Pemula' />
            <CardSkill img={javascript} heading='Javascript' text='Menengah' />
            <CardSkill img={reactjs} heading='ReactJS' text='Pemula' />
            <CardSkill img={nodejs} heading='Node JS' text='Pemula' />
            <CardSkill img={javascript} heading='Javascript' text='Menengah' />
            <CardSkill img={reactjs} heading='ReactJS' text='Pemula' />
            <CardSkill img={nodejs} heading='Node JS' text='Pemula' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
