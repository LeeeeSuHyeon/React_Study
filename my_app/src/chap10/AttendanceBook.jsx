import React from "react";

const students =[
    {
        name : "Sookyong",
        id : 1,
    },
    {
        name : "Steve",
        id : 2,
    },
    {
        name : "Bill",
        id : 3,
    },
    {
        name : "Jeff",
        id : 4,
    },
];

function AttendanceBook(props){
    return(
        <ul>
            {/* id를 키 값으로 사용
            {students.map((student)=>{
                return <li key = {student.id}>{student.name}</li>
            })} */}

            {/* 포멧팅 된 문자열을 키 값으로 사용
            {students.map((student, index)=>{
                return <li key = {`student-id-${student.id}`}>{student.name}</li>
            })} */}

            {/* 배열의 인덱스를 키 값으로 사용 */}
            {students.map((student, index)=>{
                return <li key = {index}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;