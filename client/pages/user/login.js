import React from "react";

import redirect from "../../lib/utils/redirect";
import checkLogin from "../../lib/utils/checkLogin";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps(ctx) {
    const { me } = await checkLogin(ctx.apolloClient);

    if (me) redirect(context, "/");

    return { me };
  }

  render() {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-1/3">
          <h1>Register Form</h1>
        </div>
      </div>
    );
  }
}

export default LoginPage;
