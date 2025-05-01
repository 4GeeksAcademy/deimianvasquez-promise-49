// // Tiene un solo hilo de ejecución

// // console.log("hot dog 1")
// // function hotDogFourt() {
// //     console.log("Hot dog 4")
// // }

// // setTimeout(() => {
// //     console.log("Arroz con pollo")
// // }, 0)

// // console.log("hot dog 2")
// // hotDogFourt()
// // console.log("hot dog 3")



// // const promise = new Promise((resolve, reject) => {
// //     const randomNum = Math.floor(Math.random() * 10)

// //     setTimeout(() => {

// //         if (randomNum % 2 == 0) {
// //             resolve(`Este es el número ${randomNum}`);
// //         } else {
// //             reject(`Este es el número rechazado ${randomNum}`);

// //         }


// //     }, 500)

// // })


// // promise
// //     .then((response)=> console.log(response))
// //     .catch((error)=> console.log(error))
// //     .finally(()=> console.log("Me ejecuto siempre :)"))


// // console.log("Me sigo ejecutando")


// function paso1() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Paso 1 completado ✅");
//             resolve();
//         }, 500);
//     });
// }

// function paso2() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Paso 2 completado ✅");
//             resolve();
//         }, 1000);
//     });
// }

// function paso3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
           
//             reject("Paso 3 completado ✅");
//         }, 600);
//     });
// }

// paso1()
//     .then((response)=> {return paso2()} )
//     .then((response)=> paso3())
//     .catch((err)=> console.log(err))

// // paso1()
// //     .then((response) => response)
// //     .catch((err)=> console.log(rer) )

// // paso2()
// //     .then((response) => response)
// //     .catch((err)=> console.log(err) )

// // paso3()
// //     .then((response) => console.log(response))
// //     .catch((err)=> console.log(err) )


// function saluda(){
//     console.log("Hola ¿qué tal?")
// }


// // // async await
// async function ejecutarTareas(){
//     try {

//         await paso1()
//         saluda()
//         await paso2()
//         await paso3()
        
//     } catch (error) {
//         console.log(error)
//     }
// }

// ejecutarTareas()

function promise1() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("Estoy resuelta como 1");

        }, 1000);

    });

}

function promise2() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("Estoy resuelta como 2");

        }, 2000);

    });

}

function promise3() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("Estoy resuelta como 3");

        }, 3000);

    });

}

async function handlingAllPromises() {

    // let first = await promise1();
    // let second = await promise2();
    // let third = await promise3();

    // let [first, second, third] = await Promise.all([promise1(), promise2(), promise3()]);

    let result = await Promise.race([promise1(), promise2(), promise3()])
    console.log(result) 
  

    // console.log(first);
    // console.log(second);
    // console.log(third);

}

handlingAllPromises();