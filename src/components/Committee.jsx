import Banner from "./Banner";


const Committee = () => {
  // Array of roles and their respective buttons
  const roles = [
    { title: 'INTERNATIONAL ADVISORY COMMITTEE', prof : [ {
      id:1,
      name:"Prof. Anil Maheshwari",
      post: " Carleton University, Canada",
      
  },
  {
    id:2,
    name:"Prof. Deepti Mishra",
    post: "Norwegian University of Science and Technology, Norway",
  },
{
  id:3,
  name:"Prof. Alok Mishra,",
  post: "Atlin University, Turkey",
  
},
{
id:4,
name:"Prof. Ponnuthurai Nagaratnam Suganthan",
post: " NTU, Singapore",
},
{
  id:5,
  name:"Prof. Shangping Ren",
  post: "Illinois Institute of Technology, Chicago",
  
},
{
id:6,
name:"Prof. Subarna Shakya",
post: "Tribhuvan University, Nepal",
},
{
  id:7,
  name:"Prof. M. Sandirigam",
  post: "University of Peradeniya, Sri Lanka",
  
},
{
id:8,
name:"Prof. Mohammad Kaykobad",
post: "UET, Bangladesh",
},
{
  id:9,
  name:"Prof. Shankar P. Bhattacharyya",
  post: "Texas University, Texas",
  
},
{
id:10,
name:"Prof. Sayed sayeed Ahmad",
post: "AL Ghurair University Dubai, UAE",
},
{
  id:11,
  name:"Prof. Darvesh Kumar",
  post: "Cognizant technology solution Zurich, Switzerland",
  
},
{
id:12,
name:"Prof. Mohammad Husain",
post: "Islamic University of Madinah, Saudi Arabia",
},
{
id:13,
name:"Prof. Raj Jain",
post: "Washington University, St. Louis",

},
{
id:14,
name:"Prof. Laxmi N. Bhuyan",
post: "  University of California, California",
},
{
id:15,
name:"Prof. Rajkumar Buyya",
post: "The University of Melbourne, Australia",

},
{
id:16,
name:"Prof. Prasant Mohapatra",
post: "University of California, California",
},
{
id:17,
name:"Prof. Bidyut Gupta",
post: "Southern Illinois University, Carbondale",

},
{
id:18,
name:"Prof. Goutam Chakraborty",
post: "Iwate Prefectural University, Japan",
},
{
id:19,
name:"Prof. Joshua Thomas",
post: ", KDU University, Penang",

},
{
id:20,
name:"Prof. Mohan Gurusamy",
post: " NUS, Singapur",
},
{
  id:21,
  name:"Prof. Sanjay Madria",
  post: " Purdue University, USA",
  },
  {
  id:22,
  name:"Prof. Natarajan Meghanathan",
  post: ", Jackson State University, USA",
  
  },
  {
  id:23,
  name:"Dr. Rajnath Singh",
  post: "Crestron Electronics Inc., USA",
  },

]},
    
 
  ];
  const internetinol= [
    { title: 'CHIEF PATRON', prof : [ {
      id:1,
      name:"Prof. J.P. Pandey",
      post: "Hon’ble Vice Chancellor Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
      img:"https://aktu.ac.in/images/img/JP.jpg"
      
  },
]},
    { title: 'PATRON',

      prof : [ {
        id:1,
        name:"Dr. R.K Upadhyay",
        post: "Director KNIT, Sultanpur",
        img:"https://knit.ac.in/site/writereaddata/siteContent/202309141441549669director-new.jpg"
    },
  ]
    },
    { title: 'COORDINATORS',
      prof : [ {
        id:1,
        name:"Prof. Arvind Kumar Tiwari",
        post: "Professor & Head",
        img:"https://knit.ac.in/site/writereaddata/siteContent/202104241550311383Awadesh.jpg"
    },
  ]

     },
    { title: 'CONVENER', 
      prof : [ {
        id:1,
        name:"Prof. Sohit Shukla",
        // post: "Director KNIT, Sultanpur",
        img:"https://knit.ac.in/site/writereaddata/siteContent/202309141441549669director-new.jpg"
    },
    {
      id:2,
      name:"Prof. Babu Ram",
      // post: "Director KNIT, Sultanpur",
      img:"https://knit.ac.in/site/writereaddata/siteContent/202309141441549669director-new.jpg"
  },
  {
    id:3,
    name:"Prof. Nilesh Chandra",
    // post: "Director KNIT, Sultanpur",
    img:"https://knit.ac.in/site/writereaddata/siteContent/202309141441549669director-new.jpg"
},
  ]
     },
    { title: 'ORGANIZING SECRETARIES', 
      prof : [ {
        id:1,
        name:"Prof. Suman Pandey",
        // post: "Director KNIT, Sultanpur",
        // img:"https://knit.ac.in/site/writereaddata/siteContent/202309141441549669director-new.jpg"
    },
    {
      id:2,
      name:"Prof. Alka Singh",
      // post: "Director KNIT, Sultanpur",
      // img:"https://knit.ac.in/site/writereaddata/siteContent/202309141441549669director-new.jpg"
  },
  ]
     },
    { title: 'MEMBERS OF ORGANIZING COMMITTEE', 
      prof : [ {
        id:1,
        name:"Prof. A.K. Malviya",
        post: "Professor of Computer Science & Engineering",
        img:"https://knit.ac.in/site/writereaddata/siteContent/202104240959024358Malviya.jpg"
    },
    {
      id:2,
      name:"Prof. R. K. Singh",
      post: "Professor of Computer Science & Engineering",
      img:"https://knit.ac.in/site/writereaddata/siteContent/202104241550311695R-K-Singh.jpg"
  },
  {
    id:3,
    name:"Prof. Awadhesh Kumar",
    post: "Professor of Computer Science & Engineering",
    img:""
},
{
  id:4,
  name:"Prof. Abhay Kumar Agarwal",
  post: "Professor of Computer Science & Engineering",
  img:""
},
{
  id:5,
  name:"Prof. Kriti Chaurasia",
  post: "Professor of Computer Science & Engineering",
  img:""
},
{
id:6,
name:"Prof. Neha Pal",
post: "Professor of Computer Science & Engineering",
img:""
},
{
  id:7,
  name:"Prof. Sonam Arya",
  post: "Professor of Computer Science & Engineering",
  img:""
},
{
id:8,
name:"Dr. Amrendra Singh",
post: "Professor of Computer Science & Engineering",
img:""
},
{
  id:9,
  name:"Mr. Manoj Kumar",
  post: "Professor of Computer Science & Engineering",
  img:""
},
{
id:10,
name:"Prof. B. P. Chaurasia",
post: "Professor of Computer Science & Engineering",
img:""
},
{
  id:11,
  name:"Prof. Samir Srivastava",
  post: "Professor of Computer Science & Engineering",
  img:""
},
{
id:12,
name:"Prof. D. L. Gupta",
post: "Professor of Computer Science & Engineering",
img:""
},
{
  id:13,
  name:"Prof. Aruni Singh",
  post: "Professor of Computer Science & Engineering",
  img:""
},
{
id:14,
name:"Prof. Dhirendra Kumar",
post: "Professor of Computer Science & Engineering",
img:""
},
{
  id:15,
  name:"Prof. Garima Yadav",
  post: "Professor of Computer Science & Engineering",
  img:""
},
{
id:16,
name:"Prof. Atul Lal Srivastava",
post: "Professor of Computer Science & Engineering",
img:""
},
{
  id:17,
  name:"Prof. Rajneesh Kumar",
  post: "Professor of Computer Science & Engineering",
  img:""
},
{
id:18,
name:"Mr. Amit Shukla",
post: "Professor of Computer Science & Engineering",
img:""
},
  ]
     },
  ];

  return (
    <>
    <Banner/>
    <div id="committee" className="min-h-screen p-2 lg:p-4  justify-center">
      <div className=" w-full bg-white p-6 shadow-md rounded-md">
        <h2 className="text-2xl text-yellow-600  text-center mb-6">COMMITTEE</h2>
        <hr  className="border-1 w-1/2 mx-auto border-yellow-600  mb-6"/>
        {roles.map((role, index) => (
          <div className="mb-6" key={index}>
            <h3 className=" text-red-600 font-semibold text-start text-lg mb-5">{role.title}</h3>
            <div className={`grid grid-cols-2 gap-4`}>

                   {role.prof.map((currSpeaker) => (
                    <div
                      key={currSpeaker.id}
                      className="bg-cyan-700 rounded-lg shadow-lg p-6 flex flex-col items-center"
                    >

                      <p className="text-yellow-300 font-semibold">
                        {currSpeaker.name}
                      </p>
                      <p className="text-gray-300 text-sm">{currSpeaker.post}</p>
                    </div>
                  ))}
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full bg-white p-6 shadow-md rounded-md">
        <h2 className="text-2xl text-yellow-600  text-center mb-6">STEERING COMMITTEE</h2>
        <hr  className="border-1 w-1/2 mx-auto border-yellow-600  mb-6"/>
        {internetinol.map((internetinol, index) => (
          <div className="mb-6" key={index}>
            <h3 className="text-red-700  font-semibold text-start text-lg mb-5">{internetinol.title}</h3>
            <div className={`grid grid-cols-2 gap-4`}>

                   {internetinol.prof.map((currSpeaker) => (
                    <div
                      key={currSpeaker.id}
                      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
                    >
                      <div className="w-24 h-24 bg-gray-200 rounded-full mb-4">
                        <img
                          className="w-24 h-24 rounded-full"
                          style={{ objectFit: "cover" }}
                          src={currSpeaker.img}
                        />
                      </div>
                      <p className="text-yellow-700 font-semibold">
                        {currSpeaker.name}
                      </p>
                      <p className="text-gray-500 text-sm">{currSpeaker.post}</p>
                    </div>
                  ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Committee;
