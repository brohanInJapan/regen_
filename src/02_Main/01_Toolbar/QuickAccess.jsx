import FileBrokenIcon from "../../assets/FileBrokenIcon";

export function QuickAccess({ children }) {
  return <div className="quick-access">{children}</div>;
}

export function Profile({ user }) {
  return (
    <>
      <div className="btn-icon">
        <FileBrokenIcon fill_a="#fff" />
      </div>
      <p>{user.username ? `Hello, ${user?.username}` : "Username not set"} </p>
    </>
  );
}

export function Setting({ onClick }) {
  return <FileBrokenIcon className="can-click" onClick={onClick} size={24} />;
}

export function MapTest({ onClick }) {
  return <FileBrokenIcon className="can-click" onClick={onClick} size={24} />;
}
