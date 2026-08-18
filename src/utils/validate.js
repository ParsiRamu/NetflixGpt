export const checkValidata = (email, password,Name) => {
  // Email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Password validation
  // At least:
  // 8 characters
  // 1 uppercase
  // 1 lowercase
  // 1 number
  // 1 special character
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    const nameRegex = /^[A-Za-z\s'-]+$/;

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);
  const isNameValid = nameRegex.test(Name)

  if (!isEmailValid) {
    return "Email ID is Not Valid";
  }

  if (!isPasswordValid) {
    return "Password must contain 8-15 characters, uppercase, lowercase, number and special character";
  }
  if(!isNameValid){
    return "Invalid Name Format"
  }

  return null;
};
