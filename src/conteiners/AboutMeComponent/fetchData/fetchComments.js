import axios from "../../../axios";

const fetchComments = () => axios.get('./comments.json')
    .then(resp => Object.keys(resp.data).map(e => ({
        id: e,
        commentData: resp.data[e]
    })));

const wrapePromise = promise => {
    let status = 'pending';
    let result;
    const suspender = promise.then(
        r => {
            result = r;
            status= 'success';
        },
        e => {
            result = e;
            status = 'error'
        }
    );

    return {
        read() {
            if(status === 'pending'){
                throw suspender;
            } else if (status === 'error'){
                throw result;
            }
            return result;
        }
    }
};

export default wrapePromise(fetchComments());