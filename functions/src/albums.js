import dbConnect from "./dbConnect.js";
export function getAllAlbums(req, res) {
    const db = dbConnect()
    db.collection('albums').get()
    // .then(collection => {
    //     const albumArr = collection.docs.map(doc => {
    //         let album = doc.data()
    //         return album
    //     })
    // })
    .then(collection => {
        const albumsArr = collection.docs.map(doc => {
        
            return {...doc.data(), albumId: doc.id}
        })
        res.send(albumsArr)
    })
    .catch(err => res.status(500).send({ success: false, message: err}))
}    
export function createNewAlbum(req,res) {
    const db = dbConnect()
    db.collection('albums').add(req.body)
    .then(doc => res.status(201).send({ success: true, message: 'Album created:' + doc.id }))
    .catch(err => res.status(500).send({ success: false, message: err}))
};

export async function deleteAlbum(req, res) {
    const { albumId } = req.params
    const db = dbConnect()
    const doc = await db.collection('albums').doc(albumId).delete()
        .then(()  => { 
            console.log("album Delete");})
        .catch(err => res.status(500).send({ success: false, message: err }))
    res.status(202).send({ success: true, message: 'album Deleted' })
}
