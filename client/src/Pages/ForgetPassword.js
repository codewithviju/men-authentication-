import React, { useState } from "react";
import axios from "../Services/axiosInterceptor";
const ForgetPassword = () => {
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("/api/auth/forget-password", { email });

    if (res) {
      alert("email Sent");
    }
  };

  return (
    <section class="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style={{ borderRadius: "1rem" }}>
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    class="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <i
                          class="fas fa-cubes fa-2x me-3"
                          style={{ color: " #ff6219" }}
                        ></i>
                        <span class="h1 fw-bold mb-0">Forget Password?</span>
                      </div>

                      <h5
                        class="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Type Your Email Here
                      </h5>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id=""
                          placeholder="Enter New Password"
                          class="form-control form-control-lg"
                          name="newPassword"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div class="pt-1 mb-4">
                        <button
                          class="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Send Email
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
