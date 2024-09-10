import SetNewPasswordForm from "@/components/auth/SetNewPassword/SetNewPasswordForm";

const SetNewPassword = () => {
  return (
    <div className="min-h-[100vh] bg-[#59015efa] flex items-center justify-center">
      <div className="bg-[#623B81] px-12 py-14 rounded-2xl border-2 border-[#400c42]">
        <SetNewPasswordForm></SetNewPasswordForm>
      </div>
    </div>
  );
};

export default SetNewPassword;
