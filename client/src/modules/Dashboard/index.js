import React from 'react'
import avatar from '../../assets/user-circle.svg';
import Input from '../../components/input';

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
            <div className='w-[50%] h-screen bg-white flex flex-col items-center'>
                <div className='w-[75%] bg-secondary h-[80px] mt-14 rounded-full flex items-center px-14'>
                    <div><img src={avatar} alt='' width={60} height={60}/></div>
                    <div className='ml-6'>
                        <h3 className='text-lg'>Alexander</h3>
                        <p className='text-sm font-light text-gray-600'>online</p>
                    </div>
                    <div className='cursor-pointer'>
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-outgoing" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
								<line x1="15" y1="9" x2="20" y2="4" />
								<polyline points="16 4 20 4 20 8" />
							</svg>
						</div>
                </div>
                <div className='h-[75%] w-full overflow-y-scroll shadow-sm border-b'>
					<div className='p-14'>
						<div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and type setting industry.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and type setting industry.
                        </div>
                        <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and type setting industry.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and type setting industry.
                        </div>
                        <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and type setting industry.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and type setting industry.
                        </div>
                        <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and type setting industry.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and type setting industry.
                        </div>
                        <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and type setting industry.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and type setting industry.
                        </div>
					</div>
				</div>
                <div className='p-14 w-full flex items-center'>
                    <Input className='w-full' placeholder='type a message...' inputClassName="shadow-md p-4 border-0 rounded-full bg-light focus:ring-0 focus:border-0 outline-none"/>
                    <div className={`ml-4 p-2 cursor-pointer bg-light rounded-full ${ 'pointer-events-none'}`}>
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<line x1="10" y1="14" x2="21" y2="3" />
								<path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
							</svg>
						</div>
						<div className={`ml-4 p-2 cursor-pointer bg-light rounded-full ${ 'pointer-events-none'}`}>
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<circle cx="12" cy="12" r="9" />
								<line x1="9" y1="12" x2="15" y2="12" />
								<line x1="12" y1="9" x2="12" y2="15" />
							</svg>
						</div>
                </div>
            </div>
            <div className='w-[25%] h-screen bg-light px-8 py-16 overflow-y-scroll'>
				<div className='text-primary text-lg'>People</div>
				<div>
					{/* {
						users.length > 0 ?
							users.map(({ userId, user }) => {
								return (
									<div className='flex items-center py-8 border-b border-b-gray-300'>
										<div className='cursor-pointer flex items-center' onClick={() => fetchMessages('new', user)}>
											<div><img src={Img1} className="w-[60px] h-[60px] rounded-full p-[2px] border border-primary" /></div>
											<div className='ml-6'>
												<h3 className='text-lg font-semibold'>{user?.fullName}</h3>
												<p className='text-sm font-light text-gray-600'>{user?.email}</p>
											</div>
										</div>
									</div>
								)
							}) : <div className='text-center text-lg font-semibold mt-24'>No Conversations</div>
					} */}
				</div>
			</div>
        </div>
    )
}

export default Dashboard;