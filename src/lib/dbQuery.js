import dbConnect from "./dbConnect";

async function dbQuery(collection, query) {
    conn = await dbConnect();

    return conn.collection(collection).find(query).toArray(function(err, result) {
        if(err) throw er

        return result;
    })
}

export default dbQuery