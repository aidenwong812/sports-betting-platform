import Link from "next/link"
import { useAuth } from "@/provider/AuthProvider"

const SignUp = ({ setOpenMenu }: { setOpenMenu: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { register, userEmail, setUserEmail, userName, setUserName, userPassword, setUserPassword } = useAuth()

  const handleSubmit = (event: React.FormEvent) => {
    setOpenMenu(false)
    register(event)
  }

  return (
    <>
      <div className="modal mylogin fade" id="exampleModal2" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="head">
                <h5>
                  Create New Account
                </h5>
                <p>
                  Already have an account? <Link href="#0" className="text-base">Login</Link>
                </p>
              </div>
            </div>
            <button type="button" className="btn-close cross-btn" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <div className="register-from">
                <form onSubmit={handleSubmit}>
                  <div className="items">
                    <div className="form-input">
                      <label htmlFor="username" className="form-label">Username</label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Your Username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="items">
                    <div className="form-input">
                      <label htmlFor="email33" className="form-label">Email</label>
                      <input
                        type="email"
                        id="email33"
                        name="email33"
                        placeholder="Your Email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="items">
                    <div className="form-input">
                      <label htmlFor="password-field" className="form-label">Password</label>
                      <div className="form-group">
                        <input
                          id="password-field2"
                          type="password"
                          className="form-control"
                          placeholder="Your Password"
                          name="password"
                          value={userPassword}
                          onChange={(e) => setUserPassword(e.target.value)}
                        />
                        <span id="#password-field2" className="fa fa-fw fa-eye field-icon toggle-password2"></span>
                      </div>
                    </div>
                  </div>
                  <div className="items">
                    <div className="check-area">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="ones1" />
                        <label className="form-check-label" htmlFor="ones1">
                          I certify that I am at least 18 years of age
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="ones2" />
                        <label className="form-check-label" htmlFor="ones2">
                          I agree to the <Link href="#0" className="text-base">Privacy Policy</Link>
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="ones3" />
                        <label className="form-check-label" htmlFor="ones3">
                          I want to receive <Link href="#0" className="text-base">news and offers</Link>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="items text-center">
                    <button type="submit" className="cmn--btn cd-popup-close repopup" data-bs-dismiss="modal" aria-label="Close">
                      <span>Start Playing</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp