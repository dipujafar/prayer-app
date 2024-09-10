import ForgotPasswordForm from "@/components/auth/ForgotPassword/ForgotPasswordForm";


const ForgotPassword = () => {
  return (
    <div>
      <div className="min-h-[100vh] flex justify-center items-center bg-[#59015efa]">
      <div className="bg-[#623B81] px-12 py-24 rounded-2xl border-2 border-[#400c42]">
          <ForgotPasswordForm></ForgotPasswordForm>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
