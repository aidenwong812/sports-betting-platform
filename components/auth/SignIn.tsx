import Link from "next/link"
import { useAuth } from "@/provider/AuthProvider"

const SignIn = ({ setOpenMenu }: { setOpenMenu: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { login, userEmail, setUserEmail, userPassword, setUserPassword } = useAuth()

  const handleSubmit = (event: React.FormEvent) => {
    setOpenMenu(false)
    login(event)
  }

  return (
    <div className="modal mylogin signup-popup fade" id="exampleModal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="head">
              <h5>
                Sign into your account
              </h5>
              <p>
                Don't have an account? <Link href="#0" className="text-base">Sign up</Link>
              </p>
            </div>
          </div>
          <button type="button" className="btn-close cross-btn" data-bs-dismiss="modal" aria-label="Close"></button>
          <div className="modal-body">
            <div className="register-from">
              <form onSubmit={handleSubmit}>
                <div className="items">
                  <div className="form-input">
                    <label htmlFor="email3" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email3"
                      name="email3"
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
                        id="password-field"
                        type="password"
                        className="form-control"
                        placeholder="Your Password"
                        name="password"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                      />
                      <span id="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                    </div>
                  </div>
                </div>
                <div className="items">
                  <div className="remember d-flex align-items-center justify-content-between">
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="flexCheckDefault22">
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault22" />
                        Remember me
                      </label>
                    </div>
                    <Link href="#0" className="forget">
                      Forget password?
                    </Link>
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
  )
}

export default SignIn