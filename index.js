const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

    type User {
        resim: String
        ad: String
        soyad: String
        gorev: String
        mail: String
        telefon: String
        id: String
    }

    type Query {
        users: [User]
    }

`;


const users = [
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/39.jpg",
     "ad": "Merle",
     "soyad": "Thiel",
     "gorev": "Forward Division Administrator",
     "mail": "Sanford_Ondricka@gmail.com",
     "telefon": "457-904-3066 x5175",
     "id": "1"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/862.jpg",
     "ad": "Eula",
     "soyad": "Mertz",
     "gorev": "Chief Mobility Strategist",
     "mail": "Elijah_Monahan75@yahoo.com",
     "telefon": "(987) 423-5028 x512",
     "id": "2"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/378.jpg",
     "ad": "Newell",
     "soyad": "Williamson",
     "gorev": "Internal Functionality Orchestrator",
     "mail": "Kory.Goodwin69@gmail.com",
     "telefon": "568-896-9609",
     "id": "3"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/339.jpg",
     "ad": "Joelle",
     "soyad": "Tromp",
     "gorev": "Dynamic Intranet Producer",
     "mail": "Arlo74@yahoo.com",
     "telefon": "432-612-2640 x93150",
     "id": "4"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/111.jpg",
     "ad": "Chadd",
     "soyad": "Harris",
     "gorev": "Legacy Paradigm Analyst",
     "mail": "Shaniya_Langworth@hotmail.com",
     "telefon": "488-734-4872",
     "id": "5"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/731.jpg",
     "ad": "Clifton",
     "soyad": "Spencer",
     "gorev": "Dynamic Accounts Associate",
     "mail": "Vicente.Mohr28@gmail.com",
     "telefon": "686.650.2016 x29294",
     "id": "6"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/11.jpg",
     "ad": "Mitchel",
     "soyad": "Wolf",
     "gorev": "Human Metrics Producer",
     "mail": "Pinkie.Kirlin@hotmail.com",
     "telefon": "557-667-6501",
     "id": "7"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/471.jpg",
     "ad": "Cassie",
     "soyad": "Mraz",
     "gorev": "District Interactions Supervisor",
     "mail": "Jerad.Feil@yahoo.com",
     "telefon": "322-908-2883",
     "id": "8"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/192.jpg",
     "ad": "Oceane",
     "soyad": "Marvin",
     "gorev": "Principal Accounts Assistant",
     "mail": "Columbus.Hessel73@gmail.com",
     "telefon": "439.286.7182",
     "id": "9"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/850.jpg",
     "ad": "Kenny",
     "soyad": "King",
     "gorev": "Chief Accounts Supervisor",
     "mail": "Agustin80@gmail.com",
     "telefon": "(644) 210-9954",
     "id": "10"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/743.jpg",
     "ad": "Lorenza",
     "soyad": "Bartoletti",
     "gorev": "International Brand Assistant",
     "mail": "Emilio59@yahoo.com",
     "telefon": "1-952-563-9215 x88315",
     "id": "11"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/212.jpg",
     "ad": "Bradley",
     "soyad": "Baumbach",
     "gorev": "Dynamic Security Administrator",
     "mail": "Kirk_Maggio@yahoo.com",
     "telefon": "1-933-537-5591 x75256",
     "id": "12"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/913.jpg",
     "ad": "Randall",
     "soyad": "Flatley",
     "gorev": "International Configuration Analyst",
     "mail": "Coby92@gmail.com",
     "telefon": "792.596.3131 x80604",
     "id": "13"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/626.jpg",
     "ad": "Aileen",
     "soyad": "Nader",
     "gorev": "Principal Usability Coordinator",
     "mail": "Grady61@hotmail.com",
     "telefon": "1-472-522-2183",
     "id": "14"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/367.jpg",
     "ad": "Sim",
     "soyad": "Littel",
     "gorev": "Principal Paradigm Agent",
     "mail": "Landen_Hagenes58@hotmail.com",
     "telefon": "1-424-340-9463 x1076",
     "id": "15"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1185.jpg",
     "ad": "Zita",
     "soyad": "Hilll",
     "gorev": "Customer Interactions Planner",
     "mail": "Diego17@gmail.com",
     "telefon": "901.578.6603",
     "id": "16"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1140.jpg",
     "ad": "Joel",
     "soyad": "Johns",
     "gorev": "Dynamic Identity Strategist",
     "mail": "Antonio30@hotmail.com",
     "telefon": "501.655.9500 x51818",
     "id": "17"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/645.jpg",
     "ad": "Destany",
     "soyad": "Hahn",
     "gorev": "Forward Factors Assistant",
     "mail": "Keely.Ullrich@yahoo.com",
     "telefon": "(258) 607-2421 x2336",
     "id": "18"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/829.jpg",
     "ad": "Justina",
     "soyad": "Smith",
     "gorev": "Corporate Factors Agent",
     "mail": "Ezekiel83@gmail.com",
     "telefon": "(411) 807-5951",
     "id": "19"
    },
    {
     "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/341.jpg",
     "ad": "Juliana",
     "soyad": "Wilderman",
     "gorev": "Product Brand Designer",
     "mail": "Winona.Gislason28@yahoo.com",
     "telefon": "463.727.5978",
     "id": "20"
    }
   ]

const resolvers = {
    Query:{
        users: () => users
    }
}

const server = new ApolloServer({typeDefs, resolvers});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`
      🚀  Server is ready at ${url}
      📭  Query at https://studio.apollographql.com/dev
    `);
  });