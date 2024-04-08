import React from "react";

const AdminPage = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div>
                <h2>Data Entry</h2>
                <p>Use this section to enter new data into the system.</p>
                {/* Link or button to data entry form */}
            </div>
            <div>
                <h2>Add Admins</h2>
                <p>Grant admin privileges to existing users.</p>
                {/* Link or button to add admin form */}
            </div>
            <div>
                <h2>Edit Entries</h2>
                <p>Edit or delete existing entries.</p>
                {/* Link or button to edit entries form */}
            </div>
        </div>
    );
};

export default AdminPage;
