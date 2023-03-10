db.createUser(
    {
        user: "root",
        pwd: "msx-pass",
        roles: [
            {
                role: "readWrite",
                db: "test"
            }
        ]
    }
);