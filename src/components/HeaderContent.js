import Button from "./Button";

const HeaderContent = () => {
  return (
    <>
      <h1 className='text-white text-3xl text-semibold font-mono w-8/12 mx-auto leading-relaxed'>Saya adalah seorang mahasiswa yang antusias dalam belajar pengembangan web</h1>
      <p className='text-white mt-6 leading-relaxed text-lg'>Saat ini saya sedang belajar TailwindCSS dan ReactJS</p>
      <Button transparent='bg-yellow-400 mt-10 border-none' />
    </>
  );
};

export default HeaderContent;
