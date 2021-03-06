export const validations = {
    emailValid(mail: string) {
        return (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail))
    },
    passValid(pass: string) {
        return (pass.length < 7)
    }
}
