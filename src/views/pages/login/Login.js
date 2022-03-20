import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useState } from 'react'
import { supabase } from 'src/supabaseClient'

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email }, { shouldCreateUser: false })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleLogin} id="login">
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account using magic link</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        id="email"
                        placeholder="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/*<CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>*/}
              {/*  <CCardBody className="text-center">*/}
              {/*    <div>*/}
              {/*      <h2>Sign up</h2>*/}
              {/*      <p>*/}
              {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod*/}
              {/*        tempor incididunt ut labore et dolore magna aliqua.*/}
              {/*      </p>*/}
              {/*      <Link to="/register">*/}
              {/*        <CButton color="primary" className="mt-3" active tabIndex={-1}>*/}
              {/*          Register Now!*/}
              {/*        </CButton>*/}
              {/*      </Link>*/}
              {/*    </div>*/}
              {/*  </CCardBody>*/}
              {/*</CCard>*/}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )

  // return (
  //   <div className="row flex flex-center">
  //     <div className="col-6 form-widget" aria-live="polite">
  //       <h1 className="header">Supabase + React</h1>
  //       <p className="description">Sign in via magic link with your email below</p>
  //       {loading ? (
  //         'Sending magic link...'
  //       ) : (
  //         <form onSubmit={handleLogin}>
  //           <label htmlFor="email">Email</label>
  //           <input
  //             id="email"
  //             className="inputField"
  //             type="email"
  //             placeholder="Your email"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //           />
  //           <button className="button block" aria-live="polite">
  //             Send magic link
  //           </button>
  //         </form>
  //       )}
  //     </div>
  //   </div>
  // )
}

// const Login = () => {
//   return (
//     <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={8}>
//             <CCardGroup>
//               <CCard className="p-4">
//                 <CCardBody>
//                   <CForm>
//                     <h1>Login</h1>
//                     <p className="text-medium-emphasis">Sign In to your account</p>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>
//                         <CIcon icon={cilUser} />
//                       </CInputGroupText>
//                       <CFormInput placeholder="Username" autoComplete="username" />
//                     </CInputGroup>
//                     <CInputGroup className="mb-4">
//                       <CInputGroupText>
//                         <CIcon icon={cilLockLocked} />
//                       </CInputGroupText>
//                       <CFormInput
//                         type="password"
//                         placeholder="Password"
//                         autoComplete="current-password"
//                       />
//                     </CInputGroup>
//                     <CRow>
//                       <CCol xs={6}>
//                         <CButton color="primary" className="px-4">
//                           Login
//                         </CButton>
//                       </CCol>
//                       <CCol xs={6} className="text-right">
//                         <CButton color="link" className="px-0">
//                           Forgot password?
//                         </CButton>
//                       </CCol>
//                     </CRow>
//                   </CForm>
//                 </CCardBody>
//               </CCard>
//               <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
//                 <CCardBody className="text-center">
//                   <div>
//                     <h2>Sign up</h2>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//                       tempor incididunt ut labore et dolore magna aliqua.
//                     </p>
//                     <Link to="/register">
//                       <CButton color="primary" className="mt-3" active tabIndex={-1}>
//                         Register Now!
//                       </CButton>
//                     </Link>
//                   </div>
//                 </CCardBody>
//               </CCard>
//             </CCardGroup>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   )
//}

//export default Login
