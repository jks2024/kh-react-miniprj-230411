import React, {useState, useEffect } from 'react';
import AxiosApi from '../api/AxiosApi';
import Modal from '../utils/Modal';

const Home = () => {
    const [memberInfo, setMemberInfo] = useState("");

    useEffect(() => {
        const memberInfo = async() => {
            const rsp = await AxiosApi.memberGet("ALL"); // 전체회원 조회
            setMemberInfo(rsp.data);
            console.log(rsp.data);
        };
        memberInfo();
    }, []);

    return(
        <>
            {memberInfo && memberInfo.map(member => (
                <div key={member.id}>
                    <p>{member.id}</p>
                    <p>{member.name}</p>
                    <p>{member.email}</p>
                    <p>{member.join}</p>
                </div>
            ))}
        </>
    );

};
export default Home;