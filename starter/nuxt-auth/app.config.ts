export default defineAppConfig({
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
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
  },
});
