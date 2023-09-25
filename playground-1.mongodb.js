// const collection = 'NEW_COLLECTION_NAME';

//CREATE DATABASE TEST
//USE TEST
//use("test");
//Apagando a collection antes de inserir novos dados.
//db.cardapio.drop();

//Código para criar uma nova collection
//db.createCollection("cardapio");

//Código para inserir vários dados em uma collection criada anteriormente
//db.cardapio.insertMany([
    //{nome:"Macarrão",preco:29.99,ingredientes:"Macarrão"},
    //{nome:"Strogonoff",preco:59.99,ingredientes:"Carne Wagyu e Arroz"},
    //{nome:"Pirão",preco:50,ingredientes:"Farinha, Frango Caipira, Arroz"},
    //{nome:"Rozcowvo",preco:29.99,ingredientes:"Ovo, Arroz, Feijão"},
    //{nome:"Prato do Dia",preco:10.99,ingredientes:"Arroz, Feijão e Bife"}
//])

//SELECT * FROM test.cardapio;

//No mongo para selecionar vamos usar o comando find

//devolve todos os dados da collection
//db.cardapio.find();

//Filtrando pelo nome
//SELECT * FROM cardapio where nome="Macarrão"; 
//db.cardapio.find({nome:"Macarrão"});

//Para selecionar as colunas usamos a projeção
//SELECT nome, preco FROM cardapio where nome="Macarrão"; 
//db.cardapio.find({nome:"Macarrão"},{nome:true,preco:true});

//FIND ({QUERY},{PROJEÇÃO})


//use("teretreino");
//db.createCollection("treino");

//db.treino.insertOne(
    //{
       // nome:"Peito e Biceps",
       // diaSemana:"Segunda",
       // exercicios:[
            //{
                //nome:"Supino",
               // serie:4,
                //repeticoes:15
            //},
            //{
                //nome:"Rosca Martelo",
                //serie:4,
                //repeticoes:15
            //},
            //{
                //nome:"Voador",
                //serie:4,
                //repeticoes:15
            //},
            //{
                //nome:"Rosca Scott",
                //serie:4,
                //repeticoes:15
            //},
            
        //]
    //}
//)
//db.treino.insertOne(
    //{
        //nome:"Costas e Tríceps",
        //diaSemana:"Quarta",
        //exercicios:[
            //{
                //nome:"Tríceps Polia",
                //serie:4,
                //repeticoes:15
            //},
            //{
                //nome:"Tríceps Corda",
                //serie:4,
                //repeticoes:15
            //},
            //{
                //nome:"Pull Down",
                //serie:4,
                //repeticoes:15
            //},
            //{
                //nome:"Remada Curvada",
                //serie:4,
                //repeticoes:15
            //},
            //{
                //nome:"Puxada Alta",
                //serie:4,
                //repeticoes:15
            //},
            //{
                //nome:"Remada Baixa",
                //serie:4,
                //repeticoes:15
//             }
//         ]
//     }
// )

// db.treino.insertOne(
//     {
//         nome:"Inferiores",
//         diaSemana:"Terca e Quinta",
//         exercicios:[
//             {
//                 nome:"Leg Press",
//                 serie:4,
//                 repeticoes:12
//             },
//             {
//                 nome:"Agachamento",
//                 serie:4,
//                 repeticoes:12
//             },
//             {
//                 nome:"Levantamento Terra",
//                 serie:4,
//                 repeticoes:12
//             },
//             {
//                 nome:"Panturrilha",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Cadeira Extensora ",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Cadeira Abdutora",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Cadeira Adutora",
//                 serie:4,
//                 repeticoes:15
//             }
            
//         ]
//     }
// )

// use ("teretreino");
// db.treino.find({_id:ObjectId('64f741e359ee1112358ffabb')})

// use("teretreino")
// db.treino.updateOne(
//     {_id:ObjectId('64f741e359ee1112358ffabd')}, 
// { 
//     $set:{
//         diaSemana:"Segunda",
//         nome: "Peito e Biceps A"
//     }
// } 
// )

