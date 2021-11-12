import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TCToaster, successToast, errorToast } from '../../toaster/Toaster'
import Moment from 'react-moment';

function Collection() {
    const [collections, setCollections] = useState([])
    useEffect(() => {
        axios.get('/api/collection/collections')
            .then(res => {
                setCollections(...collections, res.data.data)
                successToast("successfully read")
            })
            .catch(err => {
                errorToast('error occourd')
            })
    }, [setCollections])

    return (
        <div>
            <TCToaster />
            <div className="card">
                <div className="card-header">All Collections</div>
                <div className="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">SL</th>
                                <th scope="col">Name</th>
                                <th scope="col">CreatedAt</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {collections.length > 0 && collections.map((collection, i) => (
                                <tr>
                                    <th scope="row">{i+1}</th>
                                    <td>{collection.name}</td>
                                    <td><Moment fromNow>{collection.createdAt}</Moment></td>
                                    <td>Edit | Delete</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Collection
