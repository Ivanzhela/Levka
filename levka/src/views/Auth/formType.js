import { required, minLength, maxLength, sameAs } from "@vuelidate/validators";

export default {
  formData: {
    login: {
      username: "",
      password: "",
      terms: false,
    },
    register: {
      username: "",
      password: "",
      rePass: "",
      terms: false,
    },
  },
  validator(password, formType) {
    const data = {
      formData: {
        login: {
          username: {
            required,
            minLengthValue: minLength(4),
            maxLengthValue: maxLength(20),
          },
          password: {
            required,
            minLengthValue: minLength(6),
            maxLengthValue: maxLength(20),
          },
          terms: {
            accepted: (val) => val === true,
          },
        },
        register: {
          username: {
            required,
            minLengthValue: minLength(4),
            maxLengthValue: maxLength(20),
          },
          password: {
            required,
            minLengthValue: minLength(6),
            maxLengthValue: maxLength(20),
          },
          rePass: {
            required,
            minLengthValue: minLength(6),
            maxLengthValue: maxLength(20),
            confirmPass: sameAs(password),
          },
          terms: {
            accepted: (val) => val === true,
          },
        },
      },
    };
    return Object.assign(
      {},
      { formData: { [formType]: data["formData"][formType] } }
    );
  },
};
