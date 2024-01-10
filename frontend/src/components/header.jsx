import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useLogoutMutation } from '../store/slice/userApiSlice'
import { logout } from '../store/slice/authSlice'
import { toast } from 'react-toastify'

const Header = () => {
    const { userInfo } = useSelector((state) => state.auth)

    const [logoutApiCall] = useLogoutMutation()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap()
            dispatch(logout())
            navigate('/')
        } catch (err) {
            toast.error(err?.data?.message)
        }
    }

    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>MERN Auth</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            {
                                userInfo ? (
                                    <>
                                        <NavDropdown title={userInfo.name} id='username'>
                                            <LinkContainer to='/profile'>
                                                <NavDropdown.Item>
                                                    Profile
                                                </NavDropdown.Item>
                                            </LinkContainer>
                                            <NavDropdown.Item onClick={logoutHandler}>
                                                Log Out
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </>
                                ) : (
                                    <>
                                        <LinkContainer to='/login'>
                                            <Nav.Link>
                                                <FaSignInAlt /> Sign In
                                            </Nav.Link>
                                        </LinkContainer>

                                        <LinkContainer to='/register'>

                                            <Nav.Link>
                                                <FaSignOutAlt /> Sign Up
                                            </Nav.Link>
                                        </LinkContainer>
                                    </>
                                )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    )
}

export default Header