export const login = (req, res) => {
  console.log("Login user");
  res.send("login user");
}

export const logout = (req, res) => {
  console.log("Logout user");
  res.send("logout user");
}

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender} = req.body;
  } catch (err) {
    
  }
}