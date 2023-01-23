import {string, boolean, ref} from 'yup';

export default defineAppConfig({
  auth: {
    redirect: {
      home: '/',
    },
    head: {
      login: {
        title: 'Login',
      },
      protected: {
        title: 'Protected',
      },
      forgotPassword: {
        title: 'Forgot Password',
      },
      register: {
        title: 'Register',
      },
    },
    login: {
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
        enable: true,
        label: 'Remember Me',
      },
      buttonText: 'Login',
      buttonProps: {
        color: 'primary',
        block: true,
      },
      forgotPasswordLinkText: 'Forgot Password?',
      registerLinkText: 'Register',
      registerText: "Don't have an account?",
      loginWithText: 'Login with',
      orText: 'or',
    },
    forgotPassword: {
      title: 'Forgot Password',
      description:
        "Enter your email address and we'll send you a link to reset your password.",
      inputProps: {
        label: 'Email',
        placeholder: 'Email',
      },
      buttonText: 'Send Password Reset Link',
      buttonProps: {
        color: 'primary',
        block: true,
      },
      successMessage: 'Password reset link sent to your email.',
      loginButtonText: 'Back to Login',
    },
    register: {
      title: 'Register',
      description: 'Enter your details to create your account.',
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
          validation: string()
            .required()
            .oneOf([ref('password')], 'Password does not match'),
        },
        {
          name: 'agree_to_toc',
          label: 'Agree to Terms and Conditions',
          component: 'checkbox',
          validation: boolean().required(),
        },
      ],
      buttonText: 'Register',
      buttonProps: {
        color: 'primary',
        block: true,
      },
      successMessage: 'Account created successfully.',
      loginButtonText: 'Back to Login',
    },
    providerButtonColors: {
      github: 'dark',
    } as Record<string, string>,
  },
});
