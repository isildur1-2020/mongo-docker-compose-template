db.createUser({
    user: 'YOUR_INIT_USERNAME',
    pwd: 'YOUR_INIT_PASSWORD',
    roles: [
        {
            role: 'readWrite',
            db: 'YOUR_DATABASE',
        },
    ],
});

