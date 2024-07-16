import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between mx-4 p-4 items-center border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge cafe</h1>
            <img src={profile} alt="Profile imgage" />
        </div>
    );
};

export default Header;