import TableUserPermissions from "./TableUserPermissions";

const UserPermissions = () => {
  return (
    <section id="general" className="mb-6 mt-4 mr-5 ml-5">
      <div className="border-b-2 pb-2 border-[#797979]">
        <h1 className="text-4xl text-white font-semibold mb-2">User Permissions</h1>
        <h3 className="text-xl text-white">Manage who has access in your system</h3>
      </div>
      <div className="mt-6">
        <TableUserPermissions />
      </div>
    </section>
  );
};

export default UserPermissions;
