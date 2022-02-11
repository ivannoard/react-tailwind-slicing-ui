const Button = ({ transparent }) => {
  const transparentBg = transparent;
  return <button className={`px-5 py-2 ${transparentBg} border-2  rounded-full`} >
    Hire Me
  </button >;
};

export default Button;
