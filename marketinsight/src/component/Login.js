const Login = () => {
  return (
    <>
      <div className="h-[650px] w-full bg-black flex flex-row justify-center items-center">
        <div className="h-96 w-96 flex flex-row justify-center items-center bg-white rounded-lg">
          <div className="flex flex-col">
            <h1 className="h-10 w-full text-3xl text-center font-bold">
              Login{" "}
            </h1>
            <div className="m-4 p-2">
              <label className="text-xs">Username</label>
              {/* <div class="h-1 w-1 bg-red-400 p-1 absolute box-border top-1/2 left-1 -translate-y-1/2 text-orange-200 ">
                asdf
              </div> */}
              <input
                type="text"
                className="h-8 w-full m- p-1 border-1 rounded-md"
                placeholder="Type your username"
              ></input>
              <label className="text-xs">Password</label>
              <input
                type="password"
                className="h-8 w-full m-1 px-2 border-1  rounded-md"
                placeholder="Type your password"
              ></input>
              <a>
                <h1 className="w-full text-xs text-right">Forget password?</h1>
              </a>
              <button className="h-8 w-full m-1 p-1 border-1 border-black bg-blue-300 rounded-xl ">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
