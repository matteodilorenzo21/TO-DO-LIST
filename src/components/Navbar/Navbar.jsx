import './Navbar.scss'
import HomeIcon from '@mui/icons-material/Home';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function Navbar() {
    return (
        <nav id='main-nav' className='flex items-center justify-center h-screen px-5'>

            <div className='container flex items-center     justify-center h-screen'>
                <div id='navbar-logo' className='basis-1/3 flex'>
                    <h1 className='select-none'>
                        <span className='text-white'>TO</span>
                        <span style={{ color: '#EEBE22' }}>DO</span>
                        <span className='text-white'>LIST</span>
                        <span className='text-sm text-gray-300 '>v 1.0.1</span>
                    </h1>
                </div>

                <div id='navbar-actions' className='basis-1/3'>
                    {/* <ul className='flex w-full justify-center items-center'>
                        <li className='mx-2 flex items-center justify-center'>
                            <a href="#" className='flex items-center'>
                                <span className='mr-1'>Da Fare</span>
                                <ContentPasteIcon />
                            </a>
                        </li>
                        <li className='mx-2 flex items-center justify-center'>
                            <a href="#" className='flex items-center'>
                                <span className='mr-1'>Filtra</span>
                                <FilterAltIcon />
                            </a>
                        </li>
                    </ul> */}
                </div>

                <div className='basis-1/3'></div>
            </div>

        </nav >
    )
}

export default Navbar