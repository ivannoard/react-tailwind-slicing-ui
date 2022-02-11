import NavItem from "./NavItem";

const Nav = () => {
  return (
    <ul className='flex justify-around'>
      <NavItem name='Profile' />
      <NavItem name='Projects' />
      <NavItem name='Skills' />
      <NavItem name='Contact' />
    </ul>
  );
};

export default Nav;
