import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs, query, where, addDoc, } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAEY3HGkPUsxmHqFd5Fn1WZZOZBdCNPehA",
  authDomain: "tecnologiascoder-8ac85.firebaseapp.com",
  projectId: "tecnologiascoder-8ac85",
  storageBucket: "tecnologiascoder-8ac85.firebasestorage.app",
  messagingSenderId: "7236588504",
  appId: "1:7236588504:web:7bb0a412440cd66ebbd8ad",
  measurementId: "G-J5E9BZBC7K"
};
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export async function getSingleItem(id){
    let docRef = doc(DB, "products", id);
    
    let docSnapshot = await getDoc(docRef);

    let item = docSnapshot.data();
    item.id = docSnapshot.id;

    return item;
}

export async function getItems(){
    let collectionRef = collection(DB, "products")
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
    let collectionRef = collection(DB, "products")
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

//si quiero exportar de firebase: export async function exportItemsToFirestore(){
 async function exportItemsToFirestore(){
    const products = [
        {
           id: 1,
           stock: 3,
           img: "https://s3-sa-east-1.amazonaws.com/saasargentina/QJ0OrQ5jwk99GeywUA27/imagen",
           nombre: "PC Gamer Armada | AMD Ryzen 3 4350G + 8GB (2x4GB) + Radeon VEGA",
           descripcion: "Gama baja",
           discount: 23,
           price: 90000
        },
        {
            id: 2,
            stock: 3,
            img: "https://s3-sa-east-1.amazonaws.com/saasargentina/QJ0OrQ5jwk99GeywUA27/imagen",
            nombre: "PC Gamer Armada | AMD Ryzen 5 4650G + 8GB (2x4GB) + Radeon VEGA",
            descripcion: "Gama baja",
            price: 99999
         },
         {
            id: 3,
            stock: 3,
            img: "https://s3-sa-east-1.amazonaws.com/saasargentina/QJ0OrQ5jwk99GeywUA27/imagen",
            nombre: "PC Gamer Armada | AMD Ryzen 5 5600G + 8GB (2x4GB) + Radeon VEGA",
            descripcion: "Gama baja",
            price: 109000
         },
         {
            id: 4,
            stock: 3,
            img: "https://s3-sa-east-1.amazonaws.com/saasargentina/Vq0p7k37sIj6FKuymI5F/imagen",
            nombre: "PC Gamer Armada | Intel Core I3 10100F + 8GB + GTX 1660 6Gb Radeon VEGA",
            descripcion: "Gama media",
            price: 159000
         },
         {
            id: 5,
            stock: 3,
            img: "https://s3-sa-east-1.amazonaws.com/saasargentina/Vq0p7k37sIj6FKuymI5F/imagen",
            nombre: "PC Gamer Armada | AMD Ryzen 3 4100 + 8GB + GTX 1660 6Gb Radeon VEGA",
            descripcion: "Gama media",
            discount: 30,
            price: 179000
         },
         {
            id: 6,
            stock: 3,
            img: "https://s3-sa-east-1.amazonaws.com/saasargentina/Vq0p7k37sIj6FKuymI5F/imagen",
            nombre: "PC Gamer Armada | Intel Core I5 10400F + 8GB + GTX 1660 6Gb Radeon VEGA",
            descripcion: "Gama media",
            price: 185000
         },
         {
            id: 7,
            stock: 3,
            img: "https://s3-sa-east-1.amazonaws.com/saasargentina/IBUOZFOmoO5xGHpGo6fm/imagen",
            nombre: "PC Gamer Armada | Intel Core I5 10400F + 16GB (2x8GB) + RTX 3060 12Gb + 500GB",
            descripcion: "Gama alta",
            price: 255000
         },
         {
            id: 8,
            stock: 3,
            img: "https://s3-sa-east-1.amazonaws.com/saasargentina/IBUOZFOmoO5xGHpGo6fm/imagen",
            nombre: "PC Gamer Armada | Intel Core I5 10400F + 16GB (2x8GB) + RTX 3060 TI 8Gb + 500GB",
            descripcion: "Gama alta",
            price: 305000
         },
         {
            id: 9,
            stock: 3,
            img: "https://s3-sa-east-1.amazonaws.com/saasargentina/IBUOZFOmoO5xGHpGo6fm/imagen",
            nombre: "PC Gamer Armada | AMD Ryzen 5 5600X + 16GB (2x8GB) + RTX 3060 12Gb + 500GB NVME",
            descripcion: "Gama alta",
            discount: 15,
            price: 310000
         },
         {
          id: 10,
          stock: 5,
          img: "https://s3-sa-east-1.amazonaws.com/saasargentina/aPi4KipvaWsnT3BzWnQc/imagen",
          nombre: "Cooler CPU Cooler Master Hyper 212 Turbo ARGB Intel/AMD (1x12cm)",
          descripcion: "Componentes",
          discount:10,
          price: 10000
         },
         {
          id: 11,
          stock: 5,
          img: "https://s3-sa-east-1.amazonaws.com/saasargentina/43NOw4ooD3nbuU7keGDI/imagen",
          nombre: "Disco SSD M2 OFICIAL Western Digital Black 500Gb SN750 SE NVME 5000MB/S",
          descripcion: "Componentes",
          price: 15000
         },
         {
          id: 12,
          stock: 5,
          img: "https://s3-sa-east-1.amazonaws.com/saasargentina/njj5QXEkfPAf87yZY5k5/imagen",
          nombre: "Memoria RAM Corsair 16Gb (2x8Gb) DDR4 3200Mhz Vengeance RGB Pro Black",
          descripcion: "Componentes",
          price: 25000
         }
    ];

    const colectionRef = collection(DB, "products");

    for (let product of products){
        addDoc(colectionRef, product).then((respuesta) =>
            console.log("Item creado con el id->", respuesta.id)
        );
    }
}

export async function createBuyOrder (order){
   const collectionRef = collection (DB, "orders");
   let newOrder = await addDoc(collectionRef, order);
   return newOrder.id;
}
