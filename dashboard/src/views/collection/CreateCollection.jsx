import React, { useState, useReducer, useEffect } from 'react'
import axios from 'axios'
import { successToast, errorToast, TCToaster } from 'src/toaster/Toaster'

const initialState = {
    name: '',
    status: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'name':
            let x = {
                ...state,
                name: action.event.target.value
            }
            return x
            break
        case 'status':
            return {
                ...state,
                status: action.event.target.checked
            }
            break
        case 'clear':
            return initialState
            break
        default:
            return state
    }
}


function CreateCollection() {

    const [collectionState, dispatch] = useReducer(reducer, initialState)
    const [isError, setIsError] = useState(true)

    useEffect(() => {
        handleInputError()
    })

    const handleInputError = () => {
        const { name, status } = collectionState
        if (name === '') {
            setIsError(true)
        }
        if (!status) {
            setIsError(true)
        }
        if (name != '' && status) {
            setIsError(false)
        }

    }

    const handleForm = event => {
        event.preventDefault()
        handleInputError()

        axios.post('/api/collection/create', { name: collectionState.name })
            .then(res => {
                if (res.data.status === 'success') {
                    successToast("New Collection Successfully Created..")
                    dispatch({ type: 'clear' })
                } else {
                    errorToast("Error Occoured.. Collection already stored!")
                }
            })
            .catch(err => errorToast("Error Occoured.."))
    }


    return (
        <div>
            <TCToaster
                position="bottom-center"
                reverseOrder={false}
            />
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Create Collection</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleForm}>
                                <div class="form-group">
                                    <label for="collectionName">Collection Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={collectionState.name}
                                        onChange={(e) => dispatch({
                                            type: 'name',
                                            event: e
                                        })}
                                        class="form-control"
                                        id="collectionName"
                                        placeholder="Enter Collectin Name"
                                    />
                                    <small className="text-danger">name</small>
                                </div>
                                <div class="form-group">
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            name="status"
                                            checked={collectionState.status}
                                            onChange={(e) => dispatch({
                                                type: 'status',
                                                event: e
                                            })}
                                            id="gridCheck"
                                        />
                                        <label class="form-check-label" for="gridCheck">
                                            Confirm to create collection
                                        </label>
                                    </div>
                                    <small className="text-danger">status</small>
                                </div>
                                <button disabled={isError} type="submit" class="btn btn-primary">Save Collection</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    )
}

export default CreateCollection
