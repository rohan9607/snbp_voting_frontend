import axios from 'axios'
import React from 'react'
import Swal from 'sweetalert2';

const Card = ({student}) => {

    const voteCandidate = () =>{
        console.log({student});
        const object = {
            ...student,
            vote : student.vote + 1
        }
        axios.put(`${process.env.BASE_URL}/${student.section}/${student.id}`, object)
        .then(response => {
            Swal.fire({
                icon :"success",
                text : "Voted to " + student.student_name
            })
            setTimeout(() => {
                window.location.reload();
            }, 1000)

        })
    }
    return (
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0" key={student?.i}>
            <div className="card shadow-sm border-0 rounded">
                <div className="card-body p-0">
                    <img
                        src={student?.img}
                        alt=""
                        className="w-100 card-img-top"
                        height={200}
                        width={200}
                    />
                    <div className="p-4 d-flex flex-column justify-content-center align-items-center">
                        <h5 className="mb-0">{student?.student_name}</h5>
                        <div className='d-flex flex-column justify-content-start mt-2'>
                        <p className='p-0 m-0'>STD : {student?.std}</p>
                        <p className='p-0 m-0'>House : {student?.housename}</p>
                        <p className='p-0 m-0'>logo : {student?.logo}</p>
                        </div>
                        <button type="button" class="btn btn-primary mt-3" onClick={voteCandidate}>Vote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card