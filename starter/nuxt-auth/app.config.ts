import {string, boolean, ref as YupRef} from 'yup';

export default defineAppConfig({
  auth: {
    logo: {
      enable: true,
      light: '/logo-type.svg',
      dark: '/logo-type-white.svg',
      alt: 'Logo',
      width: 80,
      height: 36,
    },
    redirect: {
      home: '/', // redirect to home page after login
    },
    login: {
      logo: true,
      head: {
        title: 'Login',
      },
      title: 'Login',
      description: 'Enter your username and password to login.',
      usernameProps: {
        label: 'Username',
        placeholder: 'Username',
      },
      passwordProps: {
        label: 'Password',
        placeholder: 'Password',
      },
      rememberMe: {
        enabled: true,
        label: 'Remember Me',
      },
      submitText: 'Login',
      submitProps: {
        color: 'primary',
        block: true,
      },
      forgotPasswordLinkText: 'Forgot Password?',
      registerLinkText: 'Register',
      registerText: "Don't have an account?",
      loginWithText: 'Login with',
      orText: 'or',
      providerButtonColors: {
        google: 'danger',
        facebook: 'primary',
        twitter: 'info',
        github: 'dark',
      } as Record<string, string>,
    },
    register: {
      head: {
        title: 'Register',
      },
      logo: true,
      title: 'Register',
      description: 'Enter your details to create your account.',
      buttonText: 'Register',
      buttonProps: {
        color: 'primary',
        block: true,
      },
      successMessage: 'Account created successfully.',
      loginButtonText: 'Back to Login',
      inputs: [
        {
          name: 'name',
          label: 'Name',
          placeholder: 'Name',
          validation: string().required(),
        },
        {
          name: 'email',
          label: 'Email',
          placeholder: 'Email',
          type: 'email',
          validation: string().email().required(),
        },
        {
          name: 'password',
          label: 'Password',
          placeholder: 'Password',
          type: 'password',
          validation: string().required(),
        },
        {
          name: 'password_confirmation',
          label: 'Password Confirmation',
          placeholder: 'Password Confirmation',
          type: 'password',
          validation: () =>
            string()
              .required()
              .oneOf([YupRef('password')], 'Password does not match'),
        },
        {
          name: 'agree_to_toc',
          label: 'Agree to Terms and Conditions',
          component: 'checkbox',
          validation: boolean().required(),
        },
      ],
    },
    forgotPassword: {
      logo: true,
      head: {
        title: 'Forgot Password',
      },
      title: 'Forgot Password',
      description: 'Enter your email address to reset your password.',
      buttonText: 'Reset Password',
      loginButtonText: 'Login',
      successMessage: 'Password reset email sent.',
      inputProps: {
        name: 'email',
        label: 'Email',
        placeholder: 'Email',
        type: 'email',
      },
      buttonProps: {
        type: 'submit',
        color: 'primary',
        block: true,
      },
    },
  },
});
