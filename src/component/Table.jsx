import React from 'react'

const Table = ({ data }) => {
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr className='bg-primary'>
                        <th scope="col">No</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">House</th>
                        <th scope="col">STD</th>
                        <th scope="col">Logo</th>
                        <th scope="col">Vote</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.length > 0 && data?.map((row, i) => (

                            <tr>
                                <th scope="row">{i + 1}</th>
                                <td><img src={row?.img} alt="" /></td>
                                <td>{row?.student_name}</td>
                                <td>{row?.housename}</td>
                                <td>{row?.std}</td>
                                <td>{row?.logo}</td>
                                <td>{row?.vote}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table