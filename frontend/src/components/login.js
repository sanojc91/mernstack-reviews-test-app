import React, { useState} from "react";


const Login = props => {

  const initailUserState ={
    name: "",
    id: "",
  };

  const [user, setUSer] = useState(initailUserState);

  const handleInputChange = event => {
    const{name, value} = event.target;
    setUSer({ ...user, [name]:value });
  };

  const login = () => {
    props.login(user)
    props.history.push("/");
  }

  return (
    <div className="submit-form">
      <div>
        <div className="form-group">
          <lable htmlFor="user">UserName</lable>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            value={user.name}
            onChange={handleInputChange}
            name="name"
          />
        </div>
        <div className="form-group">
          <lable htmlFor="id">ID</lable>
          <input
            type="text"
            className="form-control"
            id="id"
            required
            value={user.id}
            onChange={handleInputChange}
            name="id"
          />
        </div>
        <button onClick={login} className="btn btn-success">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;