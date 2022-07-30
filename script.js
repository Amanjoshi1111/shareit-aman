const File = require('./models/file');
const fs = require('fs');
const connectDB = require('./config/db');
connectDB();

async function fetchData() {
    //first we need to fetch 24 hours old files to delete
    const pastDate = new Date(Date.now() - 1000 * 60 * 60 * 24);
    const files = await File.find({ createdAt: { $lt: pastDate } });
    if (files.length) {

        for (const file of files) {
            try {
                fs.unlinkSync(file.path);
                await file.remove();
                console.log(`file deleted ${file.filename}`);
            }
            catch (err) {
                console.log(`error while deleting ${file.filename} ${err}`);
            }
        }
    }

    console.log('work is completed');
}

fetchData().then(process.exit);