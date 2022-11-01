import { initializeApp, cert, getApp } from "firebase-admin/app"
import {getFirestore} from "firebase-admin/firestore"
import secrets from '../secrets.js'

export default function dbConnect(){
    if(!getApp.length) {
        initializeApp({
            credential: cert(secrets)
        })
    }
}
return