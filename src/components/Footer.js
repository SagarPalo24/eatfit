import { FaFacebook,FaInstagram,FaTwitter,FaTwitch,FaGithub } from "react-icons/fa6";

const items =[
        {
            name:'Facebook',
            icon:FaFacebook ,
            link:'https://facebook.com/'
        },
        {
            name:'Instagram',
            icon:FaInstagram ,
            link:'https://instagram.com/'
        },      
         {
            name:'Twitter',
            icon:FaTwitter ,
            link:'https://twitter.com/'
        },
        {
            name:'Twitch',
            icon:FaTwitch ,
            link:'https://twitch.com/'
        },
        {
            name:'Github',
            icon:FaGithub ,
            link:'https://github.com/'
        }
    ]
const footer =() =>{
	return(
        <>
          <div className=" footer w-full   text-gray-300 py-y px-2">
              <div className="max-w-[full] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
                <ul className="py-1 text-gray-500 hover:text-white cursor-pointer">
                    <h5 className="text-white">SOLUTIONS</h5>
                    <li className="footer">Marketing</li>
                    <li>Analytics</li>
                    <li>Commerce</li>
                    <li>Data</li>
                    <li>Cloud</li>
                </ul>
                
                <ul className="py-1 text-gray-500 hover:text-white cursor-pointer">
                    <h5 className="text-white">SUPPORT</h5>
                    <li>Pricing</li>
                    <li>Documantation</li>
                    <li>Guides</li>
                    <li>API</li>
                    <li>Status</li>
                </ul>
               
                <ul className="py-1 text-gray-500 hover:text-white cursor-pointer">
                    <h5 className="text-white">COMPANY</h5>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Partners</li>
                </ul>
                <ul className="py-1 text-gray-500 hover:text-white cursor-pointer">
                    <h5 className="text-white">LEGAL</h5>
                    <li>Claims</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Policies</li>
                    <li>Conditions</li>
                </ul>

                <div className="col-span-2 pt-8 md:pt-2">
                    <p className="font-semibold uppercase">
                    Subscribe to our Restaurant
                    </p>
                    <p className="py-4">
                    The latest updates,restaurants and locations,sent to your inbox</p>
                    <form className="flex flex-col sm:flex-row ">
                        <input type="email" placeholder="Enter email address"
                               className=" w-full p-2 mr-2 rounded-md mb-4"/>
                        <button className="p-2 mb-4">Suscribe </button>
                    </form>

                </div>
               
                </div>
                <div className="  flex flex-col max-w-full px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500  ">
                    <p className="py-4">
                        2024 @smart restaurants, LLC. All rights reserved.
                        </p>
                        <div className="flex justify-between sm-w-[300px] pt-4 text-2xl gap-3 pr-5">
                        {
                            items.map((x,index)=>{
                            return<x.icon key={index} className="hover:text-white cursor-pointer"/>
                            })
                        }
                </div>
              </div>
               
          </div>
        </>
        );
}
export default footer;