// use ("teretreino");
// db.treino.updateOne(
//     {_id:ObjectId ("64f741e359ee1112358ffabd"), "exercicios.nome": "Voador"},
//     {
//         $set:{
//             "exercicios.$.nome":"Pack Deck"
//         }
//     }
// )

// use ("teretreino");
// db.treino.updateOne(
//     {_id:ObjectId ("64f741e359ee1112358ffabb"), "exercicios.nome": "Rosca Scott"},
//     {
//         $set:{
//             "exercicios.$.nome":"Rosca Scott",
//             "exercicios.$.serie": 5,
//             "exercicios.$.repeticoes":12
//         }
//     }
// )


use("db_patissier");
db.createCollection("cake");

db.cake.insertMany([
{
    _id:ObjectId ("111111111111"), 
    nome: "Bolo de Chocolate", 
    peso: "1,350Kg", 
    preco:99.70, 
    ingredientes:[
       {
        nome: "ovo",
        quantidade: 4
       },
       {
        nome: "acucar",
        quantidade: "2 xicaras"
       },
       {
        nome: "leite",
        quantidade: "200ml"
       },
       {
        nome: "chocolate",
        quantidade: "1 xicara"
       },
       {
        nome: "farinha de trigo",
        quantidade: "2 xicaras"
       },
       {
        nome: "fermento",
        quantidade: "1 colher de sopa"
       }
    ] 
},
{
    _id:ObjectId ("222222222222"), 
    nome: "Bolo de Cenoura", 
    peso: "1.950Kg", 
    preco: 70.00, 
    ingredientes:[
       {
        nome: "ovo",
        quantidade: 4
       },
       {
        nome: "acucar",
        quantidade: "2 xicaras"
       },
       {
        nome: "leite",
        quantidade: "200ml"
       },
       {
        nome: "cenoura",
        quantidade: "2 cenouras medias"
       },
       {
        nome: "farinha de trigo",
        quantidade: "2 xicaras"
       },
       {
        nome: "fermento",
        quantidade: "1 colher de sopa"
       }
    ] 
},
{
    _id:ObjectId ("333333333333"), 
    nome: "Bolo de Limão", 
    peso: "950g", 
    preco:60.00, 
    ingredientes:[
       {
        nome: "ovo",
        quantidade: 4
       },
       {
        nome: "acucar",
        quantidade: "2 xicaras"
       },
       {
        nome: "leite",
        quantidade: "200ml"
       },
       {
        nome: "limão",
        quantidade: "1/2 xicara de suco de limão"
       },
       {
        nome: "farinha de trigo",
        quantidade: "2 xicaras"
       },
       {
        nome: "fermento",
        quantidade: "1 colher de sopa"
       }
    ] 
},
{
    _id:ObjectId ("444444444444"), 
    nome: "Bolo de Trigo", 
    peso: "500g", 
    preco:40.00, 
    ingredientes:[
       {
        nome: "ovo",
        quantidade: 4
       },
       {
        nome: "acucar",
        quantidade: "2 xicaras"
       },
       {
        nome: "leite",
        quantidade: "200ml"
       },
       {
        nome: "farinha de trigo",
        quantidade: "2 xicaras"
       },
       {
        nome: "fermento",
        quantidade: "1 colher de sopa"
       }
    ] 
}]
)

use("db_patissier");
db.cake.deleteMany({_id:ObjectId("313131313131313131313131")});

use("db_patissier");
db.cake.find({}, {nome:true,preco:true});

use("db_patissier");
db.cake.find({preco: {$lte:70}}, {nome:true, preco:true});

use("db_patissier");
db.cake.updateOne(
    {_id:ObjectId("343434343434343434343434")},
    {
        $set:{
            nome: "Bolo de Maracuja",
            peso: "800g",
        },
        $push: {
            ingredientes: {
                nome: "Suco de maracujá",
                quantidade: "1 xicará de chá"
            },
          },
    }
)

use("db_patissier");
db.cake.updateOne(
    {_id:ObjectId("323232323232323232323232"), "ingredientes.nome": "acucar"},
    {
        $set:{
            "ingredientes.$.nome":"Ovo",
            "ingredientes.$.quantidade":"3 ovos"
  
        },
    }
)