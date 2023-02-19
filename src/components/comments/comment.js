import Image from "next/image"

export default function Comment({username, userPicture, comment, timeposted}){
    return(
        <div className="bg-white rounded-lg flex border border-gray-300 p-1 text-[12px]">
            <Image src = {userPicture} width = {75} height = {75} className='rounded-full'/>
            <div>
                <div className = 'flex justify-between gap-3'>
                    <p className = 'block'>{username}</p>
                    <p className = 'block'>{timeposted}</p>
                </div>
                <p>{comment}</p>
            </div>
        </div>
    )
}