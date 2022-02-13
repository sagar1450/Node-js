const dbconnect = require('./mongodb')

const update = async () => {
    let db = await dbconnect();
    let data = await db.updateOne({ name: "pillu" }, { $set: { name: "sonu" } })

    console.log(data);
}

update();