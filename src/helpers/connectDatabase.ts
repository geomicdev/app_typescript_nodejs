import mongoose from 'mongoose';

function getDatabaseUri() {
    if(process.env.NODE_ENV === 'production') return '';
    if(process.env.NODE_ENV === 'test') return 'mongodb://localhost/testing';
    return 'mongodb://localhost/app_typescript_node';
}

mongoose.connect(getDatabaseUri())
.then(() => console.log('Database connected'))
.catch(error => {
    console.log(error.message);
    process.exit(1);
});