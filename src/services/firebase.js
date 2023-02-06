import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs, query, where, addDoc, } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAtJWWXFa4k6RNrB8v03x7Vu8qFnhn_pkI",
  authDomain: "tecnologiascoder.firebaseapp.com",
  projectId: "tecnologiascoder",
  storageBucket: "tecnologiascoder.appspot.com",
  messagingSenderId: "133277566306",
  appId: "1:133277566306:web:6acc410212f543d697983b"
};

const app = initializeApp(firebaseConfig);

const DB = getFirestore(app)

export async function getSingleItem(id){
    let docRef = doc(DB, "data", id);
    
    let docSnapshot = await getDoc(docRef);

    let item = docSnapshot.data();
    item.id = docSnapshot.id;

    return item;
}

export async function getItems(){
    let collectionRef = collection(DB, "data")
    let docsSnapshot = await getDocs(collectionRef)
    let docsArray = docsSnapshot.docs;

    let dataDocs = docsArray.map (doc => {
        let item = doc.data()
        item.id = doc.id
        return item
    });
    return dataDocs;
}

export async function getItemsDescription(descripcionId){
    let collectionRef = collection(DB, "data")
    let q = query(collectionRef, where("descripcion", "==",descripcionId))
    let docsSnapshot = await getDocs(q)
    let docsArray = docsSnapshot.docs;

    let dataDocs = docsArray.map (doc => {
        let item = doc.data()
        item.id = doc.id
        return item
    });
    return dataDocs;
}

export async function createBuyOrder (order){
   const collectionRef = collection (DB, "orders");
   let newOrder = await addDoc(collectionRef, order);
   return newOrder.id;
}