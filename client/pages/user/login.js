import redirect from "../../lib/utils/redirect";
import checkLogin from "../../lib/utils/checkLogin";
import LoginForm from "../../components/user/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-1/3">
        <LoginForm />
      </div>
    </div>
  );
};

LoginPage.getInitialProps = async (ctx) => {
  const { me } = await checkLogin(ctx.apolloClient);

  if (me) redirect(ctx, "/");

  return { me };
};

export default LoginPage;
