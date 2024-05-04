export const checkValidateData = (email,password,name)=> {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name)

    if(!isEmailValid) return "This is Invalid email"
    if(!isPasswordValid) return "This is not a Valid Password"
    if(!isNameValid) return "This is not a Valid Name"

    return null
}