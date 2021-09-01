import React, { useState } from "react";
import Layout from "../../components/Layout";
import axios from "../../helpers/axios";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");
  const changeEmail = (e) => {
    //console.log(e.target.value)
    setEmail(e.target.value);
    setError("");
  };

  const reset = () => {
    //console.log('tes reset');
    if (!email) {
      setError("email harus diisi");
    } else {
        axios.post('http://localhost:2000/api/admin/reset-password', {email: email})
        .then(res => {
            //console.log(res)
            setEmail('')
            setAlert('email berhasil')
            setTimeout(() => {
                setAlert('')
            }, 3000)
        })
    }
  };

  return (
    <Layout>
      <div className="Row">
        <div
          className="col-md-6 offset-3"
          style={{
            marginTop: "60px",
            boxShadow: "0 2px 2px -2px #333",
          }}
        >
          <div className="card p-4">
                          {/** Alert sukses */}
          {alert && (
              <div className="alert alert-success">
                <p>{alert}</p>
              </div>
            )}
            
            {/** Alert error */}
            {error && (
              <div className="alert alert-danger">
                <p>{error}</p>
              </div>
            )}
            <div className="card-body">
              <div className="form-group">
                <label>Reset Password</label>
                <input
                  type="text"
                  placeholder="Masukan Email"
                  className="form-control"
                  value={email}
                  onChange={changeEmail}
                />
              </div>
              <button className="btn btn-primary mt-3" onClick={reset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResetPassword;
