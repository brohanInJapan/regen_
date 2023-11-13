import { From, InputField } from "../../03_Generic/From";

export function ProfileSettings({ className, user }) {
  return (
    <div className={className}>
      <h2>Profile</h2>
      <div className="indent">
        <section>
          <ProfileDetails user={user} />
          <From className={"container-form"}>
            <InputField
              className={"container-label"}
              label={"First Name"}
              placeholder={"First Name"}
              id={"userName"}
            />
            <InputField
              className={"container-label"}
              label={"Last name"}
              placeholder={"Last name"}
              id={"userLastName"}
            />
            <InputField
              className={"container-label"}
              type={"tel"}
              label={"Contact number"}
              placeholder={"000 000 0000"}
              id={"userContact"}
            />
          </From>
        </section>
        <section>
          <ResetPasswordSettings />
          <From className={"container-form"}>
            <InputField
              className={"container-label"}
              type={"password"}
              label={"Current Password"}
              placeholder={"・・・・・・・・"}
              id={"currentPassword"}
            />
            ‎
            <InputField
              className={"container-label"}
              type={"password"}
              label={"New Password"}
              placeholder={"・・・・・・・・"}
              id={"newPassword"}
            />
            <InputField
              className={"container-label"}
              type={"password"}
              label={"Confirm New Password"}
              placeholder={"・・・・・・・・"}
              id={"confirmPassword"}
            />
            ‎<button className="btn">submit</button>
          </From>
        </section>
      </div>
    </div>
  );
}
function ProfileDetails({ user }) {
  return (
    <section className="profile-picture-settings">
      <img className="btn-icon" src={user?.image} alt="" />
      <div>
        <h3>
          {user?.name || "Name not set"} {user?.surname}
        </h3>
        <p>
          {user?.email || "No email found"} |{" "}
          {user?.username || "Username not set"}
        </p>
        <span>
          To change email or username, please contact the administrator
        </span>
      </div>
    </section>
  );
}

function ResetPasswordSettings({ className }) {
  return (
    <div className={className}>
      <h3>Reset Password</h3>
      <p>Please follow this guide for a strong password:</p>
      <ul>
        <li>One special character</li>
        <li>Min 6 characters</li>
        <li>One number (2 are recommended)</li>
      </ul>
    </div>
  );
}
