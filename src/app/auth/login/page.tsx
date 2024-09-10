import LoginForm from "@/components/auth/Login/LoginForm";

const LogIn = () => {
  return (
    <div className="min-h-[100vh] bg-[#59015efa] flex items-center justify-center">
      <div className="bg-[#623B81] px-12 py-14 rounded-2xl border-2 border-[#400c42]">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default LogIn;
