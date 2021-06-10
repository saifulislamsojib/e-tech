import React from 'react';
import Service from '../Service/Service';

const services = [
    {
        id: 1,
        title: 'Graphics Design',
        photo: 'https://www.totaljobs.com/advice/wp-content/uploads/graphic-designer-job-description-1024x576.jpg',
        price: 250,
        author: 'Junayed Khan',
        ratings: 4,
        subtitle: 'We are looking hardworking student for Graphics Design'
    },
    {
        id: 2,
        title: 'Web Design',
        photo: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16075/0717_Brutalist_and_Minimalist_Web_Design_Lina_Social-cbd0996a3f2bef8b9b10b86e0c4fb9e5.png',
        price: 300,
        author: 'Abul Meya',
        ratings: 4,
        subtitle: 'We are looking hardworking student for Web Design'
    },
    {
        id: 3,
        title: 'Web Development',
        photo: 'https://wallpaperaccess.com/full/1657878.jpg',
        price: 500,
        author: 'Chuton Kaka',
        ratings: 4,
        subtitle: 'We are looking hardworking student for Web Design'
    },
    {
        id: 4,
        title: 'Digital Marketing',
        photo: 'https://siit.com.bd/wp-content/uploads/2019/12/digital-markting.jpg',
        price: 480,
        author: 'Oikik Biswas',
        ratings: 4,
        subtitle: 'We are looking hardworking student for Web Design'
    },
    {
        id: 5,
        title: 'Facebook Marketing',
        photo: 'https://digitalprajna.com/wp-content/uploads/2018/02/Facebook-Marketing-768x432.png',
        price: 620,
        author: 'Kuddus Ali',
        ratings: 4,
        subtitle: 'We are looking hardworking student for Web Design'
    },
    {
        id: 6,
        title: 'Youtube Marketing',
        photo: 'https://one987creative.com/wp-content/uploads/2020/10/youtube-marketing.jpg',
        price: 360,
        author: 'Monir Khan',
        ratings: 4,
        subtitle: 'We are looking hardworking student for Web Design'
    },
    {
        id: 7,
        title: 'Ethical Hacking',
        photo: 'https://i.ytimg.com/vi/l77AgiphUQo/maxresdefault.jpg',
        price: 560,
        author: 'Rajib Boruwa',
        ratings: 4,
        subtitle: 'We are looking hardworking student for Web Design'
    }
];

const Services = () => {
    return (
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-10 gap-5">
            {
                services.map(service => <Service key={service.id} service={service} />)
            }
        </div>
    );
};

export default Services;