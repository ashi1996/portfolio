import UsaImg from '../../assets/media/images/projects/usa-mortgages.jpg'
import AltshulerImg from '../../assets/media/images/projects/altshuler.jpg'
// import AltshulerImg from '../../assets/media/images/projects/alt.jpg'
import MyZoneImg from '../../assets/media/images/projects/my-zone.jpg'
import ThinkzImg from '../../assets/media/images/projects/thinkz.png'
import MobilabImg from '../../assets/media/images/projects/mobilab.jpg'
import FactoryImg from '../../assets/media/images/projects/factory.png'
import RavKavImg from '../../assets/media/images/projects/rav-kav.png'
import ZapImg from '../../assets/media/images/projects/zap.jpg'

export const ProjectsData = [
    {
        titel : 'usa mortgages',
        img : UsaImg,
        description: `As a full-stack developer at USA Mortgages, I participated in developing a proof-of-concept (PoC) application for granting mortgages to foreign residents. Using React, Tink's open banking API, and Node.js, I created an intuitive interface and ensured secure data access. It was a rewarding experience to contribute to a PoC solution that streamlined the mortgage process for foreign residents.`,
        // description: `asdsijijf dffjdnduif dfjidfidf dfjidfijidf dfijdfjdif dijdf dfidf df`,
        tags : ['TYPESCRIPT', 'tink open-banking',"EXPRESS", 'REACT',  ],
        link : 'https://www.usa-mortgages.com/'
    },
    {
        titel : 'zap group',
        img : ZapImg,
        description: `As a member of the development team at Zap Group, I play a significant role in constructing the e-commerce store "Narketplace." Leveraging my skills in React (Next.js) and Nest.js, I contribute to building a robust and feature-rich platform. integrating external stores into the Narketplace, enabling customers to conveniently make purchases through Zap Shop. Additionally, I have the opportunity to implement SAP, streamlining operational processes for efficient inventory management and order fulfillment. It is a rewarding experience to be part of the team that is constructing this Narketplace, striving to deliver a seamless shopping experience and optimize business operations for Zap Group.`,
        tags : ['react (next)', "node js (nest)", 'material-ui'],
        link : 'https://shop.zap.co.il'
    },
    {
        titel : 'Altshuler',
        img : AltshulerImg,
        description: `As a full-stack developer at Altshuler Shaham, I actively contributed to their website by implementing new features and performing maintenance tasks. One of the core areas I worked on was enhancing the management of pension portfolios for employees and employers. Utilizing technologies like React, Node.js with Nest.js, and TypeScript, I delivered optimized solutions that ensured a smooth user experience. It was a rewarding experience to be part of the team and contribute to the efficient management of pension portfolios for Altshuler Shaham's clients.`,
        tags : ['REACT', "node js (nest)", 'TYPESCRIPT',],
        link : 'https://www.as-invest.co.il'
    },
    {
        titel : 'my zone',
        img : MyZoneImg,
        description: `MyZone, a company focused on building educational games for children, I played a crucial role in developing the parent site interface. The main objective was to create a platform that would stimulate children's minds while providing a safe and engaging gaming experience. Using React for the front-end and Node.js with Nest.js and MySQL for the server-side, I contributed to building an intuitive and interactive interface for parents. It was an exciting opportunity to be part of a team that aimed to foster learning and creativity through innovative gaming solutions.`,
        tags : ['REACT', "NEST-JS", 'TYPESCRIPT', 'my-sql'],
        link : 'https://tomyzone.com'
    },
    {
        titel : 'thinkz',
        img : ThinkzImg,
        description: `At THINKZ, our main focus was to build a website that would provide users with up-to-date information about current affairs in their area. We collected data from various municipalities worldwide and presented a user-friendly navigation system. As part of the team, I contributed to building the interface using React with TypeScript and integrated Google Maps for seamless location-based functionality. On the server side, we utilized .NET to handle data processing and retrieval. It was an exciting project that aimed to empower users with localized information and enhance their overall browsing experience.`,
        tags : ['REACT', "google maps", 'TYPESCRIPT', '.net'],
        link : 'https://thinkz.ai'
    },
    {
        titel : 'Mobilab',
        img : MobilabImg,
        description: `At Mobilab, our primary goal was to develop a website that offered users the convenience of ordering smartphone device technicians to their homes with just one click. As part of the team, I had the opportunity to work on their website, where I implemented new features and performed maintenance tasks. For the user and admin panel, I utilized React with TypeScript, providing a seamless and intuitive experience. Additionally, for the technicians' interface, I leveraged React Native, ensuring efficient and user-friendly interactions. On the server side, we employed Java to handle the necessary functionalities. It was an exciting project that aimed to revolutionize the way smartphone repairs were accessed and delivered.`,
        tags : ['REACT', "react native", 'TYPESCRIPT', 'java'],
        link : 'https://orders.mobilab.co.il/'
    },
    {
        titel : 'factory 54',
        img : FactoryImg,
        description: `Factory 54 is an e-commerce company specializing in clothing and apparel. As a developer at Factory 54, I was involved in building their e-commerce website. Utilizing React and Material-UI, I crafted a visually appealing and user-friendly design that enhanced the shopping experience for customers. On the server side, we implemented the .NET framework to handle the website's backend operations efficiently. It was an exciting project that combined the power of modern front-end technologies with a robust server infrastructure to create a seamless and secure online shopping platform for Factory 54's customers.`,
        tags : ['REACT', ".net", 'material-ui'],
        link : 'https://www.factory54.co.il/'
    },
    {
        titel : 'top card & ort',
        img : RavKavImg,
        description: `At Top Cart & Ort, I had the privilege of developing a unified platform for public transportation in collaboration with the Department of Transportation, working closely with Moovit & Pango. Using React and TypeScript, I crafted a user interface that provided real-time transit information and seamless fare payment systems. On the backend, I leveraged Node.js with a microservices framework called Molecular to ensure scalability and flexibility. MongoDB was utilized as the database to handle the vast amount of transit data. It was an exciting project that aimed to revolutionize public transportation by offering a comprehensive and user-friendly platform.`,
        tags : ['react', "mongodb", 'node js (molecular)' , 'TYPESCRIPT'],
        link : ''
    },
]