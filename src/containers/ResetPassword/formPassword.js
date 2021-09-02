import React, { useState } from "react";
import Layout from "../../components/Layout";
import axios from "../../helpers/axios";
import { baseUrl } from "../../urlConfig";

const FormPassword = (props) => {
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [alert, setAlert] = useState("");

  const changePassword = (e) => {
    //console.log(e.target.value)
    const value = e.target.value;
    setPassword(value);
    if (!value) {
      setErrorPassword("Password tidak boleh kosong");
    } else {
      setErrorPassword("");
    }
  };

  const changePasswordConfirm = (e) => {
    //console.log(e.target.value)
    const value = e.target.value;
    setConfirmPassword(value);
    if (!value) {
      setErrorConfirmPassword("Password tidak boleh kosong");
      // jika password tidak sama
    } else if (password !== value) {
      setErrorConfirmPassword("password tidak valid");
    } else {
      setErrorConfirmPassword("");
    }
  };

  const simpanPassword = () => {
    const data = {
      password: password,
      token: props.match.params.token,
    };
    //mengambil parameter token
    //console.log(props.match.params.token)

    axios
      .post(`${baseUrl}/api/admin/forgot-password`, data)
      .then((res) => {
        //console.log(res)
        if (res) {
          setPassword("");
          setConfirmPassword("");
          setAlert("Password Berhasil di ganti");
        }
      });
  };

  return (
    <Layout>
      <div className="Row">
        <div className="col-md-6 offset-3" style={{
            marginTop: "60px",
            boxShadow: "0 2px 2px -2px #333",
          }}>
          <div className="card">
            <div className="card-body">
              {alert && <div className="alert alert-success">{alert}</div>}
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Masukan Password Baru"
                  value={password}
                  onChange={changePassword}
                />
                {/** error kosong */}
                {errorPassword && (
                  <p className="text-danger">{errorPassword}</p>
                )}
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Masukan Ulang Password Baru"
                  value={confirmPassword}
                  onChange={changePasswordConfirm}
                />
                {/** error kosong */}
                {errorConfirmPassword && (
                  <p className="text-danger">{errorConfirmPassword}</p>
                )}
              </div>
              <button className="btn btn-primary mt-3" onClick={simpanPassword}>
                Submit
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FormPassword;
