import React from 'react'
import avatar from '../../assets/user-circle.svg';

const Dashboard = () => {
    const contacts = [
        {
            name: 'John',
            status: 'Available',
            img: avatar
        },
        {
            name: 'Mary',
            status: 'Available',
            img: avatar
        },
        {
            name: 'Alexander',
            status: 'Available',
            img: avatar
        },
        {
            name: 'Adam',
            status: 'Available',
            img: avatar
        },
        {
            name: 'Alex',
            status: 'Available',
            img: avatar
        },
        {
            name: 'Larry',
            status: 'Available',
            img: avatar
        }
    ];
    return (
        <div className='w-screen flex'>
            <div className='w-[25%] h-screen bg-secondary'>
                <div className='flex mx-14 items-center my-6'>
                    <img src={avatar} height={50} width={50} alt='' />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>Rahul</h3>
                        <p className='text-lg font-light'>My Account</p>
                    </div>
                </div>
                <hr />
                <div className='mx-14 mt-8'>
                    <div className='text-primary text-lg'>Messages</div>
                    <div>
                        {
                            contacts.map(({ name, img, status }) => {
                                return (
                                    <div className='flex  items-center py-4 border-b border-b-gray-300'>
                                        <div className='flex items-center cursor-pointer'>
                                            <img src={img} height={50} width={50} alt='' />
                                            <div className='ml-4'>
                                                <h3 className='text-lg font-semibold'>{name}</h3>
                                                <p className='text-sm font-light text-gray-600'>{status}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='w-[50%] h-screen'></div>
            <div className='w-[25%] h-screen'></div>
        </div>
    )
}

export default Dashboard;