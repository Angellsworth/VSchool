import PropTypes from "prop-types";

function AuthForm(props) {
  const { handleChange, handleSubmit, btnTxt, inputs, errMsg } = props;

  return (
    <form className="authForm" onSubmit={handleSubmit}>
      <br/>
      <input
        type="text"
        value={inputs.username}
        name="username"
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        value={inputs.password}
        name="password"
        onChange={handleChange}
        placeholder="Password"
        autoComplete="on"
      />
      <br />
      <br />
      <button className="authSubmitBtn">{btnTxt}</button>
      {errMsg && <p style={{color:"red", fontSize:"18px"}}>{errMsg}</p>}
    </form>
  );
}

// Define PropTypes for the AuthForm component
AuthForm.propTypes = {
  btnTxt: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  inputs: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  errMsg: PropTypes.string, // Define errMsg as an optional string prop
};

export default AuthForm;
