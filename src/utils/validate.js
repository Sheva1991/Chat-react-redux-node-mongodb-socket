export default ({ isAuth, values, errors }) => {

    const rules = {

        email: (value) => {
            if (!value) {
                errors.email = 'Required Email';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
            ) {
                errors.email = 'Invalid email address';
            }
        },
        password: (value) => {
            if (!value) {
                errors.password = 'Required password';
            } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i.test(
                value)) {
                errors.password = isAuth ? 'Invalid password' : 'Password is too light';
            }
        }
    }

    Object.keys(values).forEach(key => rules[key] &&
        rules[key](values[key]))

}
