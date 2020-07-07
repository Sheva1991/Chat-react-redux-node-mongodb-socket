import React from 'react'
import './HomePage.scss'
import Message from '../../components/Message/Message'
import Dialogs from '../../components/Dialogs/Dialogs'
const user_avatar = require('../../assets/images/myface.png')



const HomePage = () => {
    return (
        <section className='home'>
            <Dialogs userId={1} items={[{
                _id: Math.random(),
                text: 'Some text',
                isReaded: false,
                createdAt: new Date(2020, 5, 11),
                user: {
                    _id: 1,
                    fullname: 'Vlad',
                    avatar: null
                },

            },
            {
                _id: Math.random(),
                text: 'Some text also here',
                isReaded: false,
                createdAt: new Date(2020, 6, 7, 22, 14),
                user: {
                    _id: 2,
                    fullname: 'Liza',
                    avatar: 'https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg'
                },

            }
            ]} />
            <Message avatar={user_avatar}
                text='hi bro ' date='Fri Jun 19 2020 15:24:24'
                user={{ fullname: 'Vladislav Shevchenko' }}
            />
            <Message avatar={user_avatar}
                text='hello mister Smit ' date='Fri Jun 19 2020 15:34:24'
                user={{ fullname: 'Neo' }}
                isMe={true}
                isReaded={true}
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://yt3.ggpht.com/a/AATXAJzN14Z-a_MoxvJ17eSgQgiaOoih-HkjejtouQ=s100-c-k-c0xffffffff-no-rj-mo'
                    },
                    {
                        filename: 'image1.jpg',
                        url: 'https://yt3.ggpht.com/a/AATXAJyNuUK8vokzOX77sVxSXl_gOTV64vOQ1I85-w=s100-c-k-c0xffffffff-no-rj-mo'
                    },
                    {
                        filename: 'image3.jpg',
                        url: 'https://abc-decor.com/img/gallery/23/thumbs/thumb_l_2612.jpg'
                    },
                ]} />
            <Message avatar={user_avatar}
                isTyping
            />
            <Message avatar={user_avatar}
                date='Fri Jun 19 2020 15:34:24'
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://yt3.ggpht.com/a/AATXAJzN14Z-a_MoxvJ17eSgQgiaOoih-HkjejtouQ=s100-c-k-c0xffffffff-no-rj-mo'
                    }
                ]} />
            <Message avatar={user_avatar}
                date='Fri Jun 19 2020 15:34:24'
                audio={true} />
        </section>
    )
}


export default HomePage